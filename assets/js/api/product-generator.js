// Product page generator - Creates individual product pages from API data

class ProductPageGenerator {
    constructor() {
        this.products = [];
        this.init();
    }
    
    async init() {
        await this.loadProducts();
        this.generateProductPages();
    }
    
    async loadProducts() {
        try {
            const response = await fetch('https://admin.kambanmobiles.in/api/products', {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'HTML-App',
                },
            });
            
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.status}`);
            }
            
            this.products = await response.json();
            console.log(`Loaded ${this.products.length} products from API`);
            
        } catch (error) {
            console.error('Error loading products:', error);
        }
    }
    
    generateProductPages() {
        // Update product cards to link to product-detail.html with slug parameter
        this.updateProductLinks();
        
        // Generate sitemap data
        this.generateSitemap();
    }
    
    updateProductLinks() {
        // This function updates existing product cards to use the correct links
        $('.product-card a[href*="/products/"]').each(function() {
            const href = $(this).attr('href');
            const slug = href.split('/').pop();
            $(this).attr('href', `product-detail.html?slug=${slug}`);
        });
    }
    
    generateSitemap() {
        // Generate sitemap data for SEO
        const sitemapUrls = this.products.map(product => ({
            url: `product-detail.html?slug=${product.slug}`,
            title: product.name,
            description: product.description
        }));
        
        console.log('Generated sitemap data:', sitemapUrls);
        
        // Store in localStorage for potential use
        localStorage.setItem('productSitemap', JSON.stringify(sitemapUrls));
    }
    
    // Method to get product by slug (for use in other scripts)
    getProductBySlug(slug) {
        return this.products.find(product => product.slug === slug);
    }
    
    // Method to get all products (for use in other scripts)
    getAllProducts() {
        return this.products;
    }
}

// Create global instance
window.productGenerator = new ProductPageGenerator();

// Helper function to create product cards with correct links
function createProductCardWithCorrectLink(product) {
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

// Override the original createProductCard function
function createProductCard(product) {
    return createProductCardWithCorrectLink(product);
}