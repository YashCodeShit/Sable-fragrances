import React, { useEffect, useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (perfumeId: string, quantity: number) => void;
  onRemoveItem: (perfumeId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const [shippingRegion, setShippingRegion] = useState<'ncr' | 'outside'>('ncr');

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculations
  const totalBottles = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cartItems.reduce((sum, item) => sum + (item.perfume.price * item.quantity), 0);
  const shippingCost = shippingRegion === 'ncr' ? 150 : 250;
  const finalTotal = grandTotal + shippingCost;

  // Currency format helper
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Generate WhatsApp message and redirect
  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let itemsText = '';
    cartItems.forEach((item, index) => {
      const perfume = item.perfume;
      const isMultiple = item.quantity > 1;
      const itemSubtotal = perfume.price * item.quantity;
      
      itemsText += `• ${perfume.name}\n`;
      itemsText += `Quantity: ${item.quantity}\n`;
      itemsText += `Price: ${formatCurrency(perfume.price)}${isMultiple ? ' each' : ''}\n`;
      if (isMultiple) {
        itemsText += `Subtotal: ${formatCurrency(itemSubtotal)}\n`;
      }
      if (index < cartItems.length - 1) {
        itemsText += `\n`;
      }
    });

    const message = `Hello SABLE Team,\n\nI would like to place an order for the following fragrances:\n\n${itemsText}\n\n---\n\nTotal Bottles: ${totalBottles}\nDelivery Region: ${shippingRegion === 'ncr' ? 'Within NCR' : 'Outside NCR'}\n\nSubtotal: ${formatCurrency(grandTotal)}\nShipping & Packaging: ${formatCurrency(shippingCost)}\nGrand Total: ${formatCurrency(finalTotal)}\n\nKindly confirm availability and share the payment details.\n\nThank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919711989043&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0B0B0B]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          id="cart-drawer"
          className="w-screen max-w-md bg-[#121212] border-l border-[#2B2B2B] flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#2B2B2B] flex justify-between items-center bg-[#0B0B0B]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C9A66B]" />
              <h2 className="font-serif text-lg tracking-[0.15em] text-white uppercase font-semibold">
                YOUR CART
              </h2>
              <span className="bg-[#2B2B2B] text-white text-[11px] px-2 py-0.5 rounded-full font-sans font-medium">
                {totalBottles}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#B8B8B8] hover:text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="p-4 rounded-full bg-[#0B0B0B] border border-[#2B2B2B]">
                  <ShoppingBag className="w-8 h-8 text-[#8A8A8A] stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-base tracking-wider text-white">YOUR CART IS EMPTY</h3>
                <p className="font-sans text-xs text-[#8A8A8A] max-w-xs leading-relaxed">
                  Explore the SABLE collection and choose fragrances to embark on your olfactory journey.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-semibold tracking-widest text-[#C9A66B] border-b border-[#C9A66B] pb-1 hover:text-white hover:border-white transition-colors uppercase cursor-pointer"
                >
                  Return to Collection
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const perfume = item.perfume;
                const itemTotal = perfume.price * item.quantity;
                return (
                  <div
                    key={perfume.id}
                    className="flex items-center gap-4 bg-[#0B0B0B] border border-[#2B2B2B]/60 p-4 rounded-sm hover:border-[#2B2B2B] transition-colors relative"
                  >
                    {/* Bottle Image */}
                    <div className="w-16 h-20 bg-[#121212] border border-[#2B2B2B]/40 rounded-sm flex items-center justify-center overflow-hidden p-1 flex-shrink-0">
                      <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="h-full object-contain filter brightness-95"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details Column */}
                    <div className="flex-grow min-w-0">
                      <span className="block font-serif text-[9px] tracking-wider text-[#C9A66B] uppercase mb-0.5">
                        {perfume.chapter}
                      </span>
                      <h4 className="font-serif text-sm tracking-wider text-white font-medium truncate">
                        {perfume.name}
                      </h4>
                      <p className="font-mono text-xs text-[#8A8A8A] mt-1">
                        {formatCurrency(perfume.price)} each
                      </p>

                      {/* Quantity Controller & Total */}
                      <div className="flex items-center justify-between mt-3 gap-2">
                        <div className="flex items-center bg-[#121212] border border-[#2B2B2B] rounded-sm px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(perfume.id, item.quantity - 1)}
                            className="text-[#8A8A8A] hover:text-white p-0.5 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-xs font-semibold text-white px-2.5 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(perfume.id, item.quantity + 1)}
                            className="text-[#8A8A8A] hover:text-white p-0.5 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif text-sm text-white font-semibold">
                          {formatCurrency(itemTotal)}
                        </span>
                      </div>
                    </div>

                    {/* Trash/Remove button absolute to the top right of the item card */}
                    <button
                      onClick={() => onRemoveItem(perfume.id)}
                      className="absolute top-3 right-3 text-[#8A8A8A] hover:text-rose-500 p-1.5 rounded-sm hover:bg-[#121212] transition-colors cursor-pointer"
                      aria-label={`Remove ${perfume.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer with checkout details */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#2B2B2B] bg-[#0B0B0B] space-y-5">
              {/* Shipping & Packaging Selector */}
              <div className="space-y-2.5">
                <span className="block font-mono text-[9px] tracking-[0.2em] text-[#6E6E6E] uppercase">
                  SHIPPING & PACKAGING REGION
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setShippingRegion('ncr')}
                    className={`px-3 py-2.5 border rounded-sm text-center font-mono text-[10px] tracking-wider transition-all cursor-pointer ${
                      shippingRegion === 'ncr'
                        ? 'border-[#C9A66B] bg-[#C9A66B]/5 text-[#C9A66B] font-medium'
                        : 'border-[#2B2B2B] bg-[#121212]/50 text-[#8A8A8A] hover:border-[#6E6E6E]'
                    }`}
                  >
                    WITHIN NCR
                    <span className="block text-[9px] mt-0.5 opacity-80">₹150</span>
                  </button>
                  <button
                    onClick={() => setShippingRegion('outside')}
                    className={`px-3 py-2.5 border rounded-sm text-center font-mono text-[10px] tracking-wider transition-all cursor-pointer ${
                      shippingRegion === 'outside'
                        ? 'border-[#C9A66B] bg-[#C9A66B]/5 text-[#C9A66B] font-medium'
                        : 'border-[#2B2B2B] bg-[#121212]/50 text-[#8A8A8A] hover:border-[#6E6E6E]'
                    }`}
                  >
                    OUTSIDE NCR
                    <span className="block text-[9px] mt-0.5 opacity-80">₹250</span>
                  </button>
                </div>
              </div>

              <div className="h-[1px] bg-[#2B2B2B]/40 w-full" />

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-[#8A8A8A] uppercase">
                  <span>Subtotal ({totalBottles} bottles)</span>
                  <span className="text-white">{formatCurrency(grandTotal)}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-[#8A8A8A] uppercase">
                  <span>Shipping & Packaging</span>
                  <span className="text-white">{formatCurrency(shippingCost)}</span>
                </div>
                <div className="pt-2 flex justify-between items-center font-serif text-lg text-white border-t border-[#2B2B2B]/20">
                  <span>Grand Total</span>
                  <span className="text-[#C9A66B] font-semibold">{formatCurrency(finalTotal)}</span>
                </div>
              </div>

              {/* Order on WhatsApp */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-semibold tracking-[0.25em] py-4 rounded-sm shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 uppercase cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                <span>ORDER ON WHATSAPP</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
