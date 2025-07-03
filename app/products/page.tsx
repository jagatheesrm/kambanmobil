'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react'; // Import Suspense from 'react'
import axios from 'axios';
import ProductsLayout from '@/components/products/products-layout';

// Create a separate component that encapsulates the logic using useSearchParams
// This component will be rendered client-side after initial hydration
function ProductsPageContent() {
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryParam = searchParams.get('category') || undefined;
  const brandParam = searchParams.get('brand') || undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, brandRes] = await Promise.all([
          axios.get('https://admin.kambanmobiles.in/api/categories'),
          axios.get('https://admin.kambanmobiles.in/api/brands'),
        ]);
        setCategories(catRes.data);
        setBrands(brandRes.data);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ProductsLayout
      categories={categories}
      brands={brands}
      selectedCategory={categoryParam}
      selectedBrand={brandParam}
    />
  );
}

// The main page component that wraps the client-side content in Suspense
export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  );
}
