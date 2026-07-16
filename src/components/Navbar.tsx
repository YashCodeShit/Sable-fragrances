import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="sable-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-[#2B2B2B] py-4 shadow-lg'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: SABLE Logo with Brand Line */}
        <a
          href="#"
          className="group flex flex-col items-center hover:opacity-85 transition-opacity text-center"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] pl-[0.25em] text-white leading-none">
            SABLE
          </span>
          <div className="h-[2.5px] bg-[#C9A66B] rounded-full w-8 mt-1.5 animate-line-expand" />
        </a>

        {/* Right: Shopping Cart Icon */}
        <button
          id="cart-btn"
          onClick={onCartClick}
          className="relative p-2 text-[#B8B8B8] hover:text-white transition-colors duration-300 group flex items-center gap-1 cursor-pointer"
          aria-label="Open Shopping Cart"
        >
          <ShoppingBag className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
          
          {cartCount > 0 && (
            <span
              id="cart-badge"
              className="absolute -top-1 -right-1 bg-[#C9A66B] text-[#0B0B0B] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-md font-sans"
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
