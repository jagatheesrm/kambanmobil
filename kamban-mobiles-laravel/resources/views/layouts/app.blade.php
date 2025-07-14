<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Kamban Mobiles | Mobile Phones & Accessories Store in Tamil Nadu')</title>
    <meta name="description" content="@yield('description', 'Buy the latest smartphones, accessories, and smartwatches at Kamban Mobiles. Located in Thirumangalam, Madurai. EMI options available.')">
    <meta name="keywords" content="@yield('keywords', 'mobile phones, smartphones, phone accessories, mobile store Tamil Nadu, Kamban Mobiles, EMI mobile phones')">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- Favicon -->
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#FFD700',
                        secondary: '#000000'
                    },
                    animation: {
                        'fadeIn': 'fadeIn 0.5s ease-out forwards',
                        'spin': 'spin 1s linear infinite'
                    }
                }
            }
        }
    </script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    @stack('styles')
</head>
<body class="bg-white text-gray-900">
    <!-- Header -->
    <header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent text-black py-4">
        <div class="container mx-auto px-4 flex items-center justify-between">
            <!-- Logo -->
            <a href="{{ route('home') }}" class="flex items-center space-x-2">
                <img id="logo" src="{{ asset('images/kamban_black.png') }}" alt="Kamban Mobiles Logo" class="h-10 w-auto">
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a href="{{ route('home') }}" class="font-medium hover:text-primary transition-colors nav-link {{ request()->routeIs('home') ? 'text-primary' : '' }}">Home</a>
                <a href="{{ route('about') }}" class="font-medium hover:text-primary transition-colors nav-link {{ request()->routeIs('about') ? 'text-primary' : '' }}">About Us</a>
                <a href="{{ route('products.index') }}" class="font-medium hover:text-primary transition-colors nav-link {{ request()->routeIs('products.*') ? 'text-primary' : '' }}">Products</a>
                <a href="{{ route('contact') }}" class="font-medium hover:text-primary transition-colors nav-link {{ request()->routeIs('contact') ? 'text-primary' : '' }}">Contact</a>
            </nav>

            <!-- Phone Button -->
            <div class="hidden md:flex items-center space-x-4">
                <a href="tel:+918610088234" class="border-2 border-black text-black px-4 py-2 rounded hover:bg-primary hover:text-black transition-colors">
                    <i data-lucide="phone" class="inline w-4 h-4 mr-2"></i>
                    +91 86100 88234
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden text-2xl">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>
    </header>

    <!-- Mobile Navigation -->
    <div id="mobile-nav" class="fixed inset-0 bg-black bg-opacity-95 z-50 transform translate-x-full transition-transform duration-300 flex flex-col">
        <div class="container mx-auto px-4 py-6 flex justify-end">
            <button id="mobile-nav-close" class="text-white text-3xl">
                <i data-lucide="x" class="w-8 h-8"></i>
            </button>
        </div>
        <div class="flex flex-col items-center justify-center space-y-8 flex-grow">
            <a href="{{ route('home') }}" class="text-white text-2xl font-medium hover:text-primary transition-colors mobile-nav-link {{ request()->routeIs('home') ? 'text-primary' : '' }}">Home</a>
            <a href="{{ route('about') }}" class="text-white text-2xl font-medium hover:text-primary transition-colors mobile-nav-link {{ request()->routeIs('about') ? 'text-primary' : '' }}">About Us</a>
            <a href="{{ route('products.index') }}" class="text-white text-2xl font-medium hover:text-primary transition-colors mobile-nav-link {{ request()->routeIs('products.*') ? 'text-primary' : '' }}">Products</a>
            <a href="{{ route('contact') }}" class="text-white text-2xl font-medium hover:text-primary transition-colors mobile-nav-link {{ request()->routeIs('contact') ? 'text-primary' : '' }}">Contact</a>
        </div>
        <div class="container mx-auto px-4 py-8 flex flex-col items-center">
            <p class="text-white mb-2">Contact Us</p>
            <a href="tel:+918610088234" class="text-primary text-xl font-bold mb-6">+91 86100 88234</a>
            <div class="flex space-x-4">
                <a href="https://www.instagram.com/x_kamban_mobiles_x?igsh=NXAyb2U0cnY3eWgz" target="_blank" class="text-white hover:text-primary transition-colors">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61575250442707" target="_blank" class="text-white hover:text-primary transition-colors">Facebook</a>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <main class="pt-16">
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">
                        <img src="{{ asset('images/kamban_white.png') }}" alt="Kamban Mobiles Logo" class="h-10 w-auto">
                    </h3>
                    <p class="text-gray-300 mb-4">
                        Your trusted store for the latest smartphones and accessories in Tamil Nadu.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.instagram.com/x_kamban_mobiles_x?igsh=NXAyb2U0cnY3eWgz" target="_blank" class="text-white hover:text-primary transition-colors">
                            <i data-lucide="instagram" class="h-5 w-5"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61575250442707" target="_blank" class="text-white hover:text-primary transition-colors">
                            <i data-lucide="facebook" class="h-5 w-5"></i>
                        </a>
                        <a href="mailto:contact@kambnmobiles.in" class="text-white hover:text-primary transition-colors">
                            <i data-lucide="mail" class="h-5 w-5"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="{{ route('home') }}" class="text-gray-300 hover:text-primary transition-colors">Home</a></li>
                        <li><a href="{{ route('about') }}" class="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="{{ route('products.index') }}" class="text-gray-300 hover:text-primary transition-colors">Products</a></li>
                        <li><a href="{{ route('contact') }}" class="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-xl font-bold mb-4">Products</h3>
                    <ul class="space-y-2">
                        <li><a href="{{ route('products.index', ['category' => 'smartphones']) }}" class="text-gray-300 hover:text-primary transition-colors">Smartphones</a></li>
                        <li><a href="{{ route('products.index', ['category' => 'accessories']) }}" class="text-gray-300 hover:text-primary transition-colors">Accessories</a></li>
                        <li><a href="{{ route('products.index', ['category' => 'smartwatches']) }}" class="text-gray-300 hover:text-primary transition-colors">Smart Watches</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i data-lucide="map-pin" class="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"></i>
                            <span>251, Usilai Road, Thirumangalam, Madurai – 625 706</span>
                        </li>
                        <li class="flex items-center">
                            <i data-lucide="phone" class="h-5 w-5 mr-2 text-primary shrink-0"></i>
                            <a href="tel:+918610088234" class="hover:text-primary transition-colors">+91 86100 88234</a>
                        </li>
                        <li class="flex items-center">
                            <i data-lucide="mail" class="h-5 w-5 mr-2 text-primary shrink-0"></i>
                            <a href="mailto:contact@kambnmobiles.in" class="hover:text-primary transition-colors">contact@kambnmobiles.in</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-12 pt-6 text-center">
                <p class="text-gray-400">
                    &copy; {{ date('Y') }} Kamban Mobiles. All rights reserved.
                </p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/918610088234" target="_blank" class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40">
        <i data-lucide="message-circle" class="w-6 h-6"></i>
    </a>

    <!-- Scripts -->
    <script>
        // Set CSRF token for AJAX requests
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>
    <script src="{{ asset('js/main.js') }}"></script>
    
    @stack('scripts')
</body>
</html>