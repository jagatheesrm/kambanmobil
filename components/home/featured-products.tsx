'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/product-card';
import { AlertCircle } from 'lucide-react';
import { Product } from '@/lib/types';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch('https://admin.kambanmobiles.in/api/featured-products', {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'NextJS-App',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch featured products: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error loading featured products:', error);
        setError('Unable to load featured products');
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
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-gray-600">{error}</p>
          </div>
        ) : featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">No featured products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;