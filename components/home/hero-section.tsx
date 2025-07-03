"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const heroImages = [
  {
    url: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Latest smartphone display"
  },
  {
    url: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Premium mobile phones collection"
  },
  {
    url: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Smart devices showcase"
  }
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
              Discover the Latest in
              <span className="text-[#FFD700]"> Mobile Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 animate-fadeIn animation-delay-300">
              Premium smartphones, accessories, and smart watches. Now with EMI options available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-600">
              <Button asChild size="lg" className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentImageIndex === index 
                ? "bg-[#FFD700] w-6" 
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            )}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;