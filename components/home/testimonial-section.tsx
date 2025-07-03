// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Rahul Sharma',
//     location: 'Madurai',
//     quote: 'Great selection of phones and very helpful staff. They helped me find the perfect phone within my budget and explained all the EMI options clearly.',
//     image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: 2,
//     name: 'Priya Venkatesh',
//     location: 'Thirumangalam',
//     quote: 'I bought my new smartphone from Kamban Mobiles and am very satisfied with their service. The EMI process was smooth, and they even helped me set up my new device.',
//     image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: 3,
//     name: 'Karthik Rajan',
//     location: 'Madurai',
//     quote: 'Best mobile shop in the area with genuine products and excellent after-sales support. I\'ve been a customer for years and always recommend them to friends and family.',
//     image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
// ];

// const TestimonialSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };
  
//   const prevTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };
  
//   return (
//     <section className="py-16 bg-black text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           What Our <span className="text-[#FFD700]">Customers</span> Say
//         </h2>
        
//         <div className="relative max-w-4xl mx-auto px-4">
//           <div className="absolute -top-10 left-0 text-[#FFD700] opacity-20">
//             <Quote size={80} />
//           </div>
          
//           <div className="relative z-10">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className={cn(
//                   "transition-opacity duration-500 absolute inset-0",
//                   index === activeIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
//                 )}
//               >
//                 <div className="flex flex-col md:flex-row items-center gap-8">
//                   <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-[#FFD700] shrink-0">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
//                     <p className="font-bold text-xl">{testimonial.name}</p>
//                     <p className="text-gray-400">{testimonial.location}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Placeholder to maintain height */}
//             <div className="opacity-0 pointer-events-none">
//               <div className="flex flex-col md:flex-row items-center gap-8">
//                 <div className="w-32 h-32 shrink-0"></div>
//                 <div>
//                   <p className="text-lg mb-6 italic">{testimonials[0].quote}</p>
//                   <p className="font-bold text-xl">{testimonials[0].name}</p>
//                   <p className="text-gray-400">{testimonials[0].location}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center mt-8 gap-4">
//             <button
//               onClick={prevTestimonial}
//               className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] hover:text-black transition-colors flex items-center justify-center"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
            
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={cn(
//                   "w-2 h-2 rounded-full transition-all",
//                   index === activeIndex ? "bg-[#FFD700] w-4" : "bg-gray-600"
//                 )}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
            
//             <button
//               onClick={nextTestimonial}
//               className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FFD700] hover:text-black transition-colors flex items-center justify-center"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

  useEffect(() => {
    fetch("https://admin.kambanmobiles.in/api/testimonials") // change to your Laravel API URL
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Failed to load testimonials", err));
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

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
