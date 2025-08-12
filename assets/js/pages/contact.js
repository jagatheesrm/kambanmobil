// Contact page functionality

class ContactPage {
    constructor() {
        this.form = $('#contact-form');
        this.submitBtn = $('#submit-btn');
        this.formContainer = $('#contact-form-container');
        this.successMessage = $('#success-message');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Form submission
        this.form.submit((e) => {
            e.preventDefault();
            this.handleSubmit();
        });
        
        // Send another message button
        $('#send-another').click(() => {
            this.resetForm();
        });
        
        // Real-time validation
        this.form.find('input, textarea').on('blur', (e) => {
            this.validateField($(e.target));
        });
        
        // Clear errors on input
        this.form.find('input, textarea').on('input', (e) => {
            this.clearFieldError($(e.target));
        });
    }
    
    async handleSubmit() {
        if (!this.validateForm()) {
            return;
        }
        
        const formData = this.getFormData();
        
        try {
            this.setLoading(true);
            
            await submitContactForm(formData);
            
            this.showSuccess();
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showError('There was a problem submitting the form. Please try again.');
        } finally {
            this.setLoading(false);
        }
    }
    
    validateForm() {
        let isValid = true;
        
        // Clear all previous errors
        this.clearAllErrors();
        
        // Validate name
        const name = $('#name').val().trim();
        if (name.length < 2) {
            this.showFieldError('#name', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        // Validate email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showFieldError('#email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone
        const phone = $('#phone').val().trim();
        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phone)) {
            this.showFieldError('#phone', 'Phone number must be at least 10 digits');
            isValid = false;
        }
        
        // Validate message
        const message = $('#message').val().trim();
        if (message.length < 10) {
            this.showFieldError('#message', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        return isValid;
    }
    
    validateField(field) {
        const fieldId = field.attr('id');
        const value = field.val().trim();
        
        this.clearFieldError(field);
        
        switch (fieldId) {
            case 'name':
                if (value.length > 0 && value.length < 2) {
                    this.showFieldError(field, 'Name must be at least 2 characters');
                    return false;
                }
                break;
                
            case 'email':
                if (value.length > 0) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        this.showFieldError(field, 'Please enter a valid email address');
                        return false;
                    }
                }
                break;
                
            case 'phone':
                if (value.length > 0) {
                    const phoneRegex = /^\d{10,}$/;
                    if (!phoneRegex.test(value)) {
                        this.showFieldError(field, 'Phone number must be at least 10 digits');
                        return false;
                    }
                }
                break;
                
            case 'message':
                if (value.length > 0 && value.length < 10) {
                    this.showFieldError(field, 'Message must be at least 10 characters');
                    return false;
                }
                break;
        }
        
        return true;
    }
    
    showFieldError(field, message) {
        const fieldElement = typeof field === 'string' ? $(field) : field;
        const errorElement = fieldElement.siblings('.error-message');
        
        fieldElement.addClass('border-red-500');
        errorElement.text(message).removeClass('hidden');
    }
    
    clearFieldError(field) {
        const fieldElement = typeof field === 'string' ? $(field) : field;
        const errorElement = fieldElement.siblings('.error-message');
        
        fieldElement.removeClass('border-red-500');
        errorElement.addClass('hidden');
    }
    
    clearAllErrors() {
        this.form.find('input, textarea').removeClass('border-red-500');
        this.form.find('.error-message').addClass('hidden');
    }
    
    getFormData() {
        return {
            name: $('#name').val().trim(),
            email: $('#email').val().trim(),
            phone: $('#phone').val().trim(),
            message: $('#message').val().trim()
        };
    }
    
    setLoading(loading) {
        if (loading) {
            this.submitBtn.prop('disabled', true);
            this.submitBtn.find('.submit-text').addClass('hidden');
            this.submitBtn.find('.loading-text').removeClass('hidden');
        } else {
            this.submitBtn.prop('disabled', false);
            this.submitBtn.find('.submit-text').removeClass('hidden');
            this.submitBtn.find('.loading-text').addClass('hidden');
        }
        
        // Re-initialize Lucide icons for the loading spinner
        lucide.createIcons();
    }
    
    showSuccess() {
        this.formContainer.addClass('hidden');
        this.successMessage.removeClass('hidden');
        
        // Re-initialize Lucide icons for the success checkmark
        lucide.createIcons();
    }
    
    showError(message) {
        // Create a temporary error message
        const errorDiv = $(`
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong>Error:</strong> ${message}
            </div>
        `);
        
        // Insert error message at the top of the form
        this.form.prepend(errorDiv);
        
        // Remove error message after 5 seconds
        setTimeout(() => {
            errorDiv.fadeOut(() => errorDiv.remove());
        }, 5000);
    }
    
    resetForm() {
        this.form[0].reset();
        this.clearAllErrors();
        this.formContainer.removeClass('hidden');
        this.successMessage.addClass('hidden');
    }
}

// Initialize contact page
$(document).ready(function() {
    new ContactPage();
});