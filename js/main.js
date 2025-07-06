// Main JavaScript file for Kamban Mobiles

$(document).ready(function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set current year in footer
    $('#current-year').text(new Date().getFullYear());
    
    // Header scroll effect
    initHeaderScroll();
    
    // Mobile navigation
    initMobileNavigation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    
    if (currentPage === 'index') {
        initHomePage();
    } else if (currentPage === 'products') {
        initProductsPage();
    } else if (currentPage === 'product-detail') {
        // Product detail page initialization is handled in product-detail.js
    }
    
    // Load product generator for all pages
    loadScript('js/api/product-generator.js');
});

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    
    if (page === '' || page === 'index') return 'index';
    if (page === 'products') return 'products';
    if (page === 'product-detail') return 'product-detail';
    if (page === 'about') return 'about';
    if (page === 'contact') return 'contact';
    
    return page;
}

// Header scroll effect
function initHeaderScroll() {
    const header = $('#header');
    const logo = $('#logo');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            header.addClass('header-scrolled');
            logo.attr('src', 'assets/images/kamban_white.png');
        } else {
            header.removeClass('header-scrolled');
            logo.attr('src', 'assets/images/kamban_black.png');
        }
    });
}

// Mobile navigation
function initMobileNavigation() {
    const mobileMenuBtn = $('#mobile-menu-btn');
    const mobileNav = $('#mobile-nav');
    const mobileNavClose = $('#mobile-nav-close');
    const mobileNavLinks = $('.mobile-nav-link');
    
    mobileMenuBtn.click(function() {
        mobileNav.addClass('mobile-nav-open');
        $('body').addClass('overflow-hidden');
    });
    
    mobileNavClose.click(function() {
        mobileNav.removeClass('mobile-nav-open');
        $('body').removeClass('overflow-hidden');
    });
    
    mobileNavLinks.click(function() {
        mobileNav.removeClass('mobile-nav-open');
        $('body').removeClass('overflow-hidden');
    });
    
    // Close mobile nav when clicking outside
    mobileNav.click(function(e) {
        if (e.target === this) {
            mobileNav.removeClass('mobile-nav-open');
            $('body').removeClass('overflow-hidden');
        }
    });
}

// Smooth scrolling
function initSmoothScrolling() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
}

// Home page specific initialization
function initHomePage() {
    // Load dynamic content
    loadCategories();
    loadFeaturedProducts();
    loadTestimonials();
}

// Products page specific initialization
function initProductsPage() {
    // Products page initialization is handled in products.js
    loadScript('js/pages/products.js');
}

// Utility functions
function showLoading(container) {
    container.html(`
        <div class="flex justify-center items-center min-h-[200px]">
            <div class="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    `);
}

function showError(container, message = 'Failed to load content') {
    container.html(`
        <div class="flex justify-center items-center min-h-[200px]">
            <div class="text-center">
                <p class="text-gray-600 mb-4">${message}</p>
                <button onclick="location.reload()" class="bg-primary text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
                    Try Again
                </button>
            </div>
        </div>
    `);
}

// Format price function
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Generate WhatsApp URL
function generateWhatsAppURL(productName) {
    const message = `Hello, I'm interested in the ${productName}. Can you provide more details?`;
    return `https://wa.me/918610088234?text=${encodeURIComponent(message)}`;
}

// Debounce function for search/filter
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Set URL parameter
function setURLParameter(name, value) {
    const url = new URL(window.location);
    if (value) {
        url.searchParams.set(name, value);
    } else {
        url.searchParams.delete(name);
    }
    window.history.pushState({}, '', url);
}

// Load script dynamically
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    $('.animate-on-scroll').each(function() {
        observer.observe(this);
    });
}

// Initialize scroll animations when DOM is ready
$(document).ready(function() {
    initScrollAnimations();
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});