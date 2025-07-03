export interface Image {
  id: number; // Assuming image IDs are numbers
  path: string;
  // Add any other properties your image objects might have, e.g., 'alt_text'
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    brand: string;
    has_emi: boolean;
    hasEmi: boolean;
    emi_option: string;
    featured?: boolean;
    specifications?: Record<string, string | string[]>;
  }

  export interface ProductFilter {
    category?: string;
    brand?: string;
    priceRange?: {
      min: number;
      max: number;
    };
  }