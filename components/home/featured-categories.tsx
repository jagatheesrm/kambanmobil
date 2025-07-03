"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Category {
  id: number;
  name: string;
  description?: string;
  image: string;
}

const FeaturedCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://admin.kambanmobiles.in/api/categories"); // Update API endpoint if needed
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Categories</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our wide range of products across these popular categories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              href={`/products?category=${category.name}`}
              key={category.id}
              className={cn(
                "group relative overflow-hidden rounded-lg shadow-lg h-64 transform transition-transform duration-300 hover:-translate-y-2",
                index === 0 && "md:col-span-1"
              )}
            >
              <Image
                src={
                  category.image.startsWith("http")
                    ? category.image
                    : `https://admin.kambanmobiles.in/storage/${category.image}`
                }
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#FFD700] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-200">{category.description || "Explore products"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
