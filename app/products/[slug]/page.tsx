import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/products/product-detail';
import { products } from '@/lib/product-data';

// Define the type for the parameters expected by dynamic routes
interface ProductParams {
  slug: string;
}

// Define the props structure for the page component,
// explicitly including the `params` property
interface ProductPageProps {
  params: ProductParams;
}

// Helper function to fetch from API with fallback to local data
async function fetchProductsWithFallback() {
  try {
    const res = await fetch('https://admin.kambanmobiles.in/api/products', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'NextJS-App',
      },
    });

    if (!res.ok) {
      console.warn(`API fetch failed: ${res.status} ${res.statusText}, using local data`);
      return products;
    }

    const apiProducts = await res.json();
    console.log('Fetched products from API:', apiProducts);
    return apiProducts;
  } catch (error) {
    console.warn('API fetch error, using local data:', error);
    return products;
  }
}

// Helper function to fetch single product with fallback
async function fetchProductWithFallback(slug: string) {
  try {
    const res = await fetch(`https://admin.kambanmobiles.in/api/products/${slug}`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'NextJS-App',
      },
    });

    if (!res.ok) {
      console.warn(`API fetch failed for slug ${slug}: ${res.status} ${res.statusText}, trying local data`);
      // Try to find in local data
      const localProduct = products.find(p => p.slug === slug);
      return localProduct || null;
    }

    const apiProduct = await res.json();
    return apiProduct;
  } catch (error) {
    console.warn(`API fetch error for slug ${slug}, trying local data:`, error);
    // Try to find in local data
    const localProduct = products.find(p => p.slug === slug);
    return localProduct || null;
  }
}

// This generates static paths for SSG (if using SSG)
export async function generateStaticParams() {
  const allProducts = await fetchProductsWithFallback();
  
  return allProducts.map((product: any) => ({
    slug: product.slug,
  }));
}

// Generate SEO metadata for each product page
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await fetchProductWithFallback(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Kamban Mobiles',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | Kamban Mobiles`,
    description: product.description,
    keywords: `${product.name}, ${product.brand}, mobile phones, smartphones, ${product.category}`,
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'website',
      images: [
        {
          url: Array.isArray(product.images) ? product.images[0] : product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

// Main Product Page Component
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await fetchProductWithFallback(params.slug);

  if (!product) {
    console.error(`Product not found for slug: ${params.slug}`);
    return notFound();
  }

  return <ProductDetail product={product} />;
};

export default ProductPage;