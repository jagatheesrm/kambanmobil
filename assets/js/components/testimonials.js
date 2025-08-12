class TestimonialsSlider {
    constructor() {
        this.currentIndex = 0;
        this.testimonials = [];
        this.container = $('#testimonials-container');
        this.dotsContainer = $('#testimonial-dots');
        this.prevBtn = $('#prev-testimonial');
        this.nextBtn = $('#next-testimonial');

        this.init();
    }

    init() {
        this.bindEvents();
        this.loadTestimonials();
    }

    bindEvents() {
        this.prevBtn.click(() => this.prevTestimonial());
        this.nextBtn.click(() => this.nextTestimonial());
    }

    async loadTestimonials() {
        try {
            const testimonials = await fetchTestimonialsFromAPI();
            this.testimonials = testimonials || [];

            this.renderTestimonials();
            this.renderDots();

            if (this.testimonials.length > 0) {
                this.showTestimonial(0);
            }
        } catch (error) {
            console.error('Error loading testimonials:', error);
            this.showError();
        }
    }

    renderTestimonials() {
        if (!Array.isArray(this.testimonials) || this.testimonials.length === 0) {
            this.container.html('<p class="text-center text-gray-400">No testimonials available</p>');
            return;
        }

        const testimonialsHTML = this.testimonials.map((testimonial, index) => `
            <div class="testimonial-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="flex flex-col md:flex-row items-center gap-8">
                    <div class="w-32 h-32 relative rounded-full overflow-hidden border-4 border-primary shrink-0">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <p class="text-lg mb-6 italic">"${testimonial.quote}"</p>
                        <p class="font-bold text-xl">${testimonial.name}</p>
                        <p class="text-gray-400">${testimonial.location}</p>
                    </div>
                </div>
            </div>
        `).join('');

        this.container.html(testimonialsHTML);
    }

    renderDots() {
        if (this.testimonials.length <= 1) return;

        const dotsHTML = this.testimonials.map((_, index) => `
            <button class="testimonial-dot w-2 h-2 rounded-full transition-all ${index === 0 ? 'bg-primary w-4' : 'bg-gray-600'}" 
                    data-index="${index}"></button>
        `).join('');

        this.dotsContainer.html(dotsHTML);

        $('.testimonial-dot').click((e) => {
            const index = parseInt($(e.target).data('index'));
            this.showTestimonial(index);
        });
    }

    showTestimonial(index) {
        if (index < 0 || index >= this.testimonials.length) return;

        $('.testimonial-slide').removeClass('active');
        $('.testimonial-dot').removeClass('bg-primary w-4').addClass('bg-gray-600 w-2');

        $(`.testimonial-slide[data-index="${index}"]`).addClass('active');
        $(`.testimonial-dot[data-index="${index}"]`).removeClass('bg-gray-600 w-2').addClass('bg-primary w-4');

        this.currentIndex = index;
    }

    nextTestimonial() {
        const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.showTestimonial(nextIndex);
    }

    prevTestimonial() {
        const prevIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.showTestimonial(prevIndex);
    }

    showError() {
        this.container.html(`
            <div class="text-center py-8">
                <p class="text-gray-400 mb-4">Failed to load testimonials</p>
                <button onclick="location.reload()" class="bg-primary text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
                    Try Again
                </button>
            </div>
        `);
    }
}

// Init only once DOM is ready
$(document).ready(function () {
    if ($('#testimonials-container').length) {
        new TestimonialsSlider();
    }
});
