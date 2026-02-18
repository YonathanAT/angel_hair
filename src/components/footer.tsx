import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
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