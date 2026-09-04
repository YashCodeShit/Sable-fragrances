import React from 'react';
import { Perfume, CartItem } from '../types';
import { ProductCard } from './ProductCard';

interface SableEditionsSectionProps {
  editions: Perfume[];
  cartItems: CartItem[];
  onCardClick: (perfume: Perfume) => void;
  onAddToCart: (perfume: Perfume) => void;
  onDecrease: (perfume: Perfume) => void;
}

export const SableEditionsSection: React.FC<SableEditionsSectionProps> = ({
  editions,
  cartItems,
  onCardClick,
  onAddToCart,
  onDecrease
}) => {
  return (
    <section id="sable-editions-section" className="bg-[#0B0B0B] pt-20 pb-16 border-b border-[#2B2B2B]/40">
      {/* Section Header */}
      <div className="text-center pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#C9A66B] uppercase block">
            THE NEW SIGNATURE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.3em] text-white font-medium uppercase">
            SABLE EDITIONS
          </h2>
          <div className="h-[1px] w-20 bg-[#C9A66B]/60 mx-auto" />
          <p className="font-serif italic text-base md:text-lg tracking-widest text-[#C9A66B] font-light">
            Three Standalone Masterpieces. Enduring Mountain Atmosphere.
          </p>
        </div>
      </div>

      {/* Editions Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {editions.map((perfume) => {
            const quantityInCart = cartItems.find((item) => item.perfume.id === perfume.id)?.quantity || 0;
            return (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                quantityInCart={quantityInCart}
                onCardClick={() => onCardClick(perfume)}
                onAddToCart={() => onAddToCart(perfume)}
                onDecrease={() => onDecrease(perfume)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
