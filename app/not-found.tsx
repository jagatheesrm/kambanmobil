import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/products">
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}