import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, Shield, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 18);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Anteres Unlimited Clothing LLC
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Authentic USA Fashion Delivered to Singapore
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Premium American Fashion, Delivered to Singapore
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Established in 2024, Anteres Unlimited Clothing LLC is a
              registered clothing brand specializing in importing high-quality
              apparel directly from the USA and distributing to Singapore. We
              bridge the gap between American fashion and Southeast Asian style,
              ensuring authenticity and quality in every piece.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-slate-50">
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
      <section className="py-16 bg-white">
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
                Legally established LLC with full compliance and transparency
                for all business operations.
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
                Authentic American brands sourced directly from manufacturers
                and authorized distributors.
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
                Efficient logistics network ensuring timely delivery with full
                tracking and insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
