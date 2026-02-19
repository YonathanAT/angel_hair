import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from 'next/image'; // Import the Image component from Next.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="flex justify-between items-center px-12">
       <p className="leading-8 ml-4 text-sm text-gray-400">
       <Image
        src = '/assets/logo1.png'
        alt = "angel's hair shop logo"
        width= {70}
        height = {70}
        priority 
        />
        Angel's Hair<br />
        +447506942195<br />
        angelhair@gmail.com<br />
        46 Stroud Green Road, London<br />
        United Kingdom.
        
        </p>
        
        <p className="leading-8 ml-4 text-sm text-gray-400">
         <u>Customer Services</u><br />
        Shipping Information<br />
        Returns Information<br />
        FAQ's<br />
        Privacy Policy<br />
        Refund Polivy.

        </p>
        </div>
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <span className="text-2xl hover:text-blue-500 transition-colors">
          <FaFacebook />
        </span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <span className="text-2xl hover:text-blue-500 transition-colors ">
          <FaInstagram />
        </span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <span className="text-2xl hover:text-blue-500 transition-colors ">
          <FaTwitter />
        </span>
        </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2026 Angel's Hair. All rights reserved.</p>
      </div>
    </footer>
  );
}