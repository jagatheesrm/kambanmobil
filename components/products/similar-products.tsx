'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/product-card';
import { Product } from '@/lib/types';
import { AlertCircle } from 'lucide-react';

interface SimilarProductsProps {
  currentProductId: string;
  category: string;
}

const SimilarProducts = ({ currentProductId, category }: SimilarProductsProps) => {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch(
          `https://admin.kambanmobiles.in/api/products?category=${category}&exclude=${currentProductId}`,
          {
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'NextJS-App',
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch similar products: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setSimilarProducts(data);
      } catch (error) {
        console.error('Failed to fetch similar products:', error);
        setError('Unable to load similar products');
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [category, currentProductId]);

  if (loading) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    );
  }

  if (similarProducts.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;