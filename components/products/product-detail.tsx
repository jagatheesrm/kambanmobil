'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  CreditCard,
} from 'lucide-react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import SimilarProducts from '@/components/products/similar-products';

interface ProductDetailProps {
  product: Product;
}

// ✅ Image Slider Component
const ProductImagesSlider = ({
  images = [],
  name,
}: {
  images: string[];
  name: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return <div>No images available</div>;

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
      <Image
        src={`https://admin.kambanmobiles.in/storage/${images[currentIndex]}`}

        alt={`${name} - ${currentIndex + 1}`}
        width={800}
        height={600}
        className="object-cover w-full h-auto"
      />

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>
    </div>
  );
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const whatsappMessage = `Hello, I'm interested in the ${product.name}. Can you provide more details?`;
  const whatsappUrl = `https://wa.me/918610088234?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center text-sm text-gray-600 mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#FFD700]">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/products" className="hover:text-[#FFD700]">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-black">{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* 🖼️ Product Image Slider */}
        <ProductImagesSlider images={product.images} name={product.name} />

        {/* 📦 Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {product.has_emi && product.emi_option && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-[#FFD700]">
              <div className="flex items-start">
                <CreditCard className="h-5 w-5 mr-3 text-[#FFD700] mt-0.5" />
                <div>
                  <h3 className="font-semibold">EMI Available</h3>
                  <p className="text-sm text-gray-600">{product.emi_option}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#FFD700] text-black hover:bg-[#E6C200]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enquire on WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Link href="/contact">Contact Store</Link>
            </Button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Brand:</span>
                <span className="ml-2 font-medium">{product.brand}</span>
              </div>
              <div>
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 font-medium">
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📄 Product Details Tabs */}
      <Tabs defaultValue="specifications" className="mb-16">
        <TabsList className="grid w-full md:w-1/2 grid-cols-2">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="delivery">Delivery & Returns</TabsTrigger>
        </TabsList>

        <TabsContent
          value="specifications"
          className="p-6 border rounded-lg mt-2"
        >
          {product.specifications ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b pb-3">
                  <h3 className="font-medium text-gray-500 mb-1 capitalize">
                    {key}
                  </h3>
                  <p className="font-medium">
                    {Array.isArray(value) ? value.join(', ') : value}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>Specifications not available</p>
          )}
        </TabsContent>

        <TabsContent
          value="delivery"
          className="p-6 border rounded-lg mt-2"
        >
          <h3 className="font-bold text-lg mb-3">Delivery</h3>
          <p className="mb-4">
            Free delivery within Thirumangalam. Nominal charges apply for
            other locations.
          </p>

          <h3 className="font-bold text-lg mb-3">Returns</h3>
          <p className="mb-2">
            All products come with manufacturer warranty. Visit our store for
            any issues.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li className="mb-1">
              Bring your invoice and the product in original packaging
            </li>
            <li className="mb-1">
              Warranty claims processed as per manufacturer policy
            </li>
            <li>Our team will assist you with the return process</li>
          </ul>
        </TabsContent>
      </Tabs>

      <SimilarProducts
        currentProductId={product.id}
        category={product.category}
      />
    </div>
  );
};

export default ProductDetail;
