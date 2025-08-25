import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600">
                <span className="text-sm font-bold">A</span>
              </div> */}
              <Image
                src="/Anteres-Unlimited-logo.png"
                alt="Anteres Unlimited Logo"
                width={300}
                height={300}
                className="h-16 w-auto object-contain bg-white"
                priority
              />
              {/* <span className="font-bold">Anteres Unlimited</span> */}
            </div>
            <p className="text-slate-300 text-sm">
              Authentic American fashion imported directly to Singapore. Established 2024.
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Main Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-slate-300 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-300 hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400" />
                <div className="text-slate-300">
                  <p>100 E Broad St Ste 1350</p>
                  <p>Columbus, OH 43215, USA</p>
                </div>
              </div>
              {/* Map Embed */}
              <div className="pt-4">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title="Anteres Unlimited Clothing LLC on Google Maps"
                    src="https://www.google.com/maps?q=100+E+Broad+St+Ste+1350+Columbus,+OH+43215&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-md border border-slate-800"
                    aria-label="Map showing the company's office location in Columbus, Ohio"
                  />
                </AspectRatio>
                <div className="mt-2 text-right">
                  <Link
                    href="https://www.google.com/maps/place/100+E+Broad+St+Ste+1350,+Columbus,+OH+43215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                    aria-label="Open our location in Google Maps"
                  >
                    Open in Google Maps
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">contact@anteresclothing.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">+1 (614) 555-0123</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Anteres Unlimited Clothing LLC. All rights reserved.</p>
            {/* <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Legally registered in Ohio, USA | Distributing to Singapore
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
