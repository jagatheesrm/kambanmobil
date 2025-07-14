<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create categories
        $categories = [
            [
                'name' => 'Smartphones',
                'slug' => 'smartphones',
                'description' => 'Latest smartphones from top brands',
                'image' => null
            ],
            [
                'name' => 'Accessories',
                'slug' => 'accessories',
                'description' => 'Mobile accessories and gadgets',
                'image' => null
            ],
            [
                'name' => 'Smart Watches',
                'slug' => 'smartwatches',
                'description' => 'Smart watches and fitness trackers',
                'image' => null
            ]
        ];

        foreach ($categories as $categoryData) {
            Category::create($categoryData);
        }

        // Create brands
        $brands = [
            ['name' => 'Samsung', 'slug' => 'samsung'],
            ['name' => 'Apple', 'slug' => 'apple'],
            ['name' => 'OnePlus', 'slug' => 'oneplus'],
            ['name' => 'Xiaomi', 'slug' => 'xiaomi'],
            ['name' => 'Realme', 'slug' => 'realme'],
            ['name' => 'Vivo', 'slug' => 'vivo'],
            ['name' => 'Oppo', 'slug' => 'oppo'],
            ['name' => 'Boult', 'slug' => 'boult']
        ];

        foreach ($brands as $brandData) {
            Brand::create($brandData);
        }

        // Create sample products
        $products = [
            [
                'name' => 'Samsung Galaxy M14',
                'slug' => 'samsung-galaxy-m14',
                'description' => 'Samsung Galaxy M14 with 6GB RAM and 128GB storage',
                'price' => 15999,
                'category_id' => 1, // Smartphones
                'brand_id' => 1, // Samsung
                'has_emi' => true,
                'emi_option' => 'Starting from ₹1,333/month',
                'is_featured' => true,
                'specifications' => [
                    'display' => '6.6" FHD+ Display',
                    'processor' => 'Exynos 1330',
                    'ram' => '6GB',
                    'storage' => '128GB',
                    'camera' => '50MP Triple Camera',
                    'battery' => '6000mAh'
                ]
            ],
            [
                'name' => 'iPhone 13',
                'slug' => 'iphone-13',
                'description' => 'Apple iPhone 13 with A15 Bionic chip',
                'price' => 59999,
                'category_id' => 1, // Smartphones
                'brand_id' => 2, // Apple
                'has_emi' => true,
                'emi_option' => 'Starting from ₹5,000/month',
                'is_featured' => true,
                'specifications' => [
                    'display' => '6.1" Super Retina XDR',
                    'processor' => 'A15 Bionic',
                    'storage' => '128GB',
                    'camera' => '12MP Dual Camera',
                    'battery' => 'All-day battery life'
                ]
            ],
            [
                'name' => 'OnePlus Nord CE 3 Lite',
                'slug' => 'oneplus-nord-ce-3-lite',
                'description' => 'OnePlus Nord CE 3 Lite with 8GB RAM',
                'price' => 19999,
                'category_id' => 1, // Smartphones
                'brand_id' => 3, // OnePlus
                'has_emi' => true,
                'emi_option' => 'Starting from ₹1,667/month',
                'is_featured' => false,
                'specifications' => [
                    'display' => '6.72" FHD+ Display',
                    'processor' => 'Snapdragon 695',
                    'ram' => '8GB',
                    'storage' => '128GB',
                    'camera' => '108MP Triple Camera',
                    'battery' => '5000mAh'
                ]
            ]
        ];

        foreach ($products as $productData) {
            Product::create($productData);
        }

        // Create testimonials
        $testimonials = [
            [
                'name' => 'Rajesh Kumar',
                'location' => 'Thirumangalam',
                'quote' => 'Excellent service and genuine products. Got my Samsung phone with great EMI options.',
                'is_active' => true,
                'sort_order' => 1
            ],
            [
                'name' => 'Priya Sharma',
                'location' => 'Madurai',
                'quote' => 'Very helpful staff and competitive prices. Highly recommend Kamban Mobiles.',
                'is_active' => true,
                'sort_order' => 2
            ],
            [
                'name' => 'Arun Raj',
                'location' => 'Usilampatti',
                'quote' => 'Best mobile store in the area. Great after-sales support and warranty service.',
                'is_active' => true,
                'sort_order' => 3
            ]
        ];

        foreach ($testimonials as $testimonialData) {
            Testimonial::create($testimonialData);
        }
    }
}