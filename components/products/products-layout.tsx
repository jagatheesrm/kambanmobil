// "use client";

// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import ProductGrid from '@/components/products/product-grid';
// import ProductFilters from '@/components/products/product-filters';
// import { products, getProductsByCategory, getProductsByBrand } from '@/lib/product-data';
// import { Product, ProductFilter } from '@/lib/types';

// interface ProductsLayoutProps {
//   categories: { id: string; name: string }[];
//   brands: { id: string; name: string }[];
//   selectedCategory?: string;
//   selectedBrand?: string;
// }

// const ProductsLayout = ({
//   categories,
//   brands,
//   selectedCategory,
//   selectedBrand,
// }: ProductsLayoutProps) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [filter, setFilter] = useState<ProductFilter>({
//     category: selectedCategory,
//     brand: selectedBrand,
//     priceRange: { min: 0, max: 100000 },
//   });
  
//   useEffect(() => {
//     let filtered = [...products];
    
//     if (filter.category) {
//       filtered = filtered.filter(p => p.category === filter.category);
//     }
    
//     if (filter.brand) {
//       filtered = filtered.filter(p => p.brand.toLowerCase() === filter.brand?.toLowerCase());
//     }
    
//     if (filter.priceRange) {
//       filtered = filtered.filter(
//         p => p.price >= filter.priceRange!.min && p.price <= filter.priceRange!.max
//       );
//     }
    
//     setFilteredProducts(filtered);
    
//     // Update URL params
//     const params = new URLSearchParams(searchParams.toString());
    
//     if (filter.category) {
//       params.set('category', filter.category);
//     } else {
//       params.delete('category');
//     }
    
//     if (filter.brand) {
//       params.set('brand', filter.brand);
//     } else {
//       params.delete('brand');
//     }
    
//     router.push(`/products?${params.toString()}`);
//   }, [filter, router, searchParams]);
  
//   return (
//     <div className="container mx-auto px-4 py-24">
//       <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
//       <div className="flex flex-col lg:flex-row gap-8">
//         <aside className="lg:w-1/4">
//           <ProductFilters
//             categories={categories}
//             brands={brands}
//             filter={filter}
//             onFilterChange={setFilter}
//           />
//         </aside>
        
//         <div className="lg:w-3/4">
//           <ProductGrid products={filteredProducts} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsLayout;

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/product-grid';
import ProductFilters from '@/components/products/product-filters';
import { Product, ProductFilter } from '@/lib/types';

interface ProductsLayoutProps {
  categories: { id: string; name: string }[];
  brands: { id: string; name: string }[];
  selectedCategory?: string;
  selectedBrand?: string;
}

const ProductsLayout = ({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
}: ProductsLayoutProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<ProductFilter>({
    category: selectedCategory,
    brand: selectedBrand,
    priceRange: { min: 0, max: 100000 },
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const params = new URLSearchParams();

      if (filter.category) params.set('category', filter.category);
      if (filter.brand) params.set('brand', filter.brand);
      if (filter.priceRange) {
        params.set('min_price', filter.priceRange.min.toString());
        params.set('max_price', filter.priceRange.max.toString());
      }

      try {
        const res = await fetch(`https://admin.kambanmobiles.in/api/products?${params.toString()}`);
        const data = await res.json();
        console.log("Fetched products:", data);
        setFilteredProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setFilteredProducts([]);
      }

      // Update URL query string
      const urlParams = new URLSearchParams(searchParams.toString());
      filter.category ? urlParams.set('category', filter.category) : urlParams.delete('category');
      filter.brand ? urlParams.set('brand', filter.brand) : urlParams.delete('brand');
      router.push(`/products?${urlParams.toString()}`);
    };

    fetchProducts();
  }, [filter, router,searchParams]);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <ProductFilters
            categories={categories}
            brands={brands}
            filter={filter}
            onFilterChange={setFilter}
          />
        </aside>
        <div className="lg:w-3/4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
