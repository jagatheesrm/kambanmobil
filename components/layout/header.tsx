"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone, ShoppingBag, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNav from './mobile-nav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata = {
  title: "Your Website Title",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black text-white shadow-md py-2'
          : 'bg-transparent text-black py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={isScrolled ? '/kamban_white.png' : '/kamban_black.png'}
            alt="Kamban Mobiles Logo"
            width={160} // adjust width/height as needed
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="/about" isScrolled={isScrolled}>About Us</NavLink>
          <NavLink href="/products" isScrolled={isScrolled}>Products</NavLink>
          <NavLink href="/contact" isScrolled={isScrolled}>Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* <Button variant="ghost" size="icon" asChild>
            <Link href="/contact" className={isScrolled ? 'text-white' : 'text-black'}>
              <Phone className="h-5 w-5" />
            </Link>
          </Button> */}
          <Button
            variant="outline"
            className={cn(
              "border-2 hover:bg-[#FFD700] hover:text-black",
              isScrolled ? "border-[#FFD700] text-black" : "border-black text-black"
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span >+91 86100 88234</span>
          </Button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className={isScrolled ? 'text-white' : 'text-black'} />
        </button>
      </div>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

const NavLink = ({
  href,
  children,
  isScrolled
}: {
  href: string,
  children: React.ReactNode,
  isScrolled: boolean
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'font-medium hover:text-[#FFD700] transition-colors',
        isScrolled ? 'text-white' : 'text-black'
      )}
    >
      {children}
    </Link>
  );
};

export default Header;