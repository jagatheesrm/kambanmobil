@extends('layouts.app')

@section('title', 'Contact Us | Kamban Mobiles')
@section('description', 'Get in touch with Kamban Mobiles for any enquiries about mobile phones, accessories, or EMI options.')
@section('keywords', 'contact Kamban Mobiles, mobile store contact, Thirumangalam mobile shop')

@section('content')
<section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
            <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
            <p class="text-gray-600">
                We'd love to hear from you! Get in touch with us for any enquiries about our products or services.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div>
                <div class="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h2 class="text-2xl font-bold mb-6">Get In Touch</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i data-lucide="map-pin" class="h-6 w-6 text-primary"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-1">Address</h3>
                                <p class="text-gray-600">
                                    251, Usilai Road, Thirumangalam, Madurai – 625 706
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i data-lucide="phone" class="h-6 w-6 text-primary"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-1">Phone</h3>
                                <p class="text-gray-600">
                                    <a href="tel:+918610088234" class="hover:text-primary transition-colors">
                                        +91 86100 88234
                                    </a>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i data-lucide="mail" class="h-6 w-6 text-primary"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-1">Email</h3>
                                <p class="text-gray-600">
                                    <a href="mailto:contact@kambnmobiles.in" class="hover:text-primary transition-colors">
                                        contact@kambnmobiles.in
                                    </a>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i data-lucide="clock" class="h-6 w-6 text-primary"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-1">Hours</h3>
                                <p class="text-gray-600">
                                    Monday - Saturday: 9:00 AM - 8:00 PM<br>
                                    Sunday: 10:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-lg shadow-lg">
                    <h2 class="text-2xl font-bold mb-6">Connect With Us</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i data-lucide="instagram" class="h-6 w-6 text-primary"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-1">Instagram</h3>
                                <p class="text-gray-600">
                                    <a href="https://www.instagram.com/x_kamban_mobiles_x?igsh=NXAyb2U0cnY3eWgz" 
                                       target="_blank" rel="noopener noreferrer"
                                       class="hover:text-primary transition-colors">
                                        @x_kamban_mobiles_x
                                    </a>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-gray-100 p-3 rounded-full mr-4">
                                <i data-lucide="facebook" class="h-6 w-6 text-primary"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg mb-1">Facebook</h3>
                                <p class="text-gray-600">
                                    <a href="https://www.facebook.com/profile.php?id=61575250442707" 
                                       target="_blank" rel="noopener noreferrer"
                                       class="hover:text-primary transition-colors">
                                        Kamban Mobiles
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <div id="contact-form-container">
                    <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
                    
                    <form id="contact-form" action="{{ route('contact.store') }}" method="POST">
                        @csrf
                        <div class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent @error('name') border-red-500 @enderror"
                                       value="{{ old('name') }}">
                                @error('name')
                                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                                @enderror
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" name="email" required
                                           class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent @error('email') border-red-500 @enderror"
                                           value="{{ old('email') }}">
                                    @error('email')
                                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                                    @enderror
                                </div>

                                <div>
                                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" required
                                           class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent @error('phone') border-red-500 @enderror"
                                           value="{{ old('phone') }}">
                                    @error('phone')
                                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                                    @enderror
                                </div>
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" required
                                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent @error('message') border-red-500 @enderror"
                                          placeholder="What would you like to know?">{{ old('message') }}</textarea>
                                @error('message')
                                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                                @enderror
                            </div>

                            <button type="submit" id="submit-btn"
                                    class="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
                                <span class="submit-text">Send Message</span>
                                <span class="loading-text hidden">
                                    <i data-lucide="loader-2" class="inline w-4 h-4 mr-2 animate-spin"></i>
                                    Sending...
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Success Message -->
                <div id="success-message" class="text-center py-8 hidden">
                    <div class="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="check" class="h-8 w-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Thank You!</h3>
                    <p class="text-gray-600 mb-6">
                        Your message has been successfully sent. We will get back to you shortly.
                    </p>
                    <button id="send-another" class="bg-primary text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
                        Send Another Message
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Map Section -->
<section class="py-12">
    <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6">Our Location</h2>
        <div class="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=251,%20Usilai%20Rd,%20Tirumangalam,%20Tamil%20Nadu%20625706&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style="border: 0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Kamban Mobiles Store Location">
            </iframe>
        </div>
    </div>
</section>
@endsection

@push('scripts')
<script>
$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = $('#submit-btn');
        const formContainer = $('#contact-form-container');
        const successMessage = $('#success-message');
        
        // Show loading state
        submitBtn.prop('disabled', true);
        submitBtn.find('.submit-text').addClass('hidden');
        submitBtn.find('.loading-text').removeClass('hidden');
        
        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form.serialize(),
            success: function(response) {
                if (response.success) {
                    formContainer.addClass('hidden');
                    successMessage.removeClass('hidden');
                    form[0].reset();
                }
            },
            error: function(xhr) {
                if (xhr.status === 422) {
                    const errors = xhr.responseJSON.errors;
                    // Handle validation errors
                    Object.keys(errors).forEach(function(key) {
                        const input = $(`[name="${key}"]`);
                        input.addClass('border-red-500');
                        input.after(`<p class="text-red-500 text-sm mt-1">${errors[key][0]}</p>`);
                    });
                } else {
                    alert('An error occurred. Please try again.');
                }
            },
            complete: function() {
                // Hide loading state
                submitBtn.prop('disabled', false);
                submitBtn.find('.submit-text').removeClass('hidden');
                submitBtn.find('.loading-text').addClass('hidden');
                
                // Re-initialize Lucide icons
                lucide.createIcons();
            }
        });
    });
    
    // Send another message button
    $('#send-another').click(function() {
        $('#contact-form-container').removeClass('hidden');
        $('#success-message').addClass('hidden');
        
        // Clear any error messages
        $('.text-red-500').remove();
        $('input, textarea').removeClass('border-red-500');
    });
    
    // Clear errors on input
    $('input, textarea').on('input', function() {
        $(this).removeClass('border-red-500');
        $(this).siblings('.text-red-500').remove();
    });
});
</script>
@endpush