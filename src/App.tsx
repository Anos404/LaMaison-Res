import { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, Menu, X, Facebook, Instagram, Twitter, Compass } from 'lucide-react';
import { ActiveTab } from './types';

// Lazy load views for code splitting
const HomeView = lazy(() => import('./components/HomeView'));
const MenuView = lazy(() => import('./components/MenuView'));
const SpecialsView = lazy(() => import('./components/SpecialsView'));
const EventsView = lazy(() => import('./components/EventsView'));
const ContactView = lazy(() => import('./components/ContactView'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-32">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="w-8 h-8 border-3 border-brand-gold/30 border-t-brand-gold rounded-full"
    />
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('menu');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Memoized tab setter
  const handleSetActiveTab = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
  }, []);

  // Memoized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY >= 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to top on tab swap
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Memoized mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Memoized mobile menu close on navigation
  const handleMobileNavClick = useCallback((tab: ActiveTab) => {
    handleSetActiveTab(tab);
    setMobileMenuOpen(false);
  }, [handleSetActiveTab]);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'specials', label: 'Specials' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-vh-100 flex flex-col brand-bg-pattern font-sans antialiased text-brand-dark overflow-x-hidden">
      
      {/* 6.9 Navbar: Frosted Glass and Compressed Height on Scroll past 80px */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-2.5 bg-[#fff8f0]/95 backdrop-blur-md shadow-lg border-b border-brand-gold/10' 
            : 'py-5 bg-[#fff8f0] shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={() => handleSetActiveTab('home')}
            className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-brown tracking-wider hover:text-brand-gold transition-colors flex items-center gap-2 group cursor-pointer"
          >
            <UtensilsCrossed size={22} className="text-brand-gold group-hover:rotate-12 transition-transform duration-200" />
            <span>La Maison</span>
          </button>

          {/* Large Screen Navigation links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleSetActiveTab(link.id)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer relative ${
                  activeTab === link.id 
                    ? 'text-brand-brown' 
                    : 'text-[#5a5a5a] hover:text-brand-brown'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute bottom-1.5 inset-x-5 h-[1.5px] bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Quick Res Tab Access CTA */}
          <div className="hidden lg:block">
            <button 
              onClick={() => handleSetActiveTab('contact')}
              className="bg-brand-brown hover:bg-brand-dark hover:text-brand-gold text-[#faf7f2] font-semibold text-xs tracking-widest uppercase px-6 py-2.5 rounded-full shadow-md transition-all duration-300 ease-out transform hover:-translate-y-0.5"
            >
              Book Seat
            </button>
          </div>

          {/* Mobile Hamburg Trigger toggler */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-brand-brown hover:text-brand-gold p-1 cursor-pointer transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Back Plate Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] bg-[#fff8f0] border-b border-brand-gold/10 shadow-2xl z-40 md:hidden overflow-hidden"
          >
            <div className="py-6 px-4 flex flex-col gap-2 bg-[#fff8f0]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleMobileNavClick(link.id)}
                  className={`w-full text-left py-3 px-5 rounded-xl font-bold uppercase tracking-widest text-xs transition ${
                    activeTab === link.id 
                      ? 'bg-amber-900/5 text-brand-brown border-l-4 border-brand-gold' 
                      : 'text-[#5a5a5a] hover:bg-amber-900/5 hover:text-brand-brown'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-amber-900/5 mt-2">
                <button 
                  onClick={() => handleMobileNavClick('contact')}
                  className="w-full bg-brand-brown text-white py-3.5 rounded-full font-bold uppercase text-xs tracking-widest shadow text-center"
                >
                  Make a Reservation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container Stage Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-32 sm:py-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <Suspense fallback={<LoadingFallback />}>
              {activeTab === 'home' && <HomeView setActiveTab={handleSetActiveTab} />}
              {activeTab === 'menu' && <MenuView />}
              {activeTab === 'specials' && <SpecialsView />}
              {activeTab === 'events' && <EventsView setActiveTab={handleSetActiveTab} />}
              {activeTab === 'contact' && <ContactView />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Cinematic Branded Footer */}
      <footer className="bg-brand-dark text-[#fff8f0]/95 pt-16 pb-12 selection:bg-brand-gold selection:text-brand-dark border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative grid background overlay inside dark footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#2b180d_0%,_#1a1a1a_90%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Logo Section */}
          <div className="space-y-4">
            <h4 className="font-serif text-3xl font-extrabold text-brand-gold tracking-wider">La Maison</h4>
            <div className="h-[1px] w-12 bg-brand-gold/50 mx-auto md:mx-0" />
            <p className="text-[#dfd6cb] text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Inspirational authentic French cuisine sharing Parisian family notes, serving customers across Paris and international guests since 1998.
            </p>
          </div>

          {/* Hours Section */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-white tracking-wide">Hours of Service</h4>
            <div className="h-[1px] w-8 bg-brand-gold/30 mx-auto md:mx-0" />
            <div className="text-xs text-[#dfd6cb] space-y-2 max-w-xs mx-auto md:mx-0 leading-relaxed">
              <p>
                <strong className="text-brand-gold">Monday - Thursday:</strong><br />
                11:30 AM - 10:00 PM
              </p>
              <p>
                <strong className="text-brand-gold">Friday - Saturday:</strong><br />
                11:30 AM - 11:00 PM
              </p>
              <p>
                <strong className="text-brand-gold">Sunday:</strong><br />
                10:30 AM - 9:00 PM (Lounge/Tea Pairing Selection only)
              </p>
            </div>
          </div>

          {/* Socials & Connect Section */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-white tracking-wide">Connect With Us</h4>
            <div className="h-[1px] w-8 bg-brand-gold/30 mx-auto md:mx-0" />
            
            <p className="text-xs text-[#dfd6cb] max-w-sm mx-auto md:mx-0 leading-relaxed">
              <strong>French Culinary District</strong><br />
              123 Gourmet Avenue, Culinary District<br />
              Paris, France
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#facebook" 
                aria-label="La Maison on Facebook"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#dfd6cb] hover:text-brand-gold hover:border-brand-gold transition duration-200"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="#instagram" 
                aria-label="La Maison on Instagram"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#dfd6cb] hover:text-brand-gold hover:border-brand-gold transition duration-200"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="#twitter" 
                aria-label="La Maison on Twitter"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#dfd6cb] hover:text-brand-gold hover:border-brand-gold transition duration-200"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Base Banner */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#b8ab9a]">
          <p>&copy; 2026 La Maison. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-white transition">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-white transition">Terms of Service</button>
            <span>•</span>
            <button className="hover:text-white transition">Allergen Safety</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
