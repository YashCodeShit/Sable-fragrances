import React from 'react';
import heroBg from '../assets/images/sable_hero_mountain_1784142691662.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-start bg-[#0B0B0B] text-white pt-24 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic Mountains of Kashmir"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/30" />
      </div>

      {/* Main Content Container (Editorial Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Coordinates and Philosophy (6 columns on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-10 text-left max-w-xl">
          {/* Coordinates and Mountain Graphics */}
          <div className="space-y-4">
            <div className="font-mono text-xs tracking-[0.25em] text-[#B8B8B8] leading-relaxed">
              34°11'01.8"N
              <br />
              74°54'22.0"E
            </div>
            
            {/* Minimalist Mountain SVG and caption */}
            <div className="flex flex-col items-start space-y-2">
              <svg 
                className="w-16 h-8 text-[#C9A66B]" 
                viewBox="0 0 100 40" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Clean, minimalist overlapping mountain peaks */}
                <path d="M10 35 L40 10 L60 25 L85 5 L95 35 Z" />
                <path d="M25 35 L48 18 L68 30" opacity="0.6" />
                <line x1="5" y1="35" x2="95" y2="35" strokeWidth="1" opacity="0.5" />
              </svg>
              <span className="font-serif italic text-sm tracking-[0.15em] text-[#C9A66B]">
                atmosphere bottled
              </span>
            </div>
          </div>

          {/* Philosophy text styled luxuriously */}
          <div className="space-y-6 font-light">
            <h2 className="font-serif text-[#C9A66B] text-xs tracking-[0.3em] uppercase">
              OUR PHILOSOPHY IS SIMPLE:
            </h2>
            
            <p className="font-serif text-lg md:text-xl text-[#FFFFFF] leading-relaxed tracking-wide italic">
              People don't fall in love with perfume.
              <br />
              They fall in love with what perfume reminds them of.
              <br />
              A fragrance becomes yours the moment it creates a memory.
            </p>

            <div className="space-y-4 text-sm text-[#B8B8B8] leading-relaxed tracking-wider">
              <p>
                One day someone may wear <span className="text-white italic">Long Shadows</span> without ever knowing it was inspired by a grandfather's old wardrobe.
              </p>
              
              <p>
                Someone else may wear <span className="text-white italic">The First Dew</span> without knowing it began with the memory of a child tasting dew from flowers on a cold Kashmiri morning.
              </p>
              
              <p>
                And that's exactly how it should be. Every bottle carries a different story once it leaves our hands.
              </p>
              
              <p>
                We give it ours. Our customers give it theirs.
                <br />
                That is what SABLE exists to celebrate.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Spacer/Aesthetic Balance */}
        <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center text-center">
          <div className="border border-[#2B2B2B] bg-[#121212]/30 backdrop-blur-sm p-10 max-w-sm rounded-sm text-center space-y-4">
            <span className="font-serif text-xs tracking-[0.3em] text-[#C9A66B]">EST. 2025</span>
            <h1 className="font-serif text-3xl tracking-[0.2em] text-white">SABLE</h1>
            <div className="h-[1px] w-12 bg-[#C9A66B]/50 mx-auto" />
            <p className="font-sans text-xs tracking-[0.15em] text-[#B8B8B8] leading-relaxed">
              EXTRAIT DE PARFUM
              <br />
              KASHMIR VALLEYS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
