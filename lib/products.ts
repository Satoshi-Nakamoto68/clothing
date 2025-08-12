export interface Product {
  id: string
  name: string
  price: number
  category: "men" | "women" | "accessories"
  image: string
  image_gallery?: string[]
  shortDescription: string
  fullDescription: string
  sizes: string[]
  rating: number
  isNew?: boolean
}

export const products: Product[] = [
  // Men's Collection
  {
    id: "m001",
    name: "Classic Indigo Corduroy Utility Jacket",
    price: 189,
    category: "men",
    image: "/Classic-Jacket1.jpg",
    image_gallery: [
      "/Classic-Jacket2.jpg",
      "/Classic-Jacket3.jpg",
      "/Classic-Jacket4.jpg",
      "/Classic-Jacket5.jpg",
    ],
    shortDescription: "Classic indigo jacket crafted from premium cotton corduroy",
    fullDescription:
      "This classic indigo corduroy utility jacket is made from premium cotton for lasting comfort and durability. Featuring a timeless workwear design with reinforced seams, functional pockets, and a relaxed fit, it pairs effortlessly with casual or smart outfits. Suitable for year-round wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    isNew: true,
  },
  {
    id: "m002",
    name: "Performance Quick-Dry Short Sleeve Golf Polo for Men",
    price: 89,
    category: "men",
    image: "/Cotton-Polo-Shirt1.jpg",
    image_gallery: [
      "/Cotton-Polo-Shirt1.jpg",
      "/Cotton-Polo-Shirt2.jpg",
      "/Cotton-Polo-Shirt3.jpg",
    ],
    shortDescription: "Lightweight men’s golf polo with quick-dry and moisture-wicking fabric",
    fullDescription:
      "This performance men’s golf polo is crafted from breathable, moisture-wicking fabric that keeps you cool and dry on and off the course. Designed with a classic short sleeve silhouette, it offers lightweight comfort, quick-dry functionality, and versatile style for both casual wear and sports activities.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
  },
  {
    id: "m003",
    name: "Vintage American Graphic Tee",
    price: 65,
    category: "men",
    image: "/Touch-Grass-Tshirt1.jpg",
    image_gallery: [
      "/Touch-Grass-Tshirt1.jpg",
      "/Touch-Grass-Tshirt2.jpg",
      "/Touch-Grass-Tshirt3.jpg",
      "/Touch-Grass-Tshirt4.jpg",
      "/Touch-Grass-Tshirt1.jpg",
    ],
    shortDescription: "Authentic vintage-inspired graphic tee with American heritage design",
    fullDescription:
      "Celebrate American heritage with this vintage-inspired graphic tee. Made from soft cotton blend with distressed printing for an authentic worn-in look. Features classic American motifs and comfortable regular fit. Made in the USA.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
  },
  {
    id: "m004",
    name: "Leather Work Boots",
    price: 299,
    category: "men",
    image: "/Athletic-boots1.jpg",
    image_gallery: [
      "/Athletic-boots1.jpg",
      "/Athletic-boots2.jpg",
      "/Athletic-boots3.jpg",
      "/Athletic-boots4.jpg",
      "/Athletic-boots1.jpg",
    ],
    shortDescription: "Durable athletic Chelsea boots designed for comfort and performance",
    fullDescription:
      "These men's Chelsea boots feature a soft toe design and are crafted with breathable, high-quality materials for all-day comfort. Built with a flexible sole and easy slip-on style, they are ideal for both casual wear and active use..",
    sizes: ["7", "8", "9", "10", "11", "12", "13", "14" , "15"],
    rating: 4.9,
  },
  {
    id: "m005",
    name: "Flannel Button-Down Shirt",
    price: 125,
    category: "men",
    image: "/mens-flannel-shirt.png",
    shortDescription: "Warm flannel shirt in classic American plaid patterns",
    fullDescription:
      "Stay warm in style with this premium flannel shirt. Made from 100% cotton flannel with classic American plaid patterns. Features button-down collar, chest pocket, and relaxed fit for comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
  },
  {
    id: "m006",
    name: "Athletic Performance Shorts",
    price: 75,
    category: "men",
    image: "/mens-athletic-shorts-performance.png",
    shortDescription: "High-performance athletic shorts for active lifestyle",
    fullDescription:
      "Designed for peak performance, these athletic shorts feature moisture-wicking fabric, four-way stretch, and secure zip pockets. Perfect for workouts, running, or casual wear. Made with American athletic wear technology.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
  },

  // Women's Collection
  {
    id: "w001",
    name: "Elegant Silk Blouse",
    price: 159,
    category: "women",
    image: "/elegant-silk-blouse.png",
    shortDescription: "Luxurious silk blouse with timeless American elegance",
    fullDescription:
      "This elegant silk blouse is crafted from 100% mulberry silk with a lustrous finish. Features a classic collar, button-front closure, and relaxed fit. Perfect for professional or formal occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    isNew: true,
  },
  {
    id: "w002",
    name: "High-Waisted Skinny Jeans",
    price: 145,
    category: "women",
    image: "/womens-high-waisted-skinny-jeans.png",
    shortDescription: "Premium American denim in a flattering high-waisted cut",
    fullDescription:
      "These high-waisted skinny jeans are made from premium American denim with stretch for comfort and fit. Features a flattering high-rise waist, classic five-pocket styling, and ankle length.",
    sizes: ["24", "26", "28", "30", "32", "34"],
    rating: 4.6,
  },
  {
    id: "w003",
    name: "Cashmere Cardigan Sweater",
    price: 289,
    category: "women",
    image: "/luxury-cashmere-cardigan.png",
    shortDescription: "Luxurious cashmere cardigan for sophisticated style",
    fullDescription:
      "Indulge in luxury with this 100% cashmere cardigan. Features a classic button-front design, ribbed trim, and relaxed fit. Perfect for layering and available in multiple sophisticated colors.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
  },
  {
    id: "w004",
    name: "Floral Summer Dress",
    price: 119,
    category: "women",
    image: "/floral-summer-dress.png",
    shortDescription: "Breezy floral dress perfect for warm weather",
    fullDescription:
      "This charming floral dress features a feminine silhouette with a fitted bodice and flowing skirt. Made from lightweight cotton blend with beautiful floral print. Perfect for summer occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.5,
  },
  {
    id: "w005",
    name: "Alabama Hat - Flat Bill - Navy Camo / Black - Laser Mesh",
    price: 95,
    category: "men",
    image: "/ProductFeatureIconsALL4.png?height=400&width=400",
    image_gallery: [
      "/ProductFeatureIconsALL1.png?height=400&width=400",
      "/ProductFeatureIconsALL2.png?height=400&width=400",
      "/ProductFeatureIconsALL3.png?height=400&width=400",
      "/ProductFeatureIconsALL4.png?height=400&width=400",
      "/ProductFeatureIconsALL2.png?height=400&width=400",
    ],
    shortDescription: "High-performance leggings for active lifestyle",
    fullDescription:
      "These performance leggings feature four-way stretch fabric, moisture-wicking technology, and a high-waisted design for support. Perfect for yoga, running, or casual wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
  },
  {
    id: "w006",
    name: "Classic White Sneakers",
    price: 179,
    category: "women",
    image: "/White-Sneakers1.jpg",
    image_gallery: [
      "/White-Sneakers2.png",
      "/White-Sneakers1.jpg",
      "/White-Sneakers3.jpg",
      "/White-Sneakers4.jpg",
      // "/White-Sneakers1.jpg",
    ],
    shortDescription: "Timeless white sneakers with American craftsmanship",
    fullDescription:
      "These classic white sneakers combine timeless style with modern comfort. Features premium leather upper, cushioned sole, and durable construction. Perfect for casual everyday wear.",
    sizes: ["5", "6", "7", "8", "9", "10"],
    rating: 4.6,
  },

  // Accessories
  {
    id: "a001",
    name: "Leather Crossbody Bag",
    price: 225,
    category: "accessories",
    image: "/Leather-Crossbody-Bag1.png?height=400&width=400",
    image_gallery: [
      "/Leather-Crossbody-Bag1.png?height=400&width=400",
      "/Leather-Crossbody-Bag2.png?height=400&width=400",
      "/Leather-Crossbody-Bag3.png?height=400&width=400",
      "/Leather-Crossbody-Bag4.png?height=400&width=400",
      // "/Leather-Crossbody-Bag2.png?height=400&width=400",
    ],
    shortDescription: "Handcrafted leather crossbody bag with American craftsmanship",
    fullDescription:
      "This elegant crossbody bag is handcrafted from premium American leather. Features adjustable strap, multiple compartments, and antique brass hardware. Perfect for everyday use or travel.",
    sizes: ["One Size"],
    rating: 4.8,
    isNew: true,
  },
  {
    id: "a002",
    name: "Classic Baseball Cap",
    price: 45,
    category: "accessories",
    image: "/Classic-Baseball-Cap2.jpg?height=400&width=400",
    image_gallery: [
      "/Classic-Baseball-Cap1.jpg?height=400&width=400",
      "/Classic-Baseball-Cap2.jpg?height=400&width=400",
      "/Classic-Baseball-Cap3.jpg?height=400&width=400",
      "/Classic-Baseball-Cap4.jpg?height=400&width=400",
      "/Classic-Baseball-Cap1.jpg?height=400&width=400",
    ],
    shortDescription: "Authentic American baseball cap with classic styling",
    fullDescription:
      "This classic baseball cap features authentic American styling with premium cotton construction. Adjustable back strap and curved brim for comfortable fit and sun protection.",
    sizes: ["One Size"],
    rating: 4.4,
  },
  {
    id: "a003",
    name: "Silk Scarf",
    price: 89,
    category: "accessories",
    image: "/Silk-Scarf1.jpg?height=400&width=400",
    image_gallery: [
      "/Silk-Scarf1.jpg?height=400&width=400",
      "/Silk-Scarf2.jpg?height=400&width=400",
      "/Silk-Scarf3.jpg?height=400&width=400",
      "/Silk-Scarf4.jpg?height=400&width=400",
      "/Silk-Scarf1.jpg?height=400&width=400",
    ],
    shortDescription: "Luxurious silk scarf with elegant American design",
    fullDescription:
      "This luxurious silk scarf is made from 100% mulberry silk with beautiful American-inspired prints. Perfect for adding elegance to any outfit or as a hair accessory.",
    sizes: ["One Size"],
    rating: 4.7,
  },
  {
    id: "a004",
    name: "Leather Belt",
    price: 125,
    category: "accessories",
    image: "/Leather-Belt1.jpg?height=400&width=400",
    image_gallery: [
      "/Leather-Belt1.jpg?height=400&width=400",
      "/Leather-Belt2.jpg?height=400&width=400",
      "/Leather-Belt3.jpg?height=400&width=400",
      "/Leather-Belt4.jpg?height=400&width=400",
      "/Leather-Belt1.jpg?height=400&width=400",
    ],
    shortDescription: "Premium leather belt with classic American craftsmanship",
    fullDescription:
      "This premium leather belt is crafted from full-grain American leather with solid brass buckle. Features classic stitching and available in multiple sizes for the perfect fit.",
    sizes: ["30", "32", "34", "36", "38", "40"],
    rating: 4.6,
  },
  {
    id: "a005",
    name: "Belt Emerald",
    price: 159,
    category: "accessories",
    image: "/Belt-Emerald1.jpg?height=400&width=400",
    image_gallery: [
      "/Belt-Emerald1.jpg?height=400&width=400",
      "/Belt-Emerald2.jpg?height=400&width=400",
      "/Belt-Emerald3.jpg?height=400&width=400",
      "/Belt-Emerald4.jpg?height=400&width=400",
      "/Belt-Emerald1.jpg?height=400&width=400",
    ],
    shortDescription: "Elegant emerald-green leather belt with refined craftsmanship",
    fullDescription:
      "This elegant belt is made from high-quality genuine leather dyed in a rich emerald hue, paired with a durable matte silver buckle. Showcases meticulous stitching and adjustable sizing, perfect for adding a sophisticated touch to any outfit.",
    sizes: ["One Size"],
    rating: 4.5,
  },
  {
    id: "a006",
    name: "Violet Magenta Ombre Silk Chiffon Shawl for women",
    price: 75,
    category: "accessories",
    image: "/Violet-Magenta-Ombre3.jpg",
    image_gallery: [
      "/Violet-Magenta-Ombre1.jpg",
      "/Violet-Magenta-Ombre2.jpg",
      "/Violet-Magenta-Ombre3.jpg",
      "/Violet-Magenta-Ombre4.jpg",
      "/Violet-Magenta-Ombre5.jpeg",
    ],
    shortDescription: "Durable canvas tote bag made in America",
    fullDescription:
      "This sturdy canvas tote bag is made from heavy-duty American cotton canvas. Features reinforced handles, interior pocket, and spacious main compartment. Perfect for shopping or daily use.",
    sizes: ["One Size"],
    rating: 4.3,
  },
   {
    id: "a005",
    name: "Belt Emerald",
    price: 159,
    category: "accessories",
    image: "/Belt-Emerald1.jpg?height=400&width=400",
    image_gallery: [
      "/Belt-Emerald1.jpg?height=400&width=400",
      "/Belt-Emerald2.jpg?height=400&width=400",
      "/Belt-Emerald3.jpg?height=400&width=400",
      "/Belt-Emerald4.jpg?height=400&width=400",
      "/Belt-Emerald1.jpg?height=400&width=400",
    ],
    shortDescription: "Elegant emerald-green leather belt with refined craftsmanship",
    fullDescription:
      "This elegant belt is made from high-quality genuine leather dyed in a rich emerald hue, paired with a durable matte silver buckle. Showcases meticulous stitching and adjustable sizing, perfect for adding a sophisticated touch to any outfit.",
    sizes: ["One Size"],
    rating: 4.5,
  },
  {
    id: "a006",
    name: "Violet Magenta Ombre Silk Chiffon Shawl for women",
    price: 75,
    category: "accessories",
    image: "/Violet-Magenta-Ombre3.jpg",
    image_gallery: [
      "/Violet-Magenta-Ombre1.jpg",
      "/Violet-Magenta-Ombre2.jpg",
      "/Violet-Magenta-Ombre3.jpg",
      "/Violet-Magenta-Ombre4.jpg",
      "/Violet-Magenta-Ombre5.jpeg",
    ],
    shortDescription: "Durable canvas tote bag made in America",
    fullDescription:
      "This sturdy canvas tote bag is made from heavy-duty American cotton canvas. Features reinforced handles, interior pocket, and spacious main compartment. Perfect for shopping or daily use.",
    sizes: ["One Size"],
    rating: 4.3,
  },
  //test products
  
]
