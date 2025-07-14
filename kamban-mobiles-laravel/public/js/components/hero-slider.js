// Hero slider component for Laravel

class HeroSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = $('.hero-slide');
        this.dots = $('.hero-dot');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.startAutoPlay();
    }
    
    bindEvents() {
        // Dot navigation
        this.dots.click((e) => {
            const slideIndex = parseInt($(e.target).data('slide'));
            this.goToSlide(slideIndex);
        });
        
        // Pause autoplay on hover
        $('#hero-slider').hover(
            () => this.stopAutoPlay(),
            () => this.startAutoPlay()
        );
    }
    
    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides.removeClass('active');
        this.dots.removeClass('bg-primary w-6').addClass('bg-white bg-opacity-50 w-3');
        
        // Add active class to new slide and dot
        this.slides.eq(index).addClass('active');
        this.dots.eq(index).removeClass('bg-white bg-opacity-50 w-3').addClass('bg-primary w-6');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize hero slider when DOM is ready
$(document).ready(function() {
    if ($('#hero-slider').length) {
        new HeroSlider();
    }
});