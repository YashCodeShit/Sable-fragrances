import React from 'react';
import { Instagram } from 'lucide-react';
import packagingBox from '../assets/images/sable_packaging_box_1784142755925.jpg';

interface FooterProps {
  instagramUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  instagramUrl = "https://www.instagram.com/sable.fragrances" 
}) => {
  return (
    <footer id="footer-section" className="bg-[#0B0B0B] text-white border-t border-[#2B2B2B] pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        {/* Split Section like Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#2B2B2B]/40 pb-10">
          {/* Left Column: Premium Packaging Image (7 columns on lg) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="overflow-hidden rounded-sm border border-[#2B2B2B]/60 group bg-[#121212] aspect-[16/10] relative">
              <img
                src={packagingBox}
                alt="SABLE Luxury Box and Perfume Bottle"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-1000 hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex justify-between items-center text-[9px] tracking-[0.2em] font-mono text-[#6E6E6E] uppercase px-1">
              <span>SABLE OBJECTS — THE SIGNATURE PACKAGING</span>
              <span>EST. 2025</span>
            </div>
          </div>

          {/* Right Column: Editorial Contact/Details (5 columns on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:pl-8">
            <div className="space-y-4">
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <h2 className="font-serif text-4xl lg:text-5xl tracking-[0.3em] pl-[0.3em] text-white font-medium uppercase leading-none text-center lg:text-left">
                  SABLE
                </h2>
                <div className="h-[1px] bg-[#C9A66B]/60 w-16 mx-auto lg:mx-[0.15em]" />
              </div>
              
              <p className="font-serif text-sm text-[#A3A3A3] leading-relaxed max-w-sm font-light italic text-center lg:text-left mx-auto lg:mx-0">
                “Each fragrance is a chapter of memory, handcrafted and bottled where the mountains meet the sky.”
              </p>
            </div>
            
            <div className="space-y-4 w-full">
              <div className="h-[1px] bg-[#2B2B2B]/40 w-full" />
              
              <div className="grid grid-cols-2 gap-4 font-mono text-[10px] tracking-[0.2em] text-[#8A8A8A] uppercase">
                <div className="text-center lg:text-left">
                  <span className="text-[#6E6E6E] block mb-1">COORDINATES</span>
                  <span className="text-white">34°11'01.8"N 74°54'22.0"E</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="text-[#6E6E6E] block mb-1">CONCENTRATION</span>
                  <span className="text-[#C9A66B]">EXTRAIT DE PARFUM</span>
                </div>
              </div>
              
              <div className="h-[1px] bg-[#2B2B2B]/40 w-full" />
            </div>

            <div className="flex justify-center lg:justify-start w-full pt-1">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] tracking-[0.25em] text-[#B8B8B8] hover:text-white transition-all duration-300 group"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 border border-[#2B2B2B] group-hover:border-[#C9A66B] rounded-full bg-[#121212]/40 group-hover:bg-[#C9A66B]/10 transition-all duration-300">
                  <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                </span>
                <span>FOLLOW @SABLE.FRAGRANCES</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and credits */}
        <div className="text-center space-y-2 pt-2">
          <p className="font-mono text-[9px] tracking-[0.25em] text-[#6E6E6E] uppercase">
            @ SABLE Fragrances | ALL RIGHTS RESERVED
          </p>
          
          <div className="pt-0.5">
            <p className="font-serif text-[11px] tracking-[0.15em] text-[#8A8A8A]">
              Developed by{' '}
              <a 
                href="https://www.instagram.com/somehowofficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-serif text-[#C9A66B] hover:text-white transition-colors"
              >
                Somehow
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
