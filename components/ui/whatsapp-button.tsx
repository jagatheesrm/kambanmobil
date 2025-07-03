"use client";

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '918610088234';
  const message = 'Hello, I want to know more about your products.';
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-40',
        'transition-all duration-300 transform hover:scale-110',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;