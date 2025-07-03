import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/products/product-detail';

// Define the type for the parameters expected by dynamic routes
interface ProductParams {
  slug: string;
}

// Define the props structure for the page component,
// explicitly including the `params` property
interface ProductPageProps {
  params: ProductParams;
}

// This generates static paths for SSG (if using SSG)
export async function generateStaticParams() {
  try {
    const res = await fetch('https://admin.kambanmobiles.in/api/products', {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }

    const products = await res.json();
    console.log('Fetched products:', products); // Log the fetched products

    return products.map((product: any) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

// Generate SEO metadata for each product page
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const res = await fetch(`https://admin.kambanmobiles.in/api/products/${params.slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return {
      title: 'Product Not Found | Kamban Mobiles',
      description: 'The requested product could not be found.',
    };
  }

  const product = await res.json();

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
          url: product.image,
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
  const res = await fetch(`https://admin.kambanmobiles.in/api/products/${params.slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const product = await res.json();

  return <ProductDetail product={product} />;
};

export default ProductPage;
