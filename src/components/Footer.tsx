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
    <footer id="footer-section" className="bg-[#0B0B0B] text-white border-t border-[#2B2B2B] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Split Section like Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#2B2B2B]/40 pb-12">
          {/* Left Column: Premium Packaging Image (7 columns on lg) */}
          <div className="lg:col-span-7 overflow-hidden rounded-sm border border-[#2B2B2B]/60 group bg-[#121212]">
            <img
              src={packagingBox}
              alt="SABLE Luxury Box and Perfume Bottle"
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Editorial Contact/Details (5 columns on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-8 text-left md:text-right md:items-end">
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-white font-medium uppercase">
              SABLE
            </h2>
            
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#8A8A8A] uppercase space-y-1">
              <p>34°11'01.8"N 74°54'22.0"E</p>
              <p>Atmosphere Bottled</p>
            </div>

            <div className="h-[1px] w-16 bg-[#C9A66B] md:ml-auto" />

            <div className="font-serif text-xs tracking-[0.25em] text-[#B8B8B8] space-y-1.5 uppercase font-light">
              <p>EXTRAIT DE PARFUM</p>
              <p>CRAFTED IN INDIA</p>
            </div>

            {/* Configurable Instagram Icon */}
            <div className="pt-2 flex items-center md:justify-end">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2.5 border border-[#2B2B2B] hover:border-[#C9A66B] text-[#B8B8B8] hover:text-white rounded-full bg-[#121212] hover:bg-[#121212]/90 transition-all duration-300 cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and credits */}
        <div className="text-center space-y-4">
          <p className="font-serif text-[10px] tracking-[0.25em] text-[#8A8A8A] uppercase">
            © SABLE Fragrances | ALL RIGHTS RESERVED
          </p>
          
          <div className="pt-1">
            <p className="font-serif text-[11px] tracking-[0.15em] text-[#8A8A8A] transition-colors">
              Developed by{' '}
              <a 
                href="https://www.instagram.com/somehowofficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-serif text-[#C9A66B] hover:text-white hover:underline underline-offset-4 transition-all"
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
