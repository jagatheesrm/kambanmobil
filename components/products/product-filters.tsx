"use client";

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ProductFilter } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  categories: { id: string; name: string }[];
  brands: { id: string; name: string }[];
  filter: ProductFilter;
  onFilterChange: (filter: ProductFilter) => void;
}

const ProductFilters = ({
  categories,
  brands,
  filter,
  onFilterChange,
}: ProductFiltersProps) => {
  const [priceRange, setPriceRange] = useState([
    filter.priceRange?.min || 0,
    filter.priceRange?.max || 100000,
  ]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    price: true,
  });
  
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    onFilterChange({
      ...filter,
      priceRange: { min: values[0], max: values[1] },
    });
  };
  
  const handleCategoryChange = (categoryId: string) => {
    onFilterChange({
      ...filter,
      category: filter.category === categoryId ? undefined : categoryId,
    });
  };
  
  const handleBrandChange = (brandId: string) => {
    onFilterChange({
      ...filter,
      brand: filter.brand === brandId ? undefined : brandId,
    });
  };
  
  const handleReset = () => {
    setPriceRange([0, 100000]);
    onFilterChange({
      category: undefined,
      brand: undefined,
      priceRange: { min: 0, max: 100000 },
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleReset}
          className="text-sm text-gray-500 hover:text-black"
        >
          Reset All
        </Button>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full mb-3 font-semibold"
          onClick={() => toggleSection('categories')}
        >
          Categories
          {expandedSections.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id} // Unique key for each category
                className="flex items-center w-full py-1 text-left"
                onClick={() => handleCategoryChange(category.id)}
              >
                <div className={cn(
                  "w-5 h-5 rounded border border-gray-300 mr-3 flex items-center justify-center",
                  filter.category === category.id && "bg-[#FFD700] border-[#FFD700]"
                )}>
                  {filter.category === category.id && <Check size={14} className="text-black" />}
                </div>
                <span className="text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Brands */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full mb-3 font-semibold"
          onClick={() => toggleSection('brands')}
        >
          Brands
          {expandedSections.brands ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.brands && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <button
                key={brand.id} // Unique key for each brand
                className="flex items-center w-full py-1 text-left"
                onClick={() => handleBrandChange(brand.id)}
              >
                <div className={cn(
                  "w-5 h-5 rounded border border-gray-300 mr-3 flex items-center justify-center",
                  filter.brand === brand.id && "bg-[#FFD700] border-[#FFD700]"
                )}>
                  {filter.brand === brand.id && <Check size={14} className="text-black" />}
                </div>
                <span className="text-gray-700">{brand.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <button
          className="flex justify-between items-center w-full mb-3 font-semibold"
          onClick={() => toggleSection('price')}
        >
          Price Range
          {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {expandedSections.price && (
          <div>
            <div className="flex justify-between mb-4">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
            
            <Slider
              defaultValue={[0, 500000]}
              min={0}
              max={500000}
              step={1000}
              value={priceRange}
              onValueChange={handlePriceChange}
              className="mb-4"
            />
          </div>
        )}
      </div>
      
      <Button 
        onClick={handleReset} 
        variant="outline" 
        className="w-full border-black text-black hover:bg-black hover:text-white"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default ProductFilters;
