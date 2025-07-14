@extends('layouts.app')

@section('title', 'About Us | Kamban Mobiles')
@section('description', 'Learn about Kamban Mobiles, your trusted mobile and accessories store in Thirumangalam, Madurai.')
@section('keywords', 'mobile store Madurai, Kamban Mobiles about, mobile shop Thirumangalam')

@section('content')
<!-- Hero Section -->
<section class="relative h-[50vh] min-h-[400px] bg-black">
    <div class="absolute inset-0 overflow-hidden opacity-60">
        <img src="{{ asset('images/ourshop.webp') }}" alt="Kamban Mobiles Store" class="w-full h-full object-cover">
    </div>
    <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                About <span class="text-primary">Kamban Mobiles</span>
            </h1>
            <p class="text-xl text-white">
                Your trusted destination for mobile phones and accessories in Tamil Nadu
            </p>
        </div>
    </div>
</section>

<!-- Our Story -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-6">Our Story</h2>
                <p class="text-gray-600 mb-4">
                    Founded with a passion for technology and customer service, Kamban Mobiles has been serving the people of Thirumangalam and surrounding areas with quality mobile products and exceptional service.
                </p>
                <p class="text-gray-600 mb-4">
                    We started as a small shop with a simple goal: to provide genuine products at fair prices while building lasting relationships with our customers. Today, we've grown to become one of the most trusted mobile retailers in the region.
                </p>
                <p class="text-gray-600 mb-6">
                    At Kamban Mobiles, we understand that a mobile phone is more than just a device—it's an essential part of your daily life. That's why we strive to offer only the best products and provide honest advice to help you make the right choice.
                </p>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <i data-lucide="shield-check" class="h-10 w-10 text-primary mb-2"></i>
                        <h3 class="font-bold text-lg">Genuine Products</h3>
                    </div>
                    <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <i data-lucide="users" class="h-10 w-10 text-primary mb-2"></i>
                        <h3 class="font-bold text-lg">Expert Advice</h3>
                    </div>
                    <div class="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <i data-lucide="clock" class="h-10 w-10 text-primary mb-2"></i>
                        <h3 class="font-bold text-lg">After Sales Support</h3>
                    </div>
                </div>
            </div>
            
            <div class="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="https://lh3.googleusercontent.com/p/AF1QipNPNtu_DjehPWp4UhzsGG7FIVfdht7YiEq940Zt=s680-w680-h510-rw" alt="Our shop interior" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us -->
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Kamban Mobiles</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <i data-lucide="shield-check" class="h-6 w-6 text-black"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">Authentic Products</h3>
                <p class="text-gray-600">
                    We guarantee that all our products are 100% genuine with manufacturer warranty.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <i data-lucide="users" class="h-6 w-6 text-black"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">Expert Team</h3>
                <p class="text-gray-600">
                    Our knowledgeable staff provides honest advice to help you find the perfect device.
                </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <i data-lucide="credit-card" class="h-6 w-6 text-black"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">EMI Options</h3>
                <p class="text-gray-600">
                    Make your purchase affordable with our flexible EMI plans with minimal documentation.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Location & Contact -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-6">Visit Our Store</h2>
                <p class="text-gray-600 mb-8">
                    We'd love to welcome you to our store. Visit us to explore our products in person and get expert advice from our team.
                </p>
                
                <div class="space-y-6 mb-8">
                    <div class="flex items-start">
                        <i data-lucide="map-pin" class="h-6 w-6 text-primary mr-4 shrink-0 mt-1"></i>
                        <div>
                            <h3 class="font-bold text-lg mb-1">Address</h3>
                            <p class="text-gray-600">
                                251, Usilai Road, Thirumangalam, Madurai – 625 706
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <i data-lucide="phone" class="h-6 w-6 text-primary mr-4 shrink-0 mt-1"></i>
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
                        <i data-lucide="mail" class="h-6 w-6 text-primary mr-4 shrink-0 mt-1"></i>
                        <div>
                            <h3 class="font-bold text-lg mb-1">Email</h3>
                            <p class="text-gray-600">
                                <a href="mailto:contact@kambnmobiles.in" class="hover:text-primary transition-colors">
                                    contact@kambnmobiles.in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <a href="{{ route('contact') }}" class="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors inline-block">
                    Contact Us
                </a>
            </div>
            
            <div class="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62970.61556624028!2d77.84845881861979!3d9.831242448987894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0375dfd3063bbb%3A0x84bf2d050e8e5be4!2sThirumangalam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718352444022!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style="border: 0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Kamban Mobiles Store Location"
                    class="absolute inset-0">
                </iframe>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
            Ready to Explore Our Products?
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8">
            Browse our wide range of smartphones, accessories, and smart watches. EMI options available.
        </p>
        <a href="{{ route('products.index') }}" class="bg-primary text-black px-8 py-3 rounded font-medium hover:bg-yellow-500 transition-colors inline-block">
            View Products
        </a>
    </div>
</section>
@endsection