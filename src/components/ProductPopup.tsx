import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Perfume } from '../types';
import { OccasionIcon } from './OccasionIcon';

interface ProductPopupProps {
  perfume: Perfume | null;
  onClose: () => void;
}

export const ProductPopup: React.FC<ProductPopupProps> = ({ perfume, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<'30ml' | '100ml'>(
    perfume?.size?.includes('30') ? '30ml' : '100ml'
  );

  useEffect(() => {
    if (!perfume) return;
    if (perfume.size?.includes('30')) {
      setSelectedSize('30ml');
    } else {
      setSelectedSize('100ml');
    }
  }, [perfume]);

  if (!perfume) return null;

  const activeOption = perfume.availableSizes?.find((s) => s.size === selectedSize);
  const displayPrice = activeOption ? activeOption.price : perfume.price;
  const displaySize = activeOption ? activeOption.label : (perfume.size || '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-[#0B0B0B]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        id="product-modal"
        className="relative w-full max-w-4xl bg-[#121212]/90 border border-[#2B2B2B] rounded-sm shadow-2xl overflow-hidden z-10 transition-all duration-300 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#B8B8B8] hover:text-white hover:bg-[#2B2B2B]/50 rounded-full transition-all duration-300 cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Fragrance Image */}
          <div className="bg-[#0B0B0B] relative overflow-hidden border-b md:border-b-0 md:border-r border-[#2B2B2B]/50 min-h-[350px] md:min-h-full group">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700 filter brightness-95"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Subtle premium dark overlay at the bottom/edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Fragrance Details */}
          <div className="p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Chapter & Title */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-serif text-[10px] tracking-[0.3em] text-[#C9A66B] uppercase block">
                    {perfume.chapter}
                  </span>
                  <h2 className="font-serif text-3xl tracking-[0.15em] text-white uppercase font-bold mt-1">
                    {perfume.name}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="font-mono text-base text-[#C9A66B] font-semibold tracking-wider pt-1 block">
                    ₹{displayPrice}
                  </span>
                  {displaySize && (
                    <span className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                      {displaySize}
                    </span>
                  )}
                </div>
              </div>

              {/* Size Selector in Popup */}
              {perfume.availableSizes && perfume.availableSizes.length > 0 && (
                <div className="flex items-center gap-3 pt-2 pb-1 border-b border-[#2B2B2B]/40">
                  <span className="font-serif text-[10px] tracking-[0.2em] text-[#C9A66B] uppercase font-semibold">
                    SIZE:
                  </span>
                  <div className="flex items-center bg-[#0B0B0B] border border-[#2B2B2B] p-0.5 rounded-xs">
                    {perfume.availableSizes.map((s) => (
                      <button
                        key={s.size}
                        type="button"
                        onClick={() => setSelectedSize(s.size)}
                        className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase transition-all rounded-xs cursor-pointer ${
                          selectedSize === s.size
                            ? 'bg-[#C9A66B] text-[#0B0B0B] font-bold shadow-xs'
                            : 'text-[#8A8A8A] hover:text-white'
                        }`}
                      >
                        {s.label} — ₹{s.price}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Olfactory Profile Badge */}
              {perfume.olfactoryProfile && (
                <div className="inline-block bg-[#0B0B0B] border border-[#C9A66B]/40 px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest text-[#C9A66B] uppercase">
                  {perfume.olfactoryProfile}
                </div>
              )}

              {/* Description */}
              <p className="font-serif italic text-base text-[#B8B8B8] tracking-wide leading-relaxed">
                "{perfume.description}"
              </p>

              {/* What's Inside (For Discovery Sets) */}
              {perfume.itemsInside && perfume.itemsInside.length > 0 && (
                <div className="space-y-2.5 pt-2 border-t border-[#2B2B2B]/40">
                  <span className="block font-serif text-[10px] tracking-[0.25em] text-[#C9A66B] uppercase font-semibold">
                    WHAT'S INSIDE
                  </span>
                  <div className="grid grid-cols-1 gap-2 bg-[#0B0B0B] p-3.5 rounded-sm border border-[#2B2B2B]/60">
                    {perfume.itemsInside.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 font-mono text-xs text-[#E0E0E0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Story Section (For Editions) */}
              {perfume.story && perfume.story.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#2B2B2B]/40">
                  <span className="block font-serif text-[10px] tracking-[0.25em] text-[#C9A66B] uppercase font-semibold">
                    THE STORY
                  </span>
                  <div className="space-y-2.5 text-[#B8B8B8] font-serif text-xs md:text-sm leading-relaxed font-light">
                    {perfume.story.map((para, idx) => (
                      <p key={idx} className="italic">{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Occasions block */}
              <div className="space-y-2 pt-2">
                <span className="block font-serif text-[10px] tracking-[0.2em] text-[#C9A66B] uppercase font-semibold">
                  OCCASION
                </span>
                <div className="flex flex-wrap gap-3">
                  {perfume.occasions.map((occ, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-1.5 bg-[#0B0B0B] border border-[#2B2B2B]/60 px-2.5 py-1.5 rounded-sm"
                    >
                      <OccasionIcon name={occ} className="w-3.5 h-3.5 text-[#C9A66B]" />
                      <span className="font-sans text-[10px] tracking-wider text-[#B8B8B8] uppercase">
                        {occ}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Olfactory Notes block */}
              <div className="space-y-3 pt-4 border-t border-[#2B2B2B]/40">
                <span className="block font-serif text-[10px] tracking-[0.2em] text-[#C9A66B] uppercase font-semibold">
                  OLFACTORY EXPERIENCE
                </span>
                
                <div className="space-y-3">
                  {/* Top Notes */}
                  <div className="flex items-start gap-4 text-left border-b border-[#2B2B2B]/10 pb-2">
                    <span className="w-16 font-sans text-[9px] tracking-widest text-[#C9A66B] uppercase font-medium pt-0.5">Top Note</span>
                    <p className="font-sans text-xs text-[#E0E0E0] tracking-wide font-light leading-relaxed flex-1">
                      {perfume.topNotes.join(', ')}
                    </p>
                  </div>
                  {/* Heart Notes */}
                  <div className="flex items-start gap-4 text-left border-b border-[#2B2B2B]/10 pb-2">
                    <span className="w-16 font-sans text-[9px] tracking-widest text-[#C9A66B] uppercase font-medium pt-0.5">Heart Note</span>
                    <p className="font-sans text-xs text-[#E0E0E0] tracking-wide font-light leading-relaxed flex-1">
                      {perfume.heartNotes.join(', ')}
                    </p>
                  </div>
                  {/* Base Notes */}
                  <div className="flex items-start gap-4 text-left">
                    <span className="w-16 font-sans text-[9px] tracking-widest text-[#C9A66B] uppercase font-medium pt-0.5">Base Note</span>
                    <p className="font-sans text-xs text-[#E0E0E0] tracking-wide font-light leading-relaxed flex-1">
                      {perfume.baseNotes.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
