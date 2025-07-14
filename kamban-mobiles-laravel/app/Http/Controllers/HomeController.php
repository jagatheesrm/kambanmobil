<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::active()->take(6)->get();
        $featuredProducts = Product::with(['category', 'brand'])
            ->featured()
            ->active()
            ->take(6)
            ->get();
        $testimonials = Testimonial::active()->ordered()->get();

        return view('home', compact('categories', 'featuredProducts', 'testimonials'));
    }

    public function about()
    {
        return view('about');
    }
}