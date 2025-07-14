@extends('layouts.app')

@section('title', 'Products | Kamban Mobiles')
@section('description', 'Browse our wide range of smartphones, accessories, and smartwatches at Kamban Mobiles. EMI options available.')
@section('keywords', 'mobile phones, smartphones, phone accessories, smartwatches, Kamban Mobiles products')

@section('content')
<div class="container mx-auto px-4 py-8">
    <!-- Page Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
            <h1 class="text-3xl font-bold mb-2">Our Products</h1>
            <p class="text-gray-600">Discover our wide range of smartphones, accessories, and smartwatches</p>
        </div>

        <!-- Search Bar -->
        <div class="mt-4 md:mt-0 flex items-center space-x-4">
            <form method="GET" action="{{ route('products.index') }}" class="relative">
                <input type="text" name="search" value="{{ request('search') }}" placeholder="Search products..." 
                       class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <i data-lucide="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"></i>
                <input type="hidden" name="category" value="{{ request('category') }}">
                <input type="hidden" name="brand" value="{{ request('brand') }}">
                <input type="hidden" name="min_price" value="{{ request('min_price') }}">
                <input type="hidden" name="max_price" value="{{ request('max_price') }}">
                <input type="hidden" name="sort" value="{{ request('sort') }}">
            </form>
            
            <!-- Mobile Filter Button -->
            <button id="mobile-filter-btn" class="lg:hidden bg-primary text-black px-4 py-2 rounded-lg">
                <i data-lucide="filter" class="w-5 h-5"></i>
            </button>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <aside class="lg:w-1/4">
            <div class="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-bold">Filters</h2>
                    <a href="{{ route('products.index') }}" class="text-sm text-gray-500 hover:text-black transition-colors">
                        Reset All
                    </a>
                </div>
                
                <form method="GET" action="{{ route('products.index') }}" id="filter-form">
                    <!-- Categories Filter -->
                    <div class="mb-6">
                        <h3 class="font-semibold mb-3">Categories</h3>
                        <div class="space-y-2">
                            @foreach($categories as $category)
                                <label class="flex items-center cursor-pointer">
                                    <input type="radio" name="category" value="{{ $category->slug }}" 
                                           {{ request('category') === $category->slug ? 'checked' : '' }}
                                           class="mr-3 text-primary focus:ring-primary">
                                    <span class="text-gray-700">{{ $category->name }}</span>
                                </label>
                            @endforeach
                        </div>
                    </div>
                    
                    <!-- Brands Filter -->
                    <div class="mb-6">
                        <h3 class="font-semibold mb-3">Brands</h3>
                        <div class="space-y-2">
                            @foreach($brands as $brand)
                                <label class="flex items-center cursor-pointer">
                                    <input type="radio" name="brand" value="{{ $brand->slug }}" 
                                           {{ request('brand') === $brand->slug ? 'checked' : '' }}
                                           class="mr-3 text-primary focus:ring-primary">
                                    <span class="text-gray-700">{{ $brand->name }}</span>
                                </label>
                            @endforeach
                        </div>
                    </div>
                    
                    <!-- Price Range Filter -->
                    <div class="mb-6">
                        <h3 class="font-semibold mb-3">Price Range</h3>
                        <div class="flex gap-2">
                            <input type="number" name="min_price" value="{{ request('min_price', 0) }}" 
                                   placeholder="Min" class="w-full px-3 py-2 border border-gray-300 rounded">
                            <input type="number" name="max_price" value="{{ request('max_price', 100000) }}" 
                                   placeholder="Max" class="w-full px-3 py-2 border border-gray-300 rounded">
                        </div>
                    </div>
                    
                    <input type="hidden" name="search" value="{{ request('search') }}">
                    <input type="hidden" name="sort" value="{{ request('sort') }}">
                    
                    <button type="submit" class="w-full bg-primary text-black py-2 rounded hover:bg-yellow-500 transition-colors">
                        Apply Filters
                    </button>
                </form>
            </div>
        </aside>

        <!-- Products Grid -->
        <div class="lg:w-3/4">
            <!-- Results Info -->
            <div class="flex justify-between items-center mb-6">
                <p class="text-gray-600">Showing {{ $products->count() }} of {{ $products->total() }} products</p>
                <form method="GET" action="{{ route('products.index') }}" class="inline">
                    <select name="sort" onchange="this.form.submit()" class="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Sort by</option>
                        <option value="price_asc" {{ request('sort') === 'price_asc' ? 'selected' : '' }}>Price: Low to High</option>
                        <option value="price_desc" {{ request('sort') === 'price_desc' ? 'selected' : '' }}>Price: High to Low</option>
                        <option value="name_asc" {{ request('sort') === 'name_asc' ? 'selected' : '' }}>Name: A to Z</option>
                        <option value="name_desc" {{ request('sort') === 'name_desc' ? 'selected' : '' }}>Name: Z to A</option>
                    </select>
                    @foreach(request()->except('sort') as $key => $value)
                        <input type="hidden" name="{{ $key }}" value="{{ $value }}">
                    @endforeach
                </form>
            </div>

            <!-- Products Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                @forelse($products as $product)
                    @include('partials.product-card', ['product' => $product])
                @empty
                    <div class="col-span-full text-center py-12">
                        <i data-lucide="search-x" class="w-16 h-16 text-gray-400 mx-auto mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">No products found</h3>
                        <p class="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                        <a href="{{ route('products.index') }}" class="bg-primary text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
                            Clear Filters
                        </a>
                    </div>
                @endforelse
            </div>

            <!-- Pagination -->
            @if($products->hasPages())
                <div class="mt-8">
                    {{ $products->appends(request()->query())->links() }}
                </div>
            @endif
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
$(document).ready(function() {
    // Auto-submit form when filters change
    $('#filter-form input[type="radio"]').change(function() {
        $('#filter-form').submit();
    });
    
    // Re-initialize Lucide icons
    lucide.createIcons();
});
</script>
@endpush