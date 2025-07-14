// Testimonials component for Laravel

class TestimonialsSlider {
    constructor() {
        this.currentIndex = 0;
        this.slides = $('.testimonial-slide');
        this.dots = $('.testimonial-dot');
        this.prevBtn = $('#prev-testimonial');
        this.nextBtn = $('#next-testimonial');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        
        if (this.slides.length > 0) {
            this.showTestimonial(0);
        }
    }
    
    bindEvents() {
        this.prevBtn.click(() => this.prevTestimonial());
        this.nextBtn.click(() => this.nextTestimonial());
        
        // Bind dot click events
        this.dots.click((e) => {
            const index = parseInt($(e.target).data('index'));
            this.showTestimonial(index);
        });
    }
    
    showTestimonial(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        // Hide all testimonials
        this.slides.removeClass('active');
        this.dots.removeClass('bg-primary w-4').addClass('bg-gray-600 w-2');
        
        // Show selected testimonial
        this.slides.eq(index).addClass('active');
        this.dots.eq(index).removeClass('bg-gray-600 w-2').addClass('bg-primary w-4');
        
        this.currentIndex = index;
    }
    
    nextTestimonial() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.showTestimonial(nextIndex);
    }
    
    prevTestimonial() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showTestimonial(prevIndex);
    }
}

// Initialize testimonials slider when DOM is ready
$(document).ready(function() {
    if ($('.testimonial-slide').length) {
        new TestimonialsSlider();
    }
});