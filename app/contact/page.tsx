import { Metadata } from 'next';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us | Kamban Mobiles',
  description: 'Get in touch with Kamban Mobiles for any enquiries about mobile phones, accessories, or EMI options.',
  keywords: 'contact Kamban Mobiles, mobile store contact, Thirumangalam mobile shop',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600">
              We&apos;d love to hear from you! Get in touch with us for any enquiries about our products or services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62970.61556624028!2d77.84845881861979!3d9.831242448987894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0375dfd3063bbb%3A0x84bf2d050e8e5be4!2sThirumangalam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718352444022!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kamban Mobiles Store Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}