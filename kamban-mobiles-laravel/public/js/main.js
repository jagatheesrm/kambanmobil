// Main JavaScript file for Kamban Mobiles Laravel

$(document).ready(function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Header scroll effect
    initHeaderScroll();
    
    // Mobile navigation
    initMobileNavigation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
});

// Header scroll effect
function initHeaderScroll() {
    const header = $('#header');
    const logo = $('#logo');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            header.addClass('header-scrolled');
            logo.attr('src', logo.attr('src').replace('kamban_black.png', 'kamban_white.png'));
        } else {
            header.removeClass('header-scrolled');
            logo.attr('src', logo.attr('src').replace('kamban_white.png', 'kamban_black.png'));
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

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});