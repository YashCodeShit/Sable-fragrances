import React, { useState } from 'react';
import { Perfume, CartItem } from '../types';
import { Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  perfume: Perfume;
  cartItems?: CartItem[];
  quantityInCart?: number;
  onCardClick: (activePerfume: Perfume) => void;
  onAddToCart: (activePerfume: Perfume, e?: React.MouseEvent) => void;
  onDecrease: (activePerfume: Perfume, e?: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  perfume, 
  cartItems,
  quantityInCart = 0, 
  onCardClick, 
  onAddToCart,
  onDecrease
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hasSizes = Boolean(perfume.availableSizes && perfume.availableSizes.length > 0);
  const [selectedSize, setSelectedSize] = useState<'30ml' | '100ml'>('100ml');

  const activeOption = hasSizes
    ? perfume.availableSizes?.find((s) => s.size === selectedSize) || perfume.availableSizes![0]
    : null;

  const currentPrice = activeOption ? activeOption.price : perfume.price;
  const currentSizeLabel = activeOption ? activeOption.label : (perfume.size || '100 ML');

  const currentPerfumeId = (hasSizes && selectedSize === '30ml') ? `${perfume.id}-30ml` : perfume.id;

  const activePerfume: Perfume = {
    ...perfume,
    id: currentPerfumeId,
    price: currentPrice,
    size: currentSizeLabel,
  };

  const currentQuantityInCart = cartItems
    ? (cartItems.find((item) => item.perfume.id === currentPerfumeId)?.quantity || 0)
    : quantityInCart;

  return (
    <div
      onClick={() => onCardClick(activePerfume)}
      className="group relative flex flex-col justify-between bg-[#121212] border border-[#2B2B2B] hover:border-[#C9A66B]/50 transition-all duration-300 rounded-sm cursor-pointer shadow-lg overflow-hidden h-full"
    >
      {/* Product Image Area - Full Bleed Grid Aspect */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141414] border-b border-[#2B2B2B]/40">
        {/* Shimmer Placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#181818] via-[#1F1F1F] to-[#141414] animate-pulse" />
        )}
        <img
          src={perfume.image}
          alt={`${perfume.name} - ${perfume.chapter}`}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-103 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        {/* Active Size Badge on Card Image */}
        {hasSizes && (
          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
            <span className="px-2 py-0.5 bg-[#0B0B0B]/90 border border-[#C9A66B]/40 text-[#C9A66B] text-[8.5px] font-mono tracking-widest uppercase rounded-xs backdrop-blur-sm shadow-md">
              {currentSizeLabel}
            </span>
          </div>
        )}
        {/* Subtle shadow overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Product Title / Chapter Details */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Chapter number, 30 ML / 100 ML size toggle, and dynamic price */}
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="block font-serif text-[10px] tracking-[0.25em] text-[#C9A66B] uppercase">
                {perfume.chapter}
              </span>

              {/* 30 ML / 100 ML Size Switcher for the 6 fragrances */}
              {hasSizes && (
                <div 
                  className="flex items-center bg-[#0B0B0B] border border-[#2B2B2B] p-0.5 rounded-xs" 
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize('30ml');
                    }}
                    className={`px-1.5 py-0.5 text-[8.5px] font-mono tracking-wider transition-all rounded-xs cursor-pointer ${
                      selectedSize === '30ml'
                        ? 'bg-[#C9A66B] text-[#0B0B0B] font-bold shadow-xs'
                        : 'text-[#8A8A8A] hover:text-white'
                    }`}
                  >
                    30 ML
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize('100ml');
                    }}
                    className={`px-1.5 py-0.5 text-[8.5px] font-mono tracking-wider transition-all rounded-xs cursor-pointer ${
                      selectedSize === '100ml'
                        ? 'bg-[#C9A66B] text-[#0B0B0B] font-bold shadow-xs'
                        : 'text-[#8A8A8A] hover:text-white'
                    }`}
                  >
                    100 ML
                  </button>
                </div>
              )}
            </div>

            <span className="font-mono text-xs text-[#C9A66B] font-semibold tracking-wider transition-all duration-200">
              ₹{currentPrice}
            </span>
          </div>

          {/* Perfume Name and ADD button/quantity selector */}
          <div className="flex items-center justify-between gap-2 h-9">
            <h3 className="font-serif text-lg tracking-[0.15em] text-white font-medium uppercase truncate pr-1">
              {perfume.name}
            </h3>

            {/* Interactive Quantity Controller or Elegant ADD Button */}
            {currentQuantityInCart > 0 ? (
              <div 
                className="flex items-center bg-[#0B0B0B] border border-[#C9A66B] rounded-sm text-white h-full shrink-0"
                onClick={(e) => e.stopPropagation()} // Prevent card click
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDecrease(activePerfume, e);
                  }}
                  className="px-3 h-full hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] transition-colors rounded-l-sm flex items-center justify-center cursor-pointer"
                  aria-label={`Decrease quantity of ${perfume.name}`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-sans text-xs font-semibold px-2 min-w-[24px] text-center text-[#C9A66B]">
                  {currentQuantityInCart}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(activePerfume, e);
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
                  onAddToCart(activePerfume, e);
                }}
                className="flex items-center gap-1 bg-[#121212] hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] border border-[#C9A66B]/60 hover:border-[#C9A66B] px-3 py-1.5 rounded-sm font-sans text-[10px] font-semibold tracking-widest transition-all duration-300 uppercase cursor-pointer shrink-0"
                aria-label={`Add ${perfume.name} to cart`}
              >
                <Plus className="w-3 h-3" />
                <span>ADD</span>
              </button>
            )}
          </div>
        </div>

        {/* Olfactory Profile if present */}
        {perfume.olfactoryProfile && (
          <p className="font-mono text-[10px] text-[#C9A66B] tracking-wider truncate">
            {perfume.olfactoryProfile}
          </p>
        )}

        {/* Subtitle/Short description on card for visual balance */}
        <p className="font-sans text-[11px] text-[#B8B8B8] tracking-wide line-clamp-1 italic font-light opacity-80 pt-1 border-t border-[#2B2B2B]/40">
          {perfume.description}
        </p>
      </div>
    </div>
  );
};
