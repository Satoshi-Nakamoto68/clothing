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
import { Star, Shield, Truck, CheckCircle, X, ChevronLeft, ChevronRight, ZoomIn, Maximize2, RotateCcw, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  const [isMainLoaded, setIsMainLoaded] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  // Enhanced lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxImgLoaded, setIsLightboxImgLoaded] = useState(false);
  const [lightboxScale, setLightboxScale] = useState(1);
  const [lightboxRotation, setLightboxRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Size Guide modal state
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Build full gallery: main image first, then gallery images
  const gallery = useMemo(() => {
    const main = product?.image || "/placeholder.svg";
    const rest = (product?.image_gallery ?? []).filter(Boolean);
    return [main, ...rest];
  }, [product]);

  // Find the current index of the main image in gallery
  const currentIndex = useMemo(() => {
    const idx = gallery.findIndex((src) => src === mainImage);
    return idx >= 0 ? idx : 0;
  }, [gallery, mainImage]);

  // Enhanced lightbox functions
  const openLightbox = () => {
    setLightboxIndex(currentIndex);
    setIsLightboxOpen(true);
    // Reset transformations
    setLightboxScale(1);
    setLightboxRotation(0);
    setDragOffset({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // Animate out
    setTimeout(() => {
      setLightboxScale(1);
      setLightboxRotation(0);
      setDragOffset({ x: 0, y: 0 });
    }, 300);
  };

  const showPrev = () => {
    setLightboxIndex((prev) => {
      const next = (prev - 1 + gallery.length) % gallery.length;
      const src = gallery[next];
      setMainImage(src);
      setSelectedImage(src);
      // Reset transformations for new image
      setLightboxScale(1);
      setLightboxRotation(0);
      setDragOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const showNext = () => {
    setLightboxIndex((prev) => {
      const next = (prev + 1) % gallery.length;
      const src = gallery[next];
      setMainImage(src);
      setSelectedImage(src);
      // Reset transformations for new image
      setLightboxScale(1);
      setLightboxRotation(0);
      setDragOffset({ x: 0, y: 0 });
      return next;
    });
  };

  // Zoom functions
  const zoomIn = () => setLightboxScale(prev => Math.min(prev * 1.5, 5));
  const zoomOut = () => setLightboxScale(prev => Math.max(prev / 1.5, 0.5));
  const resetZoom = () => {
    setLightboxScale(1);
    setLightboxRotation(0);
    setDragOffset({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Touch and mouse drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (lightboxScale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && lightboxScale > 1) {
      setDragOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    if (lightboxScale > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - dragOffset.x,
        y: e.touches[0].clientY - dragOffset.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && lightboxScale > 1 && e.touches.length === 1) {
      e.preventDefault();
      setDragOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard controls and scroll lock for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetZoom();
      if (e.key === "r") setLightboxRotation(prev => prev + 90);
    };

    document.addEventListener("keydown", onKeyDown);

    // lock scroll
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [isLightboxOpen, lightboxScale]);

  // Reset main image fade on change
  useEffect(() => {
    setIsMainLoaded(false);
  }, [mainImage]);

  // Reset lightbox image fade on change
  useEffect(() => {
    setIsLightboxImgLoaded(false);
  }, [lightboxIndex]);

  // Scroll thumbnail list to active selected image
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const nodes = Array.from(container.querySelectorAll('[data-src]')) as HTMLElement[];
    const active = nodes.find((el) => el.dataset.src === selectedImage);
    if (active) {
      active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedImage]);

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
              <div ref={thumbsRef} className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                {product.image_gallery?.map((image, index) => {
                  const src = image || "/placeholder.svg";
                  const isSelected = src === selectedImage;
                  return (
                    <div
                      key={index}
                      data-src={src}
                      className={`aspect-square relative overflow-hidden rounded border cursor-pointer transition-all duration-200 flex-shrink-0 mb-2 ${
                        isSelected
                          ? "border-amber-600 ring-2 ring-amber-200 scale-105 shadow-lg"
                          : "border-slate-200 hover:border-amber-500 hover:scale-102"
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
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  );
                })}
              </div>
              {product.image_gallery && product.image_gallery.length > 5 && (
                <div className="text-center text-xs text-slate-500 mt-2">
                  Scroll to see more
                </div>
              )}
            </div>

            {/* Main Product Image - Right Side */}
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 shadow-sm">
                <button
                  type="button"
                  onClick={openLightbox}
                  aria-label="Open image in fullscreen"
                  className="group block w-full cursor-zoom-in relative"
                  title="Click to zoom"
                >
                  <Image
                    src={mainImage}
                    alt={product.name}
                    width={600}
                    height={600}
                    className={`w-full h-auto max-h-[600px] object-contain transition-all duration-500 ${
                      isMainLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } group-hover:scale-105`}
                    onLoad={() => setIsMainLoaded(true)}
                    priority
                  />
                  
                  {/* Enhanced zoom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Zoom hint with animation */}
                  <div className="pointer-events-none absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-2 rounded-full text-sm font-medium shadow-lg border border-slate-200">
                      <Maximize2 className="w-4 h-4 text-amber-600" />
                      <span>Click to explore</span>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-300/50 transition-all duration-300" />
                </button>
                
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg animate-pulse">
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

            {/* Size Guide trigger */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="mt-2 inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 underline underline-offset-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded"
                aria-label="Open size guide"
              >
                <Ruler className="w-4 h-4" />
                <span>Size Guide</span>
              </button>
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
          <div className="relative">
            {/* Enhanced section header with decorative elements */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-3">
                You Might Also Like
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover more amazing pieces from our collection that complement your style
              </p>
            </div>

            {/* Enhanced grid layout with better spacing and animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group block h-full"
                >
                  <Card className="group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-slate-50/50 overflow-hidden relative h-full flex flex-col">
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image container with enhanced hover effects */}
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Hover overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Quick view button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-slate-200 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Details
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-amber-500/90 backdrop-blur-sm text-white border-0 shadow-lg text-xs font-medium">
                          {relatedProduct.category.charAt(0).toUpperCase() + relatedProduct.category.slice(1)}
                        </Badge>
                      </div>

                      {/* Rating display */}
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-medium text-slate-800">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced content with better typography and spacing */}
                    <CardContent className="p-5 relative flex flex-col flex-1">
                      {/* Product name with enhanced styling */}
                      <h3 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-amber-700 transition-colors duration-300 line-clamp-2 leading-tight">
                        {relatedProduct.name}
                      </h3>
                      
                      {/* Description preview */}
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {relatedProduct.shortDescription}
                      </p>

                      {/* Bottom section with price and action */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-slate-500 font-medium">Available</span>
                        </div>
                        
                        {/* Arrow indicator */}
                        <div className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>

                    {/* Hover border effect */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-300/50 transition-all duration-500 pointer-events-none" />
                  </Card>
                </Link>
              ))}
            </div>

            {/* Call-to-action section below related products */}
            <div className="text-center mt-12 pt-8 border-t border-slate-200">
              <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors duration-300 group">
                <span className="font-medium">View All {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Product image viewer"
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Image container with transformations */}
            <div
              className="relative w-[95vw] max-w-7xl h-[85vh] flex items-center justify-center"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={gallery[lightboxIndex]}
                alt={`${product.name} large view ${lightboxIndex + 1}`}
                fill
                className={`object-contain select-none transition-all duration-300 ${
                  isLightboxImgLoaded ? 'opacity-100' : 'opacity-0'
                } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                  transform: `scale(${lightboxScale}) rotate(${lightboxRotation}deg) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
                }}
                onLoad={() => setIsLightboxImgLoaded(true)}
                priority
              />
            </div>

            {/* Enhanced control panel - top center */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <button
                onClick={zoomOut}
                disabled={lightboxScale <= 0.5}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                title="Zoom out (or scroll down)"
              >
                <ZoomIn className="w-4 h-4 rotate-45" />
              </button>
              
              <span className="text-white/80 text-sm font-medium min-w-[60px] text-center">
                {Math.round(lightboxScale * 100)}%
              </span>
              
              <button
                onClick={zoomIn}
                disabled={lightboxScale >= 5}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                title="Zoom in (or scroll up)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              
              <div className="w-px h-6 bg-white/20" />
              
              <button
                onClick={() => setLightboxRotation(prev => prev + 90)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                title="Rotate 90° (R)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              
              <button
                onClick={resetZoom}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                title="Reset view (0)"
              >
                <RotateCcw className="w-4 h-4 rotate-180" />
              </button>
            </div>

            {/* Close button - top-right */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close viewer"
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-md border border-white/20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows - outside image */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous image"
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-md border border-white/20 group cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-md border border-white/20 group cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </>
            )}

            {/* Enhanced counter and info - bottom center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              {gallery.length > 1 && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white/80 text-sm font-medium">
                    {lightboxIndex + 1} of {gallery.length}
                  </span>
                </div>
              )}
              
              <div className="text-white/60 text-xs text-center max-w-md">
                <p>Use mouse wheel to zoom • Drag to pan when zoomed • R to rotate • 0 to reset</p>
              </div>
            </div>

            {/* Keyboard shortcuts hint - bottom right */}
            <div className="absolute bottom-6 right-6 text-white/40 text-xs">
              <p>ESC to close • ← → to navigate</p>
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      <Dialog open={isSizeGuideOpen} onOpenChange={setIsSizeGuideOpen}>
        <DialogContent className="max-w-2xl" showCloseButton={false}>
          {/* Visible Close Button */}
          <DialogClose
            aria-label="Close size guide"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </DialogClose>
          <DialogHeader>
            <DialogTitle>Size Guide</DialogTitle>
            <DialogDescription>
              Find your perfect fit. All measurements are in Inches and Centimeters.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="tops" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="tops" className="cursor-pointer">Tops</TabsTrigger>
              <TabsTrigger value="bottoms" className="cursor-pointer">Bottoms</TabsTrigger>
            </TabsList>

            {/* Tops Tab */}
            <TabsContent value="tops" className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How to Measure</h4>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li><span className="font-medium">Chest:</span> Measure around the fullest part of your chest.</li>
                  <li><span className="font-medium">Length:</span> Measure from the highest point of the shoulder to the bottom hem.</li>
                </ul>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">Size</TableHead>
                      <TableHead className="whitespace-nowrap">Chest (in/cm)</TableHead>
                      <TableHead className="whitespace-nowrap">Length (in/cm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>S</TableCell>
                      <TableCell>36-38 in / 91-96 cm</TableCell>
                      <TableCell>28 in / 71 cm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>M</TableCell>
                      <TableCell>39-41 in / 99-104 cm</TableCell>
                      <TableCell>29 in / 74 cm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>L</TableCell>
                      <TableCell>42-44 in / 107-112 cm</TableCell>
                      <TableCell>30 in / 76 cm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>XL</TableCell>
                      <TableCell>45-47 in / 114-119 cm</TableCell>
                      <TableCell>31 in / 79 cm</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Bottoms Tab */}
            <TabsContent value="bottoms" className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How to Measure</h4>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                  <li><span className="font-medium">Waist:</span> Measure around your natural waistline.</li>
                  <li><span className="font-medium">Inseam:</span> Measure from the crotch to the bottom of the leg.</li>
                </ul>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">Size</TableHead>
                      <TableHead className="whitespace-nowrap">Waist (in/cm)</TableHead>
                      <TableHead className="whitespace-nowrap">Inseam (in/cm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>S (30)</TableCell>
                      <TableCell>30-31 in / 76-79 cm</TableCell>
                      <TableCell>30 in / 76 cm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>M (32)</TableCell>
                      <TableCell>32-33 in / 81-84 cm</TableCell>
                      <TableCell>31 in / 79 cm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>L (34)</TableCell>
                      <TableCell>34-35 in / 86-89 cm</TableCell>
                      <TableCell>32 in / 81 cm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>XL (36)</TableCell>
                      <TableCell>36-37 in / 91-94 cm</TableCell>
                      <TableCell>32 in / 81 cm</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-slate-500 mt-6">*Please note: Measurements are approximate. A variance of 1-2 cm is possible.*</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
