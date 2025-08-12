// Product detail page functionality

class ProductDetailPage {
    constructor() {
        this.currentImageIndex = 0;
        this.product = null;
        this.productSlug = null;
        
        this.init();
    }
    
    init() {
        this.getProductSlugFromURL();
        this.bindEvents();
        this.loadProduct();
    }
    
    getProductSlugFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        this.productSlug = urlParams.get('slug');
        
        if (!this.productSlug) {
            this.showError();
            return;
        }
    }
    
    bindEvents() {
        // Tab switching
        $('.tab-btn').click((e) => {
            const tabName = $(e.target).data('tab');
            this.switchTab(tabName);
        });
        
        // Image navigation
        $(document).on('click', '.image-nav-btn', (e) => {
            const direction = $(e.target).data('direction');
            this.navigateImage(direction);
        });
        
        // Thumbnail clicks
        $(document).on('click', '.thumbnail-img', (e) => {
            const index = parseInt($(e.target).data('index'));
            this.showImage(index);
        });
    }
    
    async loadProduct() {
        try {
            this.showLoading();
            
            const response = await fetch(`https://admin.kambanmobiles.in/api/products/${this.productSlug}`, {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'HTML-App',
                },
            });
            
            if (!response.ok) {
                throw new Error(`Product not found: ${response.status}`);
            }
            
            this.product = await response.json();
            this.renderProduct();
            this.loadSimilarProducts();
            
        } catch (error) {
            console.error('Error loading product:', error);
            this.showError();
        }
    }
    
    renderProduct() {
        // Update page title and meta
        document.title = `${this.product.name} | Kamban Mobiles`;
        
        // Update breadcrumb
        $('#breadcrumb-product-name').text(this.product.name);
        
        // Update product info
        $('#product-name').text(this.product.name);
        $('#product-price').text(formatPrice(this.product.price));
        $('#product-description').text(this.product.description);
        $('#product-brand').text(this.product.brand);
        $('#product-category').text(this.capitalizeFirst(this.product.category));
        
        // Update WhatsApp link
        const whatsappMessage = `Hello, I'm interested in the ${this.product.name}. Can you provide more details?`;
        const whatsappUrl = `https://wa.me/918610088234?text=${encodeURIComponent(whatsappMessage)}`;
        $('#whatsapp-btn').attr('href', whatsappUrl);
        
        // Show EMI info if available
        if (this.product.has_emi && this.product.emi_option) {
            $('#emi-details').text(this.product.emi_option);
            $('#emi-info').removeClass('hidden');
        }
        
        // Render images
        this.renderImages();
        
        // Render specifications
        this.renderSpecifications();
        
        // Show the product container
        this.hideLoading();
        $('#product-detail-container').removeClass('hidden');
    }
    
    renderImages() {
        const images = this.product.images || [];
        
        if (images.length === 0) {
            $('#product-image-container').html(`
                <img src="assets/images/placeholder.jpg" alt="${this.product.name}" 
                     class="w-full h-full object-cover">
            `);
            return;
        }
        
        // Render main image container
        const mainImageHtml = `
            <img id="main-product-image" src="${this.getImageUrl(images[0])}" 
                 alt="${this.product.name}" class="w-full h-full object-cover">
            ${images.length > 1 ? `
                <button class="image-nav-btn absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white" data-direction="prev">
                    <i data-lucide="chevron-left" class="w-5 h-5 text-black"></i>
                </button>
                <button class="image-nav-btn absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white" data-direction="next">
                    <i data-lucide="chevron-right" class="w-5 h-5 text-black"></i>
                </button>
            ` : ''}
        `;
        
        $('#product-image-container').html(mainImageHtml);
        
        // Render thumbnails if multiple images
        if (images.length > 1) {
            const thumbnailsHtml = images.map((image, index) => `
                <img src="${this.getImageUrl(image)}" alt="${this.product.name} ${index + 1}" 
                     class="thumbnail-img w-16 h-16 object-cover rounded cursor-pointer border-2 ${index === 0 ? 'border-primary' : 'border-gray-300'} hover:border-primary transition-colors" 
                     data-index="${index}">
            `).join('');
            
            $('#image-thumbnails').html(thumbnailsHtml);
        }
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    }
    
    renderSpecifications() {
        const specs = this.product.specifications;
        
        if (!specs || Object.keys(specs).length === 0) {
            $('#specifications-content').html('<p class="text-gray-600">No specifications available</p>');
            return;
        }
        
        const specsHtml = Object.entries(specs).map(([key, value]) => `
            <div class="border-b pb-3 mb-3">
                <h3 class="font-medium text-gray-500 mb-1 capitalize">${key.replace(/_/g, ' ')}</h3>
                <p class="font-medium">${Array.isArray(value) ? value.join(', ') : value}</p>
            </div>
        `).join('');
        
        $('#specifications-content').html(`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${specsHtml}
            </div>
        `);
    }
    
    async loadSimilarProducts() {
        try {
            const response = await fetch(
                `https://admin.kambanmobiles.in/api/products?category=${this.product.category}&exclude=${this.product.id}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'User-Agent': 'HTML-App',
                    },
                }
            );
            
            if (!response.ok) {
                throw new Error('Failed to fetch similar products');
            }
            
            const similarProducts = await response.json();
            
            if (similarProducts.length > 0) {
                this.renderSimilarProducts(similarProducts.slice(0, 3));
            }
            
        } catch (error) {
            console.error('Error loading similar products:', error);
        }
    }
    
    renderSimilarProducts(products) {
        const productsHtml = products.map(product => createProductCard(product)).join('');
        
        $('#similar-products-section').html(`
            <section>
                <h2 class="text-2xl font-bold mb-6">Similar Products</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${productsHtml}
                </div>
            </section>
        `);
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    }
    
    getImageUrl(imageUrl) {
        if (imageUrl.startsWith('http')) {
            return imageUrl;
        }
        return `https://admin.kambanmobiles.in/storage/${imageUrl}`;
    }
    
    navigateImage(direction) {
        const images = this.product.images || [];
        
        if (images.length <= 1) return;
        
        if (direction === 'next') {
            this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
        } else {
            this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
        }
        
        this.showImage(this.currentImageIndex);
    }
    
    showImage(index) {
        const images = this.product.images || [];
        
        if (index < 0 || index >= images.length) return;
        
        this.currentImageIndex = index;
        
        // Update main image
        $('#main-product-image').attr('src', this.getImageUrl(images[index]));
        
        // Update thumbnail borders
        $('.thumbnail-img').removeClass('border-primary').addClass('border-gray-300');
        $(`.thumbnail-img[data-index="${index}"]`).removeClass('border-gray-300').addClass('border-primary');
    }
    
    switchTab(tabName) {
        // Update tab buttons
        $('.tab-btn').removeClass('active border-primary text-primary').addClass('border-transparent text-gray-500');
        $(`.tab-btn[data-tab="${tabName}"]`).addClass('active border-primary text-primary').removeClass('border-transparent text-gray-500');
        
        // Update tab content
        $('.tab-content').addClass('hidden');
        $(`#${tabName}-tab`).removeClass('hidden');
    }
    
    showLoading() {
        $('#loading-container').removeClass('hidden');
        $('#error-container').addClass('hidden');
        $('#product-detail-container').addClass('hidden');
    }
    
    hideLoading() {
        $('#loading-container').addClass('hidden');
    }
    
    showError() {
        $('#loading-container').addClass('hidden');
        $('#error-container').removeClass('hidden');
        $('#product-detail-container').addClass('hidden');
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    }
    
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize product detail page
$(document).ready(function() {
    new ProductDetailPage();
});