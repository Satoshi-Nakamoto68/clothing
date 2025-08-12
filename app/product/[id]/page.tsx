"use client";

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
import { Star, Shield, Truck, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import React, { useState } from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// export default function ProductPage({ params }: ProductPageProps) {
export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params); // unwrap Promise
  // const { id } = params
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(
    product?.image || "/placeholder.svg"
  );
  const [mainImage, setMainImage] = useState(selectedImage);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-slate-900">
              Shop
            </Link>
            <span>/</span>
            <span className="text-slate-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="flex gap-4">
            {/* Gallery Images - Left Side */}
            <div className="flex flex-col gap-2 w-20">
              {product.image_gallery?.map((image, index) => {
                const src = image || "/placeholder.svg";
                const isSelected = src === selectedImage;
                return (
                  <div
                    key={index}
                    className={`aspect-square relative overflow-hidden rounded border cursor-pointer transition-colors ${
                      isSelected
                        ? "border-amber-600 ring-2 ring-amber-200"
                        : "border-slate-200 hover:border-amber-500"
                    }`}
                    onMouseEnter={() => setMainImage(src)}
                    onMouseLeave={() => setMainImage(selectedImage)}
                    onClick={() => {
                      setSelectedImage(src);
                      setMainImage(src);
                    }}
                    role="button"
                    aria-label={`Select image ${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover object-center !w-auto !h-auto"
                    />
                  </div>
                );
              })}
            </div>

            {/* Main Product Image - Right Side */}
            <div className="flex-1">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-all duration-300 !w-auto !h-auto"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-amber-600">
                    New
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-slate-900">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                {
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                    {/* <span className="ml-1 text-slate-600">(127 reviews)</span> */}
                  </div>
                }
                <Badge variant="outline" className="text-slate-600">
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </Badge>
              </div>
              {/* <p className="text-3xl font-bold text-slate-900 mb-4">S${product.price}</p> */}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-slate-600 mb-4">{product.shortDescription}</p>
              <p className="text-slate-600">{product.fullDescription}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800">
                Contact to Order
              </Button> */}
              {/* <Button
                variant="outline"
                size="lg"
                className="w-full bg-transparent"
              >
                Add to Wishlist
              </Button> */}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Imported from USA</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Fast Shipping</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Authentic Quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                >
                  <Card className="group hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 !w-auto !h-auto"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        {/* <span className="text-lg font-bold text-slate-900">S${relatedProduct.price}</span> */}
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm text-slate-600 ml-1">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
