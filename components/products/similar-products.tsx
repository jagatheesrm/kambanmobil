// import { products } from '@/lib/product-data';
// import { Product } from '@/lib/types';
// import ProductCard from '@/components/products/product-card';

// interface SimilarProductsProps {
//   currentProductId: string;
//   category: string;
// }

// const SimilarProducts = ({ currentProductId, category }: SimilarProductsProps) => {
//   const similarProducts = products
//     .filter((product) => product.category === category && product.id !== currentProductId)
//     .slice(0, 3);
  
//   if (similarProducts.length === 0) {
//     return null;
//   }
  
//   return (
//     <section>
//       <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {similarProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SimilarProducts;

'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/product-card';
import { Product } from '@/lib/types';

interface SimilarProductsProps {
  currentProductId: string;
  category: string;
}

const SimilarProducts = ({ currentProductId, category }: SimilarProductsProps) => {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch(
          `https://admin.kambanmobiles.in/api/products?category=${category}&exclude=${currentProductId}`
        );
        const data = await res.json();
        setSimilarProducts(data);
      } catch (error) {
        console.error('Failed to fetch similar products:', error);
      }
    };

    fetchSimilarProducts();
  }, [category, currentProductId]);

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
