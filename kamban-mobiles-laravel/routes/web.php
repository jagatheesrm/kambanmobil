<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

// Home routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');

// Product routes
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');

// Contact routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// API routes for AJAX requests
Route::prefix('api')->group(function () {
    Route::get('/categories', function () {
        return response()->json(\App\Models\Category::active()->get());
    });
    
    Route::get('/brands', function () {
        return response()->json(\App\Models\Brand::active()->get());
    });
    
    Route::get('/featured-products', function () {
        return response()->json(\App\Models\Product::with(['category', 'brand'])->featured()->active()->get());
    });
    
    Route::get('/testimonials', function () {
        return response()->json(\App\Models\Testimonial::active()->ordered()->get());
    });
    
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{product}', [ProductController::class, 'show']);
});