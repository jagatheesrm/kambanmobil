import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, ShieldCheck, Clock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Kamban Mobiles',
  description: 'Learn about Kamban Mobiles, your trusted mobile and accessories store in Thirumangalam, Madurai.',
  keywords: 'mobile store Madurai, Kamban Mobiles about, mobile shop Thirumangalam',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-black">
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <Image
            src={'/ourshop.webp' }
            alt="Kamban Mobiles Store"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-[#FFD700]">Kamban Mobiles</span>
            </h1>
            <p className="text-xl text-white">
              Your trusted destination for mobile phones and accessories in Tamil Nadu
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for technology and customer service, Kamban Mobiles has been serving the people of Thirumangalam and surrounding areas with quality mobile products and exceptional service.
              </p>
              <p className="text-gray-600 mb-4">
                We started as a small shop with a simple goal: to provide genuine products at fair prices while building lasting relationships with our customers. Today, we&apos;ve grown to become one of the most trusted mobile retailers in the region.
              </p>
              <p className="text-gray-600 mb-6">
                At Kamban Mobiles, we understand that a mobile phone is more than just a device—it&apos;s an essential part of your daily life. That&apos;s why we strive to offer only the best products and provide honest advice to help you make the right choice.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <ShieldCheck className="h-10 w-10 text-[#FFD700] mb-2" />
                  <h3 className="font-bold text-lg">Genuine Products</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-10 w-10 text-[#FFD700] mb-2" />
                  <h3 className="font-bold text-lg">Expert Advice</h3>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-10 w-10 text-[#FFD700] mb-2" />
                  <h3 className="font-bold text-lg">After Sales Support</h3>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/p/AF1QipNPNtu_DjehPWp4UhzsGG7FIVfdht7YiEq940Zt=s680-w680-h510-rw"
                alt="Our shop interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kamban Mobiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Products</h3>
              <p className="text-gray-600">
                We guarantee that all our products are 100% genuine with manufacturer warranty.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our knowledgeable staff provides honest advice to help you find the perfect device.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">EMI Options</h3>
              <p className="text-gray-600">
                Make your purchase affordable with our flexible EMI plans with minimal documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
              <p className="text-gray-600 mb-8">
                We&apos;d love to welcome you to our store. Visit us to explore our products in person and get expert advice from our team.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#FFD700] mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      251, Usilai Road, Thirumangalam, Madurai – 625 706
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#FFD700] mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+918610088234" className="hover:text-[#FFD700]">
                        +91 86100 88234
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#FFD700] mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:contact@kambnmobiles.in" className="hover:text-[#FFD700]">
                        contact@kambnmobiles.in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="bg-black text-white hover:bg-gray-800">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62970.61556624028!2d77.84845881861979!3d9.831242448987894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0375dfd3063bbb%3A0x84bf2d050e8e5be4!2sThirumangalam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718352444022!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamban Mobiles Store Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Explore Our Products?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Browse our wide range of smartphones, accessories, and smart watches. EMI options available.
          </p>
          <Button asChild size="lg" className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
            <Link href="/products">
              View Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}