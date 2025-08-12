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
import { Suspense } from "react";
import ProductClient from "./product-client";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

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

        <Suspense fallback={<ProductLoading />}>
          <ProductClient 
            product={product} 
            relatedProducts={relatedProducts} 
          />
        </Suspense>
      </div>
    </div>
  );
}

function ProductLoading() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-20">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="aspect-square bg-slate-200 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="flex-1">
          <div className="aspect-square bg-slate-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="h-8 bg-slate-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded w-1/3 animate-pulse"></div>
        </div>
        <div>
          <div className="h-6 bg-slate-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
