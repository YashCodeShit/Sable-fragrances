import React from 'react';
import { Perfume } from '../types';
import { Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  perfume: Perfume;
  quantityInCart?: number;
  onCardClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  onDecrease: (e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  perfume, 
  quantityInCart = 0, 
  onCardClick, 
  onAddToCart,
  onDecrease
}) => {
  return (
    <div
      onClick={onCardClick}
      className="group relative flex flex-col justify-between bg-[#121212] border border-[#2B2B2B] p-6 hover:border-[#C9A66B]/50 transition-all duration-300 rounded-sm cursor-pointer shadow-lg overflow-hidden"
    >
      {/* Product Hover Animation Area */}
      <div className="flex-grow flex flex-col items-center justify-center pt-4 pb-6 overflow-hidden">
        {/* Bottle Image with Zoom Transition */}
        <div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden flex items-center justify-center">
          <img
            src={perfume.image}
            alt={`${perfume.name} - ${perfume.chapter}`}
            className="h-full object-contain filter brightness-95 group-hover:brightness-100 transition-transform duration-500 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Product Title / Chapter Details */}
      <div className="mt-4 space-y-2 border-t border-[#2B2B2B]/40 pt-4">
        {/* Chapter number in small letter spacing and price on the right */}
        <div className="flex justify-between items-center">
          <span className="block font-serif text-[10px] tracking-[0.25em] text-[#C9A66B] uppercase">
            {perfume.chapter}
          </span>
          <span className="font-mono text-xs text-[#C9A66B] font-semibold tracking-wider">
            ₹{perfume.price}
          </span>
        </div>

        {/* Perfume Name and ADD button/quantity selector on the right */}
        <div className="flex items-center justify-between gap-2 h-9">
          <h3 className="font-serif text-lg tracking-[0.15em] text-white font-medium">
            {perfume.name}
          </h3>

          {/* Interactive Quantity Controller or Elegant ADD Button */}
          {quantityInCart > 0 ? (
            <div 
              className="flex items-center bg-[#0B0B0B] border border-[#C9A66B] rounded-sm text-white h-full"
              onClick={(e) => e.stopPropagation()} // Prevent card click
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDecrease(e);
                }}
                className="px-3 h-full hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] transition-colors rounded-l-sm flex items-center justify-center cursor-pointer"
                aria-label={`Decrease quantity of ${perfume.name}`}
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="font-sans text-xs font-semibold px-2 min-w-[24px] text-center text-[#C9A66B]">
                {quantityInCart}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(e);
                }}
                className="px-3 h-full hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] transition-colors rounded-r-sm flex items-center justify-center cursor-pointer"
                aria-label={`Increase quantity of ${perfume.name}`}
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent opening the details modal
                onAddToCart(e);
              }}
              className="flex items-center gap-1 bg-[#121212] hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] border border-[#C9A66B]/60 hover:border-[#C9A66B] px-3 py-1.5 rounded-sm font-sans text-[10px] font-semibold tracking-widest transition-all duration-300 uppercase cursor-pointer"
              aria-label={`Add ${perfume.name} to cart`}
            >
              <Plus className="w-3 h-3" />
              <span>ADD</span>
            </button>
          )}
        </div>

        {/* Subtitle/Short description on card for visual balance */}
        <p className="font-sans text-[11px] text-[#B8B8B8] tracking-wide line-clamp-1 italic font-light opacity-80">
          {perfume.description}
        </p>
      </div>
    </div>
  );
};
