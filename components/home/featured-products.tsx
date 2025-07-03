'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/product-card';
import axios from 'axios';
import { Product } from '@/lib/types'; // Ensure this type matches your product structure

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get('https://admin.kambanmobiles.in/api/featured-products');
        setFeaturedProducts(res.data);
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our most popular smartphones and accessories
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
