"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useSearchParams, useRouter } from "next/navigation";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Initialize category from URL params on component mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filtering

    // Update URL with new category
    if (category === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${category}`);
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            Shop Collection
          </h1>
          <p className="text-xl text-slate-600">
            Discover authentic American fashion imported directly to Singapore
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Filters:</span>
          </div>
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="men">Men's</SelectItem>
              <SelectItem value="women">Women's</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          {selectedCategory !== "all" && (
            <Button
              variant="outline"
              onClick={() => handleCategoryChange("all")}
              className="text-slate-600 hover:text-slate-900"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Active Filters Display */}
        {selectedCategory !== "all" && (
          <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              {/* <span className="font-medium">Active Filter:</span> Showing only{" "} */}
              <span className="font-semibold capitalize">
                {selectedCategory === "men"
                  ? "Men's"
                  : selectedCategory === "women"
                  ? "Women's"
                  : selectedCategory === "accessories"
                  ? "Accessories"
                  : selectedCategory}
              </span>{" "}
              products
            </p>
          </div>
        )}

        {/* Results count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing {startIndex + 1}-
            {Math.min(startIndex + productsPerPage, filteredProducts.length)} of{" "}
            {filteredProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group hover:shadow-lg transition-shadow h-full">
                <div className="aspect-square relative overflow-hidden bg-slate-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-amber-600">
                      New
                    </Badge>
                  )}
                </div>

                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2 line-clamp-2 flex-grow">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    {/* <span className="text-lg font-bold text-slate-900">S${product.price}</span> */}
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-slate-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  {/* <Button className="w-full mt-3 bg-slate-900 hover:bg-slate-800">Contact to Order</Button> */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="cursor-pointer"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={`cursor-pointer ${
                  currentPage === page ? "bg-slate-900" : ""
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="cursor-pointer"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
