import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Kamban Mobiles | Mobile Phones & Accessories Store in Tamil Nadu',
  description: 'Buy the latest smartphones, accessories, and smartwatches at Kamban Mobiles. Located in Thirumangalam, Madurai. EMI options available.',
  keywords: 'mobile phones, smartphones, phone accessories, mobile store Tamil Nadu, Kamban Mobiles, EMI mobile phones',
  robots: 'index, follow',
  openGraph: {
    title: 'Kamban Mobiles | Mobile Phones & Accessories Store',
    description: 'Buy the latest smartphones, accessories, and smartwatches at Kamban Mobiles. EMI options available.',
    url: 'https://kambanmobiles.in',
    siteName: 'Kamban Mobiles',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}