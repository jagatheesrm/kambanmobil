import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <MapPin className="h-6 w-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Address</h3>
              <p className="text-gray-600">
                251, Usilai Road, Thirumangalam, Madurai – 625 706
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Phone className="h-6 w-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">
                <Link 
                  href="tel:+918610088234" 
                  className="hover:text-[#FFD700] transition-colors"
                >
                  +91 86100 88234
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Mail className="h-6 w-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-gray-600">
                <Link 
                  href="mailto:contact@kambnmobiles.in"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  contact@kambnmobiles.in
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 9:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Instagram className="h-6 w-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Instagram</h3>
              <p className="text-gray-600">
                <Link 
                  href="https://www.instagram.com/x_kamban_mobiles_x?igsh=NXAyb2U0cnY3eWgz" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  @x_kamban_mobiles_x
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Facebook className="h-6 w-6 text-[#FFD700]" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Facebook</h3>
              <p className="text-gray-600">
                <Link 
                  href="https://www.facebook.com/profile.php?id=61575250442707" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  Kamban Mobiles
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;