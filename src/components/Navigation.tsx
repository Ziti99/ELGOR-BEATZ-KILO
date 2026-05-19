import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 100);
  }, [scrollY]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" }
  ];

  return (
    <nav className={`hidden lg:flex items-center gap-8 text-lg font-medium transition-all duration-300 ${
      isScrolled ? 'text-gray-700' : 'text-gray-700'
    }`}>
      {navItems.map((item) => (
        <Link 
          key={item.label}
          href={item.href} 
          className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </nav>
  );
}

export function UserActions() {
  return (
    <div className="hidden lg:flex items-center gap-4">
      {/* Search */}
      <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300">
        <FaSearch />
      </button>
      
      {/* Favorites */}
      <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300 relative">
        <FaHeart />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          3
        </span>
      </button>
      
      {/* Cart */}
      <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-300 relative">
        <FaShoppingCart />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
          2
        </span>
      </button>
      
      {/* Login Button */}
      <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium">
        Log In
      </button>
      
      {/* Sign Up Button */}
      <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium">
        Sign Up
      </button>
    </div>
  );
}
