import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SableEditionsSection } from './components/SableEditionsSection';
import { DiscoverySetCard } from './components/DiscoverySetCard';
import { CollectionHeader } from './components/CollectionHeader';
import { ProductCard } from './components/ProductCard';
import { ProductPopup } from './components/ProductPopup';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { PERFUMES_DATA, SABLE_EDITIONS_DATA, DISCOVERY_SETS_DATA } from './data';
import { Perfume, CartItem } from './types';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function App() {
  // State managers
  const [showPreloader, setShowPreloader] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from local storage if available
  useEffect(() => {
    const savedCart = localStorage.getItem('sable_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart items from local storage', e);
      }
    }
  }, []);

  // Sync cart to local storage
  const saveCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('sable_cart', JSON.stringify(newCart));
  };

  // Add perfume to cart (either from popup or directly from card)
  const handleAddToCart = (perfume: Perfume, quantity: number) => {
    const existingIndex = cartItems.findIndex((item) => item.perfume.id === perfume.id);
    const updatedCart = [...cartItems];

    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += quantity;
    } else {
      updatedCart.push({ perfume, quantity });
    }

    saveCart(updatedCart);
    triggerToast(`Added ${quantity}x ${perfume.name}${perfume.size ? ` (${perfume.size})` : ''} to cart`);
  };

  // Directly add 1 item from card
  const handleDirectAdd = (perfume: Perfume) => {
    handleAddToCart(perfume, 1);
  };

  // Directly decrease 1 item from card
  const handleDirectDecrease = (perfume: Perfume) => {
    const existing = cartItems.find((item) => item.perfume.id === perfume.id);
    if (existing) {
      handleUpdateQuantity(perfume.id, existing.quantity - 1);
    }
  };

  // Remove perfume from cart
  const handleRemoveItem = (perfumeId: string) => {
    const updatedCart = cartItems.filter((item) => item.perfume.id !== perfumeId);
    saveCart(updatedCart);
  };

  // Update item quantity in drawer
  const handleUpdateQuantity = (perfumeId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(perfumeId);
      return;
    }
    const updatedCart = cartItems.map((item) => {
      if (item.perfume.id === perfumeId) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(updatedCart);
  };

  // Trigger floating micro-interaction toast
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Compute total bottles count
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen relative flex flex-col justify-between selection:bg-[#C9A66B]/30 selection:text-[#C9A66B]">
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Premium Fixed Header */}
      <Navbar cartCount={totalCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Cinematic Hero block (Atmosphere + coordinates + philosophy) */}
        <Hero />

        {/* Feature Cards Section (Born in Kashmir, etc.) */}
        <Features />

        {/* 1. SABLE EDITIONS: Deodar, Nubra, Lidder */}
        <SableEditionsSection
          editions={SABLE_EDITIONS_DATA}
          cartItems={cartItems}
          onCardClick={(perfume) => setSelectedPerfume(perfume)}
          onAddToCart={(perfume) => handleDirectAdd(perfume)}
          onDecrease={(perfume) => handleDirectDecrease(perfume)}
        />

        {/* 2. Collection Section with Discovery Set Card + Fragrance Catalogue */}
        <div id="collection-anchor" className="bg-[#0B0B0B] pb-24 border-b border-[#2B2B2B]/40">
          <CollectionHeader />

          {/* Perfume Collection Grid */}
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Creative Discovery Set Card with Choose Option Features */}
              <DiscoverySetCard
                discoverySets={DISCOVERY_SETS_DATA}
                cartItems={cartItems}
                onCardClick={(perfume) => setSelectedPerfume(perfume)}
                onAddToCart={(perfume) => handleDirectAdd(perfume)}
                onDecrease={(perfume) => handleDirectDecrease(perfume)}
              />

              {/* Fragrance Collection Cards */}
              {PERFUMES_DATA.map((perfume) => {
                return (
                  <ProductCard
                    key={perfume.id}
                    perfume={perfume}
                    cartItems={cartItems}
                    onCardClick={(activePerfume) => setSelectedPerfume(activePerfume)}
                    onAddToCart={(activePerfume) => handleDirectAdd(activePerfume)}
                    onDecrease={(activePerfume) => handleDirectDecrease(activePerfume)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Premium Footer with Somehow Credits */}
      <Footer instagramUrl="https://www.instagram.com/sable.fragrances" />

      {/* Product Detail Modal */}
      {selectedPerfume && (
        <ProductPopup
          perfume={selectedPerfume}
          onClose={() => setSelectedPerfume(null)}
        />
      )}

      {/* Sliding Right Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Luxury Float Micro-Notification Toast */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#121212] border border-[#C9A66B]/50 px-5 py-3 rounded-sm shadow-xl animate-bounce-short"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span className="font-sans text-xs tracking-wider text-white font-medium">
            {toastMessage}
          </span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-sans text-[10px] font-bold text-[#C9A66B] hover:text-white transition-colors tracking-widest uppercase flex items-center gap-1 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>VIEW CART</span>
          </button>
        </div>
      )}

      {/* Ambient glowing dust overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_50%_120%,rgba(201,166,107,0.03),transparent_50%)]" />
    </div>
  );
}
