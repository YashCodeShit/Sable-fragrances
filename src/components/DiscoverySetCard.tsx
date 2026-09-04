import React, { useState } from 'react';
import { Perfume, CartItem } from '../types';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { DISCOVERY_SET_HERO_IMAGE } from '../data';

interface DiscoverySetCardProps {
  discoverySets: Perfume[];
  cartItems: CartItem[];
  onCardClick: (perfume: Perfume) => void;
  onAddToCart: (perfume: Perfume) => void;
  onDecrease: (perfume: Perfume) => void;
}

export const DiscoverySetCard: React.FC<DiscoverySetCardProps> = ({
  discoverySets,
  cartItems,
  onCardClick,
  onAddToCart,
  onDecrease
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    discoverySets[0]?.id || 'discovery-the-prelude'
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const activeSet =
    discoverySets.find((s) => s.id === selectedId) || discoverySets[0];

  const currentImage = activeSet.image || DISCOVERY_SET_HERO_IMAGE;

  const quantityInCart =
    cartItems.find((item) => item.perfume.id === activeSet.id)?.quantity || 0;

  // Tab configurations for the 4-segment dial (without numbering)
  const dialOptions = [
    { id: 'discovery-the-prelude', label: 'Prelude' },
    { id: 'discovery-the-midnight-trail', label: 'Midnight' },
    { id: 'discovery-the-landscape-series', label: 'Landscape' },
    { id: 'discovery-the-sable-archive', label: 'Archive' }
  ];

  return (
    <div
      onClick={() => onCardClick(activeSet)}
      className="group relative flex flex-col justify-between bg-[#121212] border border-[#C9A66B]/40 hover:border-[#C9A66B] transition-all duration-300 rounded-sm cursor-pointer shadow-lg overflow-hidden h-full ring-1 ring-[#C9A66B]/20 hover:ring-[#C9A66B]/40"
    >
      {/* Product Image Area - Full Bleed Grid Aspect matching ProductCard */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141414] border-b border-[#2B2B2B]/40">
        {/* Shimmer Placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#181818] via-[#1F1F1F] to-[#141414] animate-pulse" />
        )}
        <img
          src={currentImage}
          alt={`Sable Discovery Sets - ${activeSet.name}`}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-103 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />

        {/* Subtle shadow overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 bg-[#0B0B0B]/90 border border-[#C9A66B]/50 px-2 py-0.5 rounded-sm backdrop-blur-sm z-10 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-[#C9A66B]" />
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#C9A66B] uppercase font-semibold">
            DISCOVERY SET
          </span>
        </div>

        {/* Top Right: Flacon Count Badge */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <div className="bg-[#0B0B0B]/85 border border-[#2B2B2B] px-2 py-0.5 rounded-sm backdrop-blur-sm">
            <span className="font-mono text-[8px] tracking-wider text-[#C9A66B] font-semibold">
              {activeSet.itemsInside ? `${activeSet.itemsInside.length} × 10 ML` : '10 ML'}
            </span>
          </div>
        </div>

        {/* Tactile Floating Segment Dial: 4-tab pill selector (names without numbers) */}
        <div 
          className="absolute bottom-2.5 left-2 right-2 z-10"
          onClick={(e) => e.stopPropagation()} // Prevent card click
        >
          <div className="grid grid-cols-4 gap-1 p-1 bg-black/85 backdrop-blur-md rounded-sm border border-white/15 shadow-2xl">
            {dialOptions.map((opt) => {
              const isActive = opt.id === activeSet.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedId(opt.id)}
                  className={`py-1.5 px-0.5 text-[9px] font-mono tracking-wide text-center rounded-xs transition-all duration-200 truncate cursor-pointer ${
                    isActive
                      ? 'bg-[#C9A66B] text-[#0B0B0B] font-bold shadow-md'
                      : 'text-[#9E9E9E] hover:text-white hover:bg-white/10'
                  }`}
                  title={opt.label}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Title / Chapter Details & Interactive Controls */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Chapter identifier and Live Price */}
          <div className="flex justify-between items-center">
            <span className="block font-serif text-[10px] tracking-[0.25em] text-[#C9A66B] uppercase">
              {activeSet.chapter}
            </span>

            {/* Dynamic Live Price */}
            <span className="font-mono text-xs text-[#C9A66B] font-semibold tracking-wider">
              ₹{activeSet.price}
            </span>
          </div>

          {/* Active Set Name and Quantity Controller / ADD Button */}
          <div className="flex items-center justify-between gap-2 h-9">
            <h3 className="font-serif text-lg tracking-[0.15em] text-white font-medium uppercase truncate">
              {activeSet.name}
            </h3>

            {/* Interactive Quantity Controller or Elegant ADD Button synced to active set */}
            {quantityInCart > 0 ? (
              <div 
                className="flex items-center bg-[#0B0B0B] border border-[#C9A66B] rounded-sm text-white h-full"
                onClick={(e) => e.stopPropagation()} // Prevent card click
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDecrease(activeSet);
                  }}
                  className="px-3 h-full hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] transition-colors rounded-l-sm flex items-center justify-center cursor-pointer"
                  aria-label={`Decrease quantity of ${activeSet.name}`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-sans text-xs font-semibold px-2 min-w-[24px] text-center text-[#C9A66B]">
                  {quantityInCart}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(activeSet);
                  }}
                  className="px-3 h-full hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] transition-colors rounded-r-sm flex items-center justify-center cursor-pointer"
                  aria-label={`Increase quantity of ${activeSet.name}`}
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent opening the details modal
                  onAddToCart(activeSet);
                }}
                className="flex items-center gap-1 bg-[#121212] hover:bg-[#C9A66B] hover:text-[#0B0B0B] text-[#C9A66B] border border-[#C9A66B]/60 hover:border-[#C9A66B] px-3 py-1.5 rounded-sm font-sans text-[10px] font-semibold tracking-widest transition-all duration-300 uppercase cursor-pointer shrink-0"
                aria-label={`Add ${activeSet.name} to cart`}
              >
                <Plus className="w-3 h-3" />
                <span>ADD</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic What's Inside pill preview listing the exact 10 ml flacons */}
        <div className="space-y-1.5 pt-1 border-t border-[#2B2B2B]/40">
          <div className="flex items-center justify-between text-[8.5px] font-mono tracking-widest text-[#8A8A8A] uppercase">
            <span>WHAT'S INSIDE</span>
            <span className="text-[#C9A66B]">
              {activeSet.itemsInside?.length} × 10 ML
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {activeSet.itemsInside?.map((item, idx) => (
              <span
                key={idx}
                className="inline-block px-1.5 py-0.5 bg-[#0A0A0A] border border-[#2B2B2B] text-[#D0D0D0] text-[8.5px] font-mono rounded-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Subtitle/Short description on card for visual balance */}
        <p className="font-sans text-[11px] text-[#B8B8B8] tracking-wide line-clamp-1 italic font-light opacity-80 pt-1 border-t border-[#2B2B2B]/40">
          {activeSet.description}
        </p>
      </div>
    </div>
  );
};
