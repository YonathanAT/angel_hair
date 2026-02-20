import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart } from "lucide-react";

    export default function Header() {
        return (

    <header className="flex items-center justify-between px-6 py-6 bg-black/40 backdrop-blur-md">
      <div className="flex items-center">
        <Image
        src = '/assets/logo1.png'
        alt = "angel's hair shop logo"
        width= {120}
        height = {120}
        priority 
        />
      </div>
     
          {/* Navigation links */}
          <nav className="space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              About-Us
            </Link>
            <Link href="/bundles" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Bundles
            </Link>
            <Link href="/human-hairs" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Human-Hairs
            </Link>
            <Link href="/hair-products" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Hair-Products
            </Link>
            <Link href="/hair-accessories" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Hair-Accessories
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-black hover:text-yellow-500 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 text-black hover:text-yellow-500 cursor-pointer" />
          </div>

          </header>
    );
    }
                    
