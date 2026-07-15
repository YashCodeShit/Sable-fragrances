import React from 'react';

export const Features: React.FC = () => {
  const items = [
    {
      title: 'BORN IN KASHMIR',
      desc: 'Inspired by the valleys. Rooted in silence.',
      svg: (
        <svg className="w-10 h-10 text-[#C9A66B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Leaf with detailed editorial veins */}
          <path d="M12 2C12 2 15 6 15 11C15 16 12 21 12 21C12 21 9 16 9 11C9 6 12 2 12 2Z" />
          <path d="M12 2V21" />
          <path d="M12 6C13.5 7 14.5 8.5 14.5 10" />
          <path d="M12 11C13.5 12 14.5 13.5 14.5 15" />
          <path d="M12 6C10.5 7 9.5 8.5 9.5 10" />
          <path d="M12 11C10.5 12 9.5 13.5 9.5 15" />
        </svg>
      )
    },
    {
      title: 'CRAFTED WITH OBSESSION',
      desc: 'Highest quality ingredients. No shortcuts.',
      svg: (
        <svg className="w-10 h-10 text-[#C9A66B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Geometric sacred flower */}
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M12 3V21" strokeDasharray="1 2" />
          <path d="M3 12H21" strokeDasharray="1 2" />
        </svg>
      )
    },
    {
      title: 'PERFORMANCE WITHOUT COMPROMISE',
      desc: 'Longevity and projection that complement the fragrance, not overpower it.',
      svg: (
        <svg className="w-10 h-10 text-[#C9A66B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Compass/Radar vector lines */}
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
          <path d="M12 2V22" />
          <path d="M2 12H22" />
          <path d="M4.93 4.93L19.07 19.07" strokeDasharray="2 2" />
          <path d="M19.07 4.93L4.93 19.07" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: 'BEYOND GENDER',
      desc: 'Scents that are felt, not defined.',
      svg: (
        <svg className="w-10 h-10 text-[#C9A66B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Overlapping minimalist spheres (wireframe) */}
          <circle cx="10" cy="12" r="6" />
          <circle cx="14" cy="12" r="6" />
          <path d="M10 6C11 7.5 11 16.5 10 18" strokeDasharray="1 1" />
          <path d="M14 6C13 7.5 13 16.5 14 18" strokeDasharray="1 1" />
        </svg>
      )
    }
  ];

  return (
    <section id="features-section" className="bg-[#0B0B0B] py-16 border-t border-[#2B2B2B]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-[#121212]/50 border border-[#2B2B2B]/30 hover:border-[#C9A66B]/50 rounded-sm transition-all duration-500 hover:translate-y-[-4px]"
            >
              {/* Graphic Icon */}
              <div className="mb-6 flex justify-center items-center h-16 w-16 rounded-full border border-[#2B2B2B]/60 bg-[#0B0B0B]">
                {item.svg}
              </div>

              {/* Title */}
              <h3 className="font-serif text-sm tracking-[0.2em] text-[#FFFFFF] mb-3 font-medium">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs tracking-wider text-[#B8B8B8] leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
