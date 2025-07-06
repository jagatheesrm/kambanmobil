// Data loading functions for API integration

// Load categories for home page
async function loadCategories() {
    const container = $('#categories-grid');
    
    try {
        showLoading(container);
        
        const response = await fetch('https://admin.kambanmobiles.in/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        
        const categories = await response.json();
        
        if (categories.length === 0) {
            container.html('<p class="text-center text-gray-600 col-span-full">No categories available</p>');
            return;
        }
        
        const categoriesHTML = categories.map((category, index) => {
            const imageUrl = category.image.startsWith('http') 
                ? category.image 
                : `https://admin.kambanmobiles.in/storage/${category.image}`;
                
            return `
                <a href="products.html?category=${encodeURIComponent(category.name)}" 
                   class="category-card group relative overflow-hidden rounded-lg shadow-lg h-64 transform transition-transform duration-300 hover:-translate-y-2">
                    <img src="${imageUrl}" alt="${category.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                            ${category.name}
                        </h3>
                        <p class="text-sm text-gray-200">${category.description || 'Explore products'}</p>
                    </div>
                </a>
            `;
        }).join('');
        
        container.html(categoriesHTML);
        
    } catch (error) {
        console.error('Error loading categories:', error);
        showError(container, 'Failed to load categories');
    }
}

// Load featured products for home page
async function loadFeaturedProducts() {
    const container = $('#featured-products');
    
    try {
        showLoading(container);
        
        const response = await fetch('https://admin.kambanmobiles.in/api/featured-products');
        if (!response.ok) throw new Error('Failed to fetch featured products');
        
        const products = await response.json();
        
        if (products.length === 0) {
            container.html('<p class="text-center text-gray-600 col-span-full">No featured products available</p>');
            return;
        }
        
        const productsHTML = products.map(product => createProductCard(product)).join('');
        container.html(productsHTML);
        
    } catch (error) {
        console.error('Error loading featured products:', error);
        showError(container, 'Failed to load featured products');
    }
}

// Load products with filters
async function loadProducts(filters = {}) {
    const container = $('#products-grid');
    
    try {
        showLoading(container);
        
        const params = new URLSearchParams();
        if (filters.category) params.set('category', filters.category);
        if (filters.brand) params.set('brand', filters.brand);
        if (filters.minPrice) params.set('min_price', filters.minPrice);
        if (filters.maxPrice) params.set('max_price', filters.maxPrice);
        if (filters.search) params.set('search', filters.search);
        
        const response = await fetch(`https://admin.kambanmobiles.in/api/products?${params.toString()}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const products = await response.json();
        
        if (products.length === 0) {
            container.html(`
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-600 mb-4">No products found matching your criteria</p>
                    <button onclick="clearFilters()" class="bg-primary text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
                        Clear Filters
                    </button>
                </div>
            `);
            return;
        }
        
        const productsHTML = products.map(product => createProductCard(product)).join('');
        container.html(productsHTML);
        
    } catch (error) {
        console.error('Error loading products:', error);
        showError(container, 'Failed to load products');
    }
}

// Load single product details
async function loadProductDetails(slug) {
    try {
        const response = await fetch(`https://admin.kambanmobiles.in/api/products/${slug}`);
        if (!response.ok) {
            if (response.status === 404) {
                window.location.href = '404.html';
                return;
            }
            throw new Error('Failed to fetch product details');
        }
        
        const product = await response.json();
        renderProductDetails(product);
        
    } catch (error) {
        console.error('Error loading product details:', error);
        showError($('#product-details'), 'Failed to load product details');
    }
}

// Load filters data (categories and brands)
async function loadFiltersData() {
    try {
        const [categoriesResponse, brandsResponse] = await Promise.all([
            fetch('https://admin.kambanmobiles.in/api/categories'),
            fetch('https://admin.kambanmobiles.in/api/brands')
        ]);
        
        if (!categoriesResponse.ok || !brandsResponse.ok) {
            throw new Error('Failed to fetch filter data');
        }
        
        const categories = await categoriesResponse.json();
        const brands = await brandsResponse.json();
        
        return { categories, brands };
        
    } catch (error) {
        console.error('Error loading filters data:', error);
        return { categories: [], brands: [] };
    }
}

// Create product card HTML
function createProductCard(product) {
    const imageUrl = product.images && product.images.length > 0 ? product.images[0] : '/assets/images/placeholder.jpg';
    const whatsappUrl = generateWhatsAppURL(product.name);
    
    return `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
            <a href="product-detail.html?slug=${product.slug}">
                <div class="relative h-60 overflow-hidden">
                    <img src="${imageUrl}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500">
                    ${product.has_emi ? `
                        <div class="absolute top-4 right-4 bg-primary text-black px-2 py-1 rounded text-sm font-medium">
                            EMI Available
                        </div>
                    ` : ''}
                </div>
            </a>
            
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-semibold text-lg line-clamp-1">${product.name}</h3>
                    <span class="font-bold text-lg">${formatPrice(product.price)}</span>
                </div>
                
                <p class="text-gray-600 text-sm line-clamp-2 mb-4">${product.description}</p>
                
                <div class="flex flex-col sm:flex-row gap-2">
                    <a href="product-detail.html?slug=${product.slug}" 
                       class="flex-1 bg-black text-white text-center py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                        View Details
                    </a>
                    
                    <a href="${whatsappUrl}" target="_blank" 
                       class="flex-1 border border-black text-black text-center py-2 px-4 rounded hover:bg-black hover:text-white transition-colors">
                        <i data-lucide="message-circle" class="inline w-4 h-4 mr-1"></i>
                        Enquire
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Submit contact form
async function submitContactForm(formData) {
    try {
        const response = await fetch('https://admin.kambanmobiles.in/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
        
        return await response.json();
        
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
}