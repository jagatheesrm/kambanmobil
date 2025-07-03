// lib/product-data.ts
import { Product } from './types'; // Ensure Product and Image types are imported from types.ts

export const products: Product[] = [
 
  {
    id: '11',
    slug: 'boult-audio-airbass-y1',
    name: 'Boult Audio AirBass Y1',
    description: 'Wireless earbuds with deep bass and long battery life.',
    price: 1299,
    images: ['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrATNyDmKZy6kIhQqmQpO1XeiZnKuKAZTnSRv900H870rHX-Ni46e1MgqOZeFA26Flmp52a-tHrJA38Je8MaqrLW4x03A8hnCmRQ6bhiQcORKTHwMs71Cv'],
    category: 'accessories',
    brand: 'Boult',
    hasEmi: false,
    emi_option: 'Not applicable',
    has_emi: false,
    specifications: {
      type: 'True Wireless Earbuds',
      features: ['Touch Controls', 'Voice Assistant'],
      batteryLife: 'Up to 24 hours (with case)',
      connectivity: 'Bluetooth 5.0',
      waterResistant: 'IPX5'
    }
  },
  
  
];

export function getProductsByCategory(category?: string) {
  if (!category) return products;
  return products.filter(product => product.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find(product => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getProductsByBrand(brand: string) {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
}

export function getProductCategories() {
  return [
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'smartwatches', name: 'Smart Watches' },
  ];
}

export function getProductBrands() {
  const brands = Array.from(new Set(products.map(product => product.brand)));
  return brands.map(brand => ({ id: brand.toLowerCase(), name: brand }));
}