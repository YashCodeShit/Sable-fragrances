import React from 'react';

export const CollectionHeader: React.FC = () => {
  return (
    <div id="collection-header" className="text-center py-16 px-6 md:px-12 bg-[#0B0B0B] border-t border-[#2B2B2B]/40">
      <div className="max-w-3xl mx-auto space-y-3">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.3em] text-white font-medium uppercase">
          THE COLLECTION
        </h2>

        {/* Divider bar */}
        <div className="h-[1px] w-20 bg-[#C9A66B]/60 mx-auto" />

        {/* Subtitle */}
        <p className="font-serif italic text-base md:text-lg tracking-widest text-[#C9A66B] font-light">
          Twelve Stories. Twelve Chapters. One Origin.
        </p>
      </div>
    </div>
  );
};
