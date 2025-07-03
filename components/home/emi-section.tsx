import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CreditCard, DollarSign, Calendar } from 'lucide-react';

const EmiSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#FFD700]">EMI Options</span> Available
            </h2>
            <p className="text-gray-600 mb-8">
              Make your dream device affordable with our flexible EMI plans. Buy now and pay in easy monthly installments with minimal documentation.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#FFD700] p-3 rounded-lg mr-4">
                  <CreditCard className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Multiple Payment Options</h3>
                  <p className="text-gray-600">Credit cards, debit cards, and no-cost EMI options available</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFD700] p-3 rounded-lg mr-4">
                  <DollarSign className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No Hidden Charges</h3>
                  <p className="text-gray-600">Transparent pricing with no processing fees</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFD700] p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Flexible Tenure</h3>
                  <p className="text-gray-600">Choose from 3, 6, 9, or 12 month payment plans</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="/products">
                Explore EMI-eligible Products
              </Link>
            </Button>
          </div>
          
          <div className="relative h-80 md:h-96 lg:h-full order-1 lg:order-2">
            <Image 
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="EMI Payment Options"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#FFD700] text-black font-bold py-3 px-6 rounded-lg transform rotate-6 shadow-lg">
              No-Cost EMI Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiSection;