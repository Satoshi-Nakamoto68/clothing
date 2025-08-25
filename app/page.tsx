"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 18);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero']));
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to set section ref
  const setSectionRef = (sectionId: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[sectionId] = el;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={setSectionRef('hero')}
        data-section="hero"
        className={`relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 transition-all duration-1000 ${
          visibleSections.has('hero') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Define Your Style: The Best of US Streetwear.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Limited collections and exclusive collaborations, shipped directly to your door in Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section 
        ref={setSectionRef('company')}
        data-section="company"
        className={`py-16 bg-white transition-all duration-1000 delay-200 ${
          visibleSections.has('company') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Brand Image */}
            <div className="w-full">
              <Image
                src="/brand-story-image.png"
                alt="Brand story collage representing US streetwear culture"
                width={1600}
                height={1067}
                className="w-full h-auto rounded-lg object-contain"
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Right Column: Brand Story */}
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Born from the Streets, Built for the World.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                It all started with a feeling. A love for the raw energy of American streetwear—the culture, the history, the unapologetic self-expression found on the streets of Los Angeles and New York. Living in Singapore, we felt a disconnect. We saw the style, we craved the authenticity, but the real deal was always just out of reach. Anteres Unlimited Clothing was born from that desire. We're not just importers; we are curators and storytellers. We build bridges directly to the heart of the US streetwear scene, hand-picking every piece to ensure it’s 100% authentic and represents the best of the culture. Our mission is simple: to bring the world's most iconic street styles directly to you, so you can tell your own story, one authentic piece at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section 
        ref={setSectionRef('categories')}
        data-section="categories"
        className={`py-16 bg-slate-50 transition-all duration-1000 delay-300 ${
          visibleSections.has('categories') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/shop?category=men" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/category-4.png"
                    alt="Men's Fashion"
                    fill
                    // className="object-cover object-center group-hover:scale-105 transition-transform duration-300 !w-auto !h-auto"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 w-[478px] h-[400px]"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    Men's Collection
                  </h3>
                  <p className="text-slate-600">
                    Discover premium menswear from top American brands
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/shop?category=women" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/category-1.png"
                    alt="Women's Fashion"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 !w-auto !h-auto"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    Women's Collection
                  </h3>
                  <p className="text-slate-600">
                    Elegant and contemporary women's fashion
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/shop?category=accessories" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/fashion-accessories-bags-shoes.png"
                    alt="Accessories"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 !w-auto !h-auto"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                  <p className="text-slate-600">
                    Complete your look with premium accessories
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section 
        ref={setSectionRef('trust')}
        data-section="trust"
        className={`py-16 bg-white transition-all duration-1000 delay-400 ${
          visibleSections.has('trust') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why Choose Anteres Unlimited Clothing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Officially Registered in Ohio (2024)
              </h3>
              <p className="text-slate-600">
                We're more than just a retailer; we're a legitimate LLC officially registered in Ohio, USA. Our American roots are your assurance that you're dealing with a real, accountable company committed to transparency. Shop with complete confidence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Imported Directly from the USA
              </h3>
              <p className="text-slate-600">
                We don't work with middlemen. Every item in our collection is sourced directly from official brands and authorized distributors in the USA. This direct partnership is your guarantee that every piece you receive is the real deal—no exceptions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Fast and Reliable Shipping to Singapore
              </h3>
              <p className="text-slate-600">
                No long waits, no guessing games. We partner with world-class couriers like DHL and FedEx to ship your order from the US to Singapore, typically within 5-7 business days. You'll receive a tracking number the moment it ships, so you can follow its journey right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section 
        ref={setSectionRef('products')}
        data-section="products"
        className={`py-16 bg-slate-50 transition-all duration-1000 delay-500 ${
          visibleSections.has('products') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card className="group hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-64 relative overflow-hidden bg-slate-100">
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-800"
            >
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
