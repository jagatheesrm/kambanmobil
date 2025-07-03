"use client";

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-black bg-opacity-95 z-50 transition-transform duration-300 flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="container mx-auto px-4 py-6 flex justify-end">
        <button onClick={onClose} className="text-white text-3xl">
          <X />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 flex-grow">
        <NavItem href="/" onClick={onClose}>Home</NavItem>
        <NavItem href="/about" onClick={onClose}>About Us</NavItem>
        <NavItem href="/products" onClick={onClose}>Products</NavItem>
        <NavItem href="/contact" onClick={onClose}>Contact</NavItem>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <p className="text-white mb-2">Contact Us</p>
        <Link 
          href="tel:+918610088234" 
          className="text-[#FFD700] text-xl font-bold mb-6"
        >
          +91 86100 88234
        </Link>
        <div className="flex space-x-4">
          <SocialLink href="https://www.instagram.com/x_kamban_mobiles_x?igsh=NXAyb2U0cnY3eWgz">
            Instagram
          </SocialLink>
          <SocialLink href="https://www.facebook.com/profile.php?id=61575250442707">
            Facebook
          </SocialLink>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string, 
  children: React.ReactNode,
  onClick: () => void
}) => {
  return (
    <Link
      href={href}
      className="text-white text-2xl font-medium hover:text-[#FFD700] transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const SocialLink = ({ 
  href, 
  children 
}: { 
  href: string, 
  children: React.ReactNode 
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#FFD700] transition-colors"
    >
      {children}
    </Link>
  );
};

export default MobileNav;