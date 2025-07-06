// Products page functionality

class ProductsPage {
    constructor() {
        this.currentFilters = {
            category: null,
            brand: null,
            minPrice: 0,
            maxPrice: 100000,
            search: ''
        };
        this.currentSort = '';
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.allProducts = [];
        this.filteredProducts = [];
        
        this.init();
    }
    
    init() {
        this.loadFiltersData();
        this.bindEvents();
        this.loadURLParams();
        this.loadProducts();
    }
    
    bindEvents() {
        // Search functionality
        $('#search-input').on('input', debounce((e) => {
            this.currentFilters.search = e.target.value;
            this.applyFilters();
        }, 300));
        
        // Sort functionality
        $('#sort-select').change((e) => {
            this.currentSort = e.target.value;
            this.sortProducts();
        });
        
        // Filter toggles
        $('[data-toggle]').click((e) => {
            const target = $(e.currentTarget).data('toggle');
            const content = $(`#${target}-filter`);
            const icon = $(e.currentTarget).find('i');
            
            content.slideToggle();
            icon.toggleClass('rotate-180');
        });
        
        // Price range sliders
        $('#min-price, #max-price').on('input', debounce(() => {
            this.updatePriceRange();
        }, 300));
        
        // Reset and clear filters
        $('#reset-filters, #clear-filters').click(() => {
            this.resetFilters();
        });
        
        // Mobile filters
        $('#mobile-filter-btn').click(() => {
            this.showMobileFilters();
        });
        
        $('#close-mobile-filters').click(() => {
            this.hideMobileFilters();
        });
        
        // Load more
        $('#load-more-btn').click(() => {
            this.loadMoreProducts();
        });
    }
    
    async loadFiltersData() {
        try {
            const { categories, brands } = await loadFiltersData();
            this.renderCategoryFilters(categories);
            this.renderBrandFilters(brands);
        } catch (error) {
            console.error('Error loading filters:', error);
        }
    }
    
    renderCategoryFilters(categories) {
        const container = $('#categories-filter');
        
        if (categories.length === 0) {
            container.html('<p class="text-gray-500 text-sm">No categories available</p>');
            return;
        }
        
        const filtersHTML = categories.map(category => `
            <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="filter-checkbox mr-3" 
                       data-type="category" data-value="${category.name}" 
                       ${this.currentFilters.category === category.name ? 'checked' : ''}>
                <span class="text-gray-700">${category.name}</span>
            </label>
        `).join('');
        
        container.html(filtersHTML);
        
        // Bind checkbox events
        container.find('.filter-checkbox').change((e) => {
            this.handleFilterChange(e);
        });
    }
    
    renderBrandFilters(brands) {
        const container = $('#brands-filter');
        
        if (brands.length === 0) {
            container.html('<p class="text-gray-500 text-sm">No brands available</p>');
            return;
        }
        
        const filtersHTML = brands.map(brand => `
            <label class="flex items-center cursor-pointer">
                <input type="checkbox" class="filter-checkbox mr-3" 
                       data-type="brand" data-value="${brand.name}" 
                       ${this.currentFilters.brand === brand.name ? 'checked' : ''}>
                <span class="text-gray-700">${brand.name}</span>
            </label>
        `).join('');
        
        container.html(filtersHTML);
        
        // Bind checkbox events
        container.find('.filter-checkbox').change((e) => {
            this.handleFilterChange(e);
        });
    }
    
    handleFilterChange(e) {
        const checkbox = $(e.target);
        const type = checkbox.data('type');
        const value = checkbox.data('value');
        const isChecked = checkbox.is(':checked');
        
        if (type === 'category') {
            // Uncheck other category checkboxes
            $('[data-type="category"]').not(checkbox).prop('checked', false);
            this.currentFilters.category = isChecked ? value : null;
        } else if (type === 'brand') {
            // Uncheck other brand checkboxes
            $('[data-type="brand"]').not(checkbox).prop('checked', false);
            this.currentFilters.brand = isChecked ? value : null;
        }
        
        this.applyFilters();
        this.updateURL();
    }
    
    updatePriceRange() {
        const minPrice = parseInt($('#min-price').val());
        const maxPrice = parseInt($('#max-price').val());
        
        // Ensure min is not greater than max
        if (minPrice > maxPrice) {
            $('#min-price').val(maxPrice);
            this.currentFilters.minPrice = maxPrice;
        } else {
            this.currentFilters.minPrice = minPrice;
        }
        
        this.currentFilters.maxPrice = maxPrice;
        
        // Update display
        $('#min-price-display').text(formatPrice(this.currentFilters.minPrice));
        $('#max-price-display').text(formatPrice(this.currentFilters.maxPrice));
        
        this.applyFilters();
    }
    
    async loadProducts() {
        try {
            const response = await fetch('https://admin.kambanmobiles.in/api/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            
            this.allProducts = await response.json();
            this.applyFilters();
            
        } catch (error) {
            console.error('Error loading products:', error);
            this.showError('Failed to load products');
        }
    }
    
    applyFilters() {
        let filtered = [...this.allProducts];
        
        // Apply category filter
        if (this.currentFilters.category) {
            filtered = filtered.filter(product => 
                product.category.toLowerCase() === this.currentFilters.category.toLowerCase()
            );
        }
        
        // Apply brand filter
        if (this.currentFilters.brand) {
            filtered = filtered.filter(product => 
                product.brand.toLowerCase() === this.currentFilters.brand.toLowerCase()
            );
        }
        
        // Apply price range filter
        filtered = filtered.filter(product => 
            product.price >= this.currentFilters.minPrice && 
            product.price <= this.currentFilters.maxPrice
        );
        
        // Apply search filter
        if (this.currentFilters.search) {
            const searchTerm = this.currentFilters.search.toLowerCase();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm)
            );
        }
        
        this.filteredProducts = filtered;
        this.sortProducts();
        this.renderProducts();
        this.updateResultsCount();
    }
    
    sortProducts() {
        if (!this.currentSort) return;
        
        this.filteredProducts.sort((a, b) => {
            switch (this.currentSort) {
                case 'price_asc':
                    return a.price - b.price;
                case 'price_desc':
                    return b.price - a.price;
                case 'name_asc':
                    return a.name.localeCompare(b.name);
                case 'name_desc':
                    return b.name.localeCompare(a.name);
                default:
                    return 0;
            }
        });
        
        this.renderProducts();
    }
    
    renderProducts() {
        const container = $('#products-grid');
        
        if (this.filteredProducts.length === 0) {
            container.html(`
                <div class="col-span-full text-center py-12">
                    <i data-lucide="search-x" class="w-16 h-16 text-gray-400 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">No products found</h3>
                    <p class="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <button onclick="productsPage.resetFilters()" class="bg-primary text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
                        Clear Filters
                    </button>
                </div>
            `);
            lucide.createIcons();
            return;
        }
        
        const productsToShow = this.filteredProducts.slice(0, this.currentPage * this.productsPerPage);
        const productsHTML = productsToShow.map(product => createProductCard(product)).join('');
        
        container.html(productsHTML);
        lucide.createIcons();
        
        // Show/hide load more button
        const hasMore = this.filteredProducts.length > productsToShow.length;
        $('#load-more-container').toggleClass('hidden', !hasMore);
    }
    
    loadMoreProducts() {
        this.currentPage++;
        this.renderProducts();
    }
    
    updateResultsCount() {
        const count = this.filteredProducts.length;
        const total = this.allProducts.length;
        $('#results-count').text(`Showing ${count} of ${total} products`);
    }
    
    resetFilters() {
        this.currentFilters = {
            category: null,
            brand: null,
            minPrice: 0,
            maxPrice: 100000,
            search: ''
        };
        
        // Reset UI
        $('.filter-checkbox').prop('checked', false);
        $('#search-input').val('');
        $('#min-price').val(0);
        $('#max-price').val(100000);
        $('#min-price-display').text('₹0');
        $('#max-price-display').text('₹1,00,000');
        $('#sort-select').val('');
        
        this.currentSort = '';
        this.currentPage = 1;
        
        this.applyFilters();
        this.updateURL();
    }
    
    loadURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.get('category')) {
            this.currentFilters.category = urlParams.get('category');
        }
        
        if (urlParams.get('brand')) {
            this.currentFilters.brand = urlParams.get('brand');
        }
        
        if (urlParams.get('search')) {
            this.currentFilters.search = urlParams.get('search');
            $('#search-input').val(this.currentFilters.search);
        }
    }
    
    updateURL() {
        const params = new URLSearchParams();
        
        if (this.currentFilters.category) {
            params.set('category', this.currentFilters.category);
        }
        
        if (this.currentFilters.brand) {
            params.set('brand', this.currentFilters.brand);
        }
        
        if (this.currentFilters.search) {
            params.set('search', this.currentFilters.search);
        }
        
        const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
        window.history.replaceState({}, '', newURL);
    }
    
    showMobileFilters() {
        const modal = $('#mobile-filters-modal');
        const sidebar = modal.find('.w-80');
        
        // Clone desktop filters to mobile modal
        const filtersContent = $('#filters-sidebar').html();
        modal.find('.overflow-y-auto').html(filtersContent);
        
        modal.removeClass('hidden');
        setTimeout(() => {
            sidebar.removeClass('translate-x-full');
        }, 10);
        
        $('body').addClass('overflow-hidden');
    }
    
    hideMobileFilters() {
        const modal = $('#mobile-filters-modal');
        const sidebar = modal.find('.w-80');
        
        sidebar.addClass('translate-x-full');
        setTimeout(() => {
            modal.addClass('hidden');
            $('body').removeClass('overflow-hidden');
        }, 300);
    }
    
    showError(message) {
        $('#products-grid').html(`
            <div class="col-span-full text-center py-12">
                <i data-lucide="alert-circle" class="w-16 h-16 text-red-400 mx-auto mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">Error</h3>
                <p class="text-gray-600 mb-4">${message}</p>
                <button onclick="location.reload()" class="bg-primary text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
                    Try Again
                </button>
            </div>
        `);
        lucide.createIcons();
    }
}

// Initialize products page
let productsPage;

$(document).ready(function() {
    productsPage = new ProductsPage();
});