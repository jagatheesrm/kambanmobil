@extends('layouts.app')

@section('title', 'Kamban Mobiles | Mobile Phones & Accessories Store in Tamil Nadu')
@section('description', 'Buy the latest smartphones, accessories, and smartwatches at Kamban Mobiles. Located in Thirumangalam, Madurai. EMI options available.')

@section('content')
<!-- Hero Section -->
<section class="relative h-screen min-h-[600px] overflow-hidden">
    <div id="hero-slider" class="relative w-full h-full">
        <div class="hero-slide active absolute inset-0">
            <img src="https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Latest smartphone display" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div class="hero-slide absolute inset-0">
            <img src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Premium mobile phones collection" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div class="hero-slide absolute inset-0">
            <img src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Smart devices showcase" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
    </div>
    
    <div class="absolute inset-0 flex items-center">
        <div class="container mx-auto px-4 z-10">
            <div class="max-w-2xl">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
                    Discover the Latest in
                    <span class="text-primary"> Mobile Technology</span>
                </h1>
                <p class="text-lg md:text-xl text-white mb-8 animate-fadeIn">
                    Premium smartphones, accessories, and smart watches. Now with EMI options available.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 animate-fadeIn">
                    <a href="{{ route('products.index') }}" class="bg-primary text-black px-8 py-3 rounded font-medium hover:bg-yellow-500 transition-colors text-center">
                        Explore Products
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Pagination dots -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        <button class="hero-dot w-3 h-3 rounded-full bg-primary transition-all" data-slide="0"></button>
        <button class="hero-dot w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all" data-slide="1"></button>
        <button class="hero-dot w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all" data-slide="2"></button>
    </div>
</section>

<!-- Featured Categories -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">Featured Categories</h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore our wide range of products across these popular categories
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @forelse($categories as $category)
                <a href="{{ route('products.index', ['category' => $category->slug]) }}" 
                   class="category-card group relative overflow-hidden rounded-lg shadow-lg h-64 transform transition-transform duration-300 hover:-translate-y-2">
                    @if($category->image)
                        <img src="{{ asset('storage/' . $category->image) }}" alt="{{ $category->name }}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    @else
                        <div class="w-full h-full bg-gray-300 flex items-center justify-center">
                            <span class="text-gray-500">No Image</span>
                        </div>
                    @endif
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {{ $category->name }}
                        </h3>
                        <p class="text-sm text-gray-200">{{ $category->description ?: 'Explore products' }}</p>
                    </div>
                </a>
            @empty
                <div class="col-span-full text-center py-8">
                    <p class="text-gray-600">No categories available at the moment.</p>
                </div>
            @endforelse
        </div>
    </div>
</section>

<!-- Featured Products -->
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
                <h2 class="text-3xl font-bold mb-2">Featured Products</h2>
                <p class="text-gray-600 max-w-2xl">
                    Discover our most popular smartphones and accessories
                </p>
            </div>
            <a href="{{ route('products.index') }}" class="mt-4 md:mt-0 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition-colors text-center">
                View All Products
            </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            @forelse($featuredProducts as $product)
                @include('partials.product-card', ['product' => $product])
            @empty
                <div class="col-span-full text-center py-8">
                    <p class="text-gray-600">No featured products available at the moment.</p>
                </div>
            @endforelse
        </div>
    </div>
</section>

<!-- EMI Section -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold mb-6">
                    <span class="text-primary">EMI Options</span> Available
                </h2>
                <p class="text-gray-600 mb-8">
                    Make your dream device affordable with our flexible EMI plans. Buy now and pay in easy monthly installments with minimal documentation.
                </p>
                
                <div class="space-y-6 mb-8">
                    <div class="flex items-start">
                        <div class="bg-primary p-3 rounded-lg mr-4">
                            <i data-lucide="credit-card" class="h-6 w-6 text-black"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg">Multiple Payment Options</h3>
                            <p class="text-gray-600">Credit cards, debit cards, and no-cost EMI options available</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-primary p-3 rounded-lg mr-4">
                            <i data-lucide="dollar-sign" class="h-6 w-6 text-black"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg">No Hidden Charges</h3>
                            <p class="text-gray-600">Transparent pricing with no processing fees</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-primary p-3 rounded-lg mr-4">
                            <i data-lucide="calendar" class="h-6 w-6 text-black"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg">Flexible Tenure</h3>
                            <p class="text-gray-600">Choose from 3, 6, 9, or 12 month payment plans</p>
                        </div>
                    </div>
                </div>
                
                <a href="{{ route('products.index') }}" class="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors inline-block">
                    Explore EMI-eligible Products
                </a>
            </div>
            
            <div class="relative h-80 md:h-96 lg:h-full order-1 lg:order-2">
                <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="EMI Payment Options" class="w-full h-full object-cover rounded-lg shadow-xl">
                <div class="absolute -bottom-5 -right-5 bg-primary text-black font-bold py-3 px-6 rounded-lg transform rotate-6 shadow-lg">
                    No-Cost EMI Available
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-black text-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">
            What Our <span class="text-primary">Customers</span> Say
        </h2>
        
        @if($testimonials->count() > 0)
            <div class="relative max-w-4xl mx-auto px-4">
                <div class="absolute -top-10 left-0 text-primary opacity-20">
                    <i data-lucide="quote" class="w-20 h-20"></i>
                </div>
                
                <div id="testimonials-container" class="relative z-10">
                    @foreach($testimonials as $index => $testimonial)
                        <div class="testimonial-slide {{ $index === 0 ? 'active' : '' }}" data-index="{{ $index }}">
                            <div class="flex flex-col md:flex-row items-center gap-8">
                                <div class="w-32 h-32 relative rounded-full overflow-hidden border-4 border-primary shrink-0">
                                    @if($testimonial->image)
                                        <img src="{{ asset('storage/' . $testimonial->image) }}" alt="{{ $testimonial->name }}" class="w-full h-full object-cover">
                                    @else
                                        <div class="w-full h-full bg-gray-600 flex items-center justify-center">
                                            <i data-lucide="user" class="w-12 h-12 text-gray-400"></i>
                                        </div>
                                    @endif
                                </div>
                                <div>
                                    <p class="text-lg mb-6 italic">"{{ $testimonial->quote }}"</p>
                                    <p class="font-bold text-xl">{{ $testimonial->name }}</p>
                                    <p class="text-gray-400">{{ $testimonial->location }}</p>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                
                @if($testimonials->count() > 1)
                    <div class="flex justify-center mt-8 gap-4">
                        <button id="prev-testimonial" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-black transition-colors flex items-center justify-center">
                            <i data-lucide="chevron-left" class="h-5 w-5"></i>
                        </button>
                        
                        <div id="testimonial-dots" class="flex gap-2 items-center">
                            @foreach($testimonials as $index => $testimonial)
                                <button class="testimonial-dot w-2 h-2 rounded-full transition-all {{ $index === 0 ? 'bg-primary w-4' : 'bg-gray-600' }}" data-index="{{ $index }}"></button>
                            @endforeach
                        </div>
                        
                        <button id="next-testimonial" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-black transition-colors flex items-center justify-center">
                            <i data-lucide="chevron-right" class="h-5 w-5"></i>
                        </button>
                    </div>
                @endif
            </div>
        @else
            <div class="text-center py-8">
                <p class="text-gray-400">No testimonials available at the moment.</p>
            </div>
        @endif
    </div>
</section>

<!-- Call to Action -->
<section class="bg-black text-white py-16">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Visit Our Store Today
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience our wide range of smartphones and accessories in person. Our expert staff is ready to help you find the perfect device.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="{{ route('products.index') }}" class="bg-primary text-black px-8 py-3 rounded font-medium hover:bg-yellow-500 transition-colors">
                Browse Products
            </a>
            <a href="{{ route('contact') }}" class="border border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-black transition-colors">
                Contact Us
            </a>
        </div>
    </div>
</section>
@endsection

@push('scripts')
<script src="{{ asset('js/components/hero-slider.js') }}"></script>
<script src="{{ asset('js/components/testimonials.js') }}"></script>
@endpush