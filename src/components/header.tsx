import Link from 'next/link';
import Image from 'next/image';
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
            <Link href="/About-Us" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              About-Us
            </Link>
            <Link href="/Bundles" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Bundles
            </Link>
            <Link href="/Human-Hairs" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Human-Hairs
            </Link>
            <Link href="/Hair-Products" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Hair-Products
            </Link>
            <Link href="/Hair-Accessories" className="text-gray-700 dark:text-gray-200 hover:text-yellow-500">
              Hair-Accessories
            </Link>
          </nav>
          </header>
    );
    }
                    
