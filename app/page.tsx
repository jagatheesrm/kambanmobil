import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/home/hero-section';
import FeaturedCategories from '@/components/home/featured-categories';
import FeaturedProducts from '@/components/home/featured-products';
import EmiSection from '@/components/home/emi-section';
import TestimonialSection from '@/components/home/testimonial-section';

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <EmiSection />
      <TestimonialSection />
      
      {/* Call to Action */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Our Store Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience our wide range of smartphones and accessories in person. Our expert staff is ready to help you find the perfect device.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}