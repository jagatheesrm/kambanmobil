"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/products/product-grid';
import ProductFilters from '@/components/products/product-filters';
import { Product, ProductFilter } from '@/lib/types';

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

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
        setFilteredProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setFilteredProducts([]);
      }

      // Update URL
      const urlParams = new URLSearchParams(searchParams.toString());
      filter.category ? urlParams.set('category', filter.category) : urlParams.delete('category');
      filter.brand ? urlParams.set('brand', filter.brand) : urlParams.delete('brand');
      router.push(`/products?${urlParams.toString()}`);
    };

    fetchProducts();
  }, [filter, router, searchParams]);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>

        {/* Filter Icon Button & Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Filter className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md w-full overflow-y-auto max-h-screen">
            <ProductFilters
              categories={categories}
              brands={brands}
              filter={filter}
              onFilterChange={setFilter}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Permanent Filters on Desktop */}
        <aside className="hidden lg:block lg:w-1/4">
          <ProductFilters
            categories={categories}
            brands={brands}
            filter={filter}
            onFilterChange={setFilter}
          />
        </aside>

        {/* Product List */}
        <div className="lg:w-3/4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
