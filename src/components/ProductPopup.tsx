import React from 'react';
import { X } from 'lucide-react';
import { Perfume } from '../types';
import { OccasionIcon } from './OccasionIcon';

interface ProductPopupProps {
  perfume: Perfume | null;
  onClose: () => void;
}

export const ProductPopup: React.FC<ProductPopupProps> = ({ perfume, onClose }) => {
  if (!perfume) return null;

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
          <div className="bg-[#0B0B0B] p-8 flex items-center justify-center border-r border-[#2B2B2B]/50 min-h-[300px] md:min-h-[450px]">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="max-h-[320px] md:max-h-[400px] object-contain transform hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Fragrance Details */}
          <div className="p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Chapter & Title */}
              <span className="font-serif text-[10px] tracking-[0.3em] text-[#C9A66B] uppercase block">
                {perfume.chapter}
              </span>
              <h2 className="font-serif text-3xl tracking-[0.15em] text-white uppercase font-bold">
                {perfume.name}
              </h2>

              {/* Description */}
              <p className="font-serif italic text-base text-[#B8B8B8] tracking-wide leading-relaxed">
                "{perfume.description}"
              </p>

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
