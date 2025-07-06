"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
}

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("https://admin.kambanmobiles.in/api/testimonials", {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'NextJS-App',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch testimonials: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Failed to load testimonials", err);
        setError("Unable to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || testimonials.length === 0) {
    return (
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our <span className="text-[#FFD700]">Customers</span> Say
          </h2>
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-gray-400">{error || "No testimonials available at the moment."}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our <span className="text-[#FFD700]">Customers</span> Say
        </h2>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute -top-10 left-0 text-[#FFD700] opacity-20">
            <Quote size={80} />
          </div>

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
                )}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-[#FFD700] shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-6 italic">&apos;{testimonial.quote}&apos;</p>
                    <p className="font-bold text-xl">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="opacity-0 pointer-events-none">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 shrink-0"></div>
                <div>
                  <p className="text-lg mb-6 italic">{testimonials[0]?.quote}</p>
                  <p className="font-bold text-xl">{testimonials[0]?.name}</p>
                  <p className="text-gray-400">{testimonials[0]?.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] hover:text-black transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex ? "bg-[#FFD700] w-4" : "bg-gray-600"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] hover:text-black transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;