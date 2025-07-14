@extends('layouts.app')

@section('title', $product->name . ' | Kamban Mobiles')
@section('description', $product->description)
@section('keywords', $product->name . ', ' . $product->brand->name . ', mobile phones, smartphones, ' . $product->category->name)

@section('content')
<div class="container mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <div class="flex items-center text-sm text-gray-600 mb-6">
        <a href="{{ route('home') }}" class="hover:text-primary transition-colors">Home</a>
        <i data-lucide="chevron-right" class="h-4 w-4 mx-2"></i>
        <a href="{{ route('products.index') }}" class="hover:text-primary transition-colors">Products</a>
        <i data-lucide="chevron-right" class="h-4 w-4 mx-2"></i>
        <span class="font-medium text-black">{{ $product->name }}</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <!-- Product Images -->
        <div class="relative">
            <div class="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-4">
                @if($product->images && count($product->images) > 0)
                    <img id="main-product-image" src="{{ asset('storage/' . $product->images[0]) }}" 
                         alt="{{ $product->name }}" class="w-full h-full object-cover">
                    
                    @if(count($product->images) > 1)
                        <button class="image-nav-btn absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white" data-direction="prev">
                            <i data-lucide="chevron-left" class="w-5 h-5 text-black"></i>
                        </button>
                        <button class="image-nav-btn absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white" data-direction="next">
                            <i data-lucide="chevron-right" class="w-5 h-5 text-black"></i>
                        </button>
                    @endif
                @else
                    <div class="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span class="text-gray-500">No Image Available</span>
                    </div>
                @endif
            </div>
            
            <!-- Image thumbnails -->
            @if($product->images && count($product->images) > 1)
                <div class="flex gap-2 overflow-x-auto">
                    @foreach($product->images as $index => $image)
                        <img src="{{ asset('storage/' . $image) }}" alt="{{ $product->name }} {{ $index + 1 }}" 
                             class="thumbnail-img w-16 h-16 object-cover rounded cursor-pointer border-2 {{ $index === 0 ? 'border-primary' : 'border-gray-300' }} hover:border-primary transition-colors" 
                             data-index="{{ $index }}">
                    @endforeach
                </div>
            @endif
        </div>

        <!-- Product Info -->
        <div>
            <h1 class="text-3xl font-bold mb-4">{{ $product->name }}</h1>
            <p class="text-2xl font-semibold text-primary mb-4">{{ $product->formatted_price }}</p>
            <p class="text-gray-600 mb-6">{{ $product->description }}</p>

            <!-- EMI Information -->
            @if($product->has_emi && $product->emi_option)
                <div class="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-primary">
                    <div class="flex items-start">
                        <i data-lucide="credit-card" class="h-5 w-5 mr-3 text-primary mt-0.5"></i>
                        <div>
                            <h3 class="font-semibold">EMI Available</h3>
                            <p class="text-sm text-gray-600">{{ $product->emi_option }}</p>
                        </div>
                    </div>
                </div>
            @endif

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
                @php
                    $whatsappMessage = "Hello, I'm interested in the {$product->name}. Can you provide more details?";
                    $whatsappUrl = "https://wa.me/918610088234?text=" . urlencode($whatsappMessage);
                @endphp
                
                <a href="{{ $whatsappUrl }}" target="_blank" class="bg-primary text-black px-6 py-3 rounded font-medium hover:bg-yellow-500 transition-colors text-center">
                    <i data-lucide="message-circle" class="inline w-5 h-5 mr-2"></i>
                    Enquire on WhatsApp
                </a>
                <a href="{{ route('contact') }}" class="border border-black text-black px-6 py-3 rounded hover:bg-black hover:text-white transition-colors text-center">
                    Contact Store
                </a>
            </div>

            <!-- Product Details -->
            <div class="border-t border-gray-200 pt-6">
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span class="text-gray-600">Brand:</span>
                        <span class="ml-2 font-medium">{{ $product->brand->name }}</span>
                    </div>
                    <div>
                        <span class="text-gray-600">Category:</span>
                        <span class="ml-2 font-medium">{{ ucfirst($product->category->name) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Product Tabs -->
    <div class="mb-16">
        <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8">
                <button class="tab-btn active border-b-2 border-primary text-primary py-2 px-1 font-medium" data-tab="specifications">
                    Specifications
                </button>
                <button class="tab-btn border-b-2 border-transparent text-gray-500 hover:text-gray-700 py-2 px-1 font-medium" data-tab="delivery">
                    Delivery & Returns
                </button>
            </nav>
        </div>

        <!-- Specifications Tab -->
        <div id="specifications-tab" class="tab-content p-6 border rounded-lg mt-2">
            @if($product->specifications)
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    @foreach($product->specifications as $key => $value)
                        <div class="border-b pb-3 mb-3">
                            <h3 class="font-medium text-gray-500 mb-1 capitalize">{{ str_replace('_', ' ', $key) }}</h3>
                            <p class="font-medium">
                                @if(is_array($value))
                                    {{ implode(', ', $value) }}
                                @else
                                    {{ $value }}
                                @endif
                            </p>
                        </div>
                    @endforeach
                </div>
            @else
                <p class="text-gray-600">No specifications available</p>
            @endif
        </div>

        <!-- Delivery Tab -->
        <div id="delivery-tab" class="tab-content p-6 border rounded-lg mt-2 hidden">
            <h3 class="font-bold text-lg mb-3">Delivery</h3>
            <p class="mb-4">Free delivery within Thirumangalam. Nominal charges apply for other locations.</p>

            <h3 class="font-bold text-lg mb-3">Returns</h3>
            <p class="mb-2">All products come with manufacturer warranty. Visit our store for any issues.</p>
            <ul class="list-disc pl-5 text-gray-600">
                <li class="mb-1">Bring your invoice and the product in original packaging</li>
                <li class="mb-1">Warranty claims processed as per manufacturer policy</li>
                <li>Our team will assist you with the return process</li>
            </ul>
        </div>
    </div>

    <!-- Similar Products -->
    @if($similarProducts->count() > 0)
        <section>
            <h2 class="text-2xl font-bold mb-6">Similar Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                @foreach($similarProducts as $similarProduct)
                    @include('partials.product-card', ['product' => $similarProduct])
                @endforeach
            </div>
        </section>
    @endif
</div>
@endsection

@push('scripts')
<script>
$(document).ready(function() {
    let currentImageIndex = 0;
    const images = @json($product->images ?? []);
    
    // Tab switching
    $('.tab-btn').click(function() {
        const tabName = $(this).data('tab');
        
        // Update tab buttons
        $('.tab-btn').removeClass('active border-primary text-primary').addClass('border-transparent text-gray-500');
        $(this).addClass('active border-primary text-primary').removeClass('border-transparent text-gray-500');
        
        // Update tab content
        $('.tab-content').addClass('hidden');
        $(`#${tabName}-tab`).removeClass('hidden');
    });
    
    // Image navigation
    $('.image-nav-btn').click(function() {
        const direction = $(this).data('direction');
        
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }
        
        showImage(currentImageIndex);
    });
    
    // Thumbnail clicks
    $('.thumbnail-img').click(function() {
        const index = parseInt($(this).data('index'));
        showImage(index);
    });
    
    function showImage(index) {
        if (index < 0 || index >= images.length) return;
        
        currentImageIndex = index;
        
        // Update main image
        $('#main-product-image').attr('src', '{{ asset("storage/") }}/' + images[index]);
        
        // Update thumbnail borders
        $('.thumbnail-img').removeClass('border-primary').addClass('border-gray-300');
        $(`.thumbnail-img[data-index="${index}"]`).removeClass('border-gray-300').addClass('border-primary');
    }
    
    // Re-initialize Lucide icons
    lucide.createIcons();
});
</script>
@endpush