import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <Image
                src={'/logowhite.svg' }
                alt="Kamban Mobiles Logo"
                width={160} // adjust width/height as needed
                height={40}
                priority
              />
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted store for the latest smartphones and accessories in Tamil Nadu.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/x_kamban_mobiles_x?igsh=NXAyb2U0cnY3eWgz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61575250442707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@kambnmobiles.in"
                className="text-white hover:text-[#FFD700] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=smartphones" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=smartwatches" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Smart Watches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#FFD700] shrink-0 mt-0.5" />
                <span>251, Usilai Road, Thirumangalam, Madurai – 625 706</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#FFD700] shrink-0" />
                <Link href="tel:+918610088234" className="hover:text-[#FFD700] transition-colors">
                  +91 86100 88234
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#FFD700] shrink-0" />
                <Link href="mailto:contact@kambnmobiles.in" className="hover:text-[#FFD700] transition-colors">
                  contact@kambnmobiles.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Kamban Mobiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;