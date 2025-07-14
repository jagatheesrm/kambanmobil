<div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
    <a href="{{ route('products.show', $product) }}">
        <div class="relative h-60 overflow-hidden">
            @if($product->first_image)
                <img src="{{ asset('storage/' . $product->first_image) }}" alt="{{ $product->name }}" class="w-full h-full object-cover transition-transform duration-500">
            @else
                <div class="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span class="text-gray-500">No Image</span>
                </div>
            @endif
            
            @if($product->has_emi)
                <div class="absolute top-4 right-4 bg-primary text-black px-2 py-1 rounded text-sm font-medium">
                    EMI Available
                </div>
            @endif
        </div>
    </a>
    
    <div class="p-4">
        <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-lg line-clamp-1">{{ $product->name }}</h3>
            <span class="font-bold text-lg">{{ $product->formatted_price }}</span>
        </div>
        
        <p class="text-gray-600 text-sm line-clamp-2 mb-4">{{ $product->description }}</p>
        
        <div class="flex flex-col sm:flex-row gap-2">
            <a href="{{ route('products.show', $product) }}" 
               class="flex-1 bg-black text-white text-center py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                View Details
            </a>
            
            @php
                $whatsappMessage = "Hello, I'm interested in the {$product->name}. Can you provide more details?";
                $whatsappUrl = "https://wa.me/918610088234?text=" . urlencode($whatsappMessage);
            @endphp
            
            <a href="{{ $whatsappUrl }}" target="_blank" 
               class="flex-1 border border-black text-black text-center py-2 px-4 rounded hover:bg-black hover:text-white transition-colors">
                <i data-lucide="message-circle" class="inline w-4 h-4 mr-1"></i>
                Enquire
            </a>
        </div>
    </div>
</div>