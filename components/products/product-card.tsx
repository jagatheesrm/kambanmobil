"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappMessage = `Hello, I'm interested in the ${product.name}. Can you provide more details?`;
  const whatsappUrl = `https://wa.me/918610088234?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-60 overflow-hidden">
          <Image
            // src={`http://127.0.0.1:8000/storage/${product.images?.[0]}`}
            src={product.images?.[0]}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered && "scale-110"
            )}
          />
          
          {product.has_emi && (
            <Badge className="absolute top-4 right-4 bg-[#FFD700] text-black hover:bg-[#E6C200]">
              EMI Available
            </Badge>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1">
            <Link href={`/products/${product.slug}`}>
              View Details
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="flex-1 border-black hover:bg-black hover:text-white"
          >
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Enquire
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;