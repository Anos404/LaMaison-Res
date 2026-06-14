import React, { memo, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChefHat, Info } from 'lucide-react';
import MenuCard from './MenuCard';
import OrnateDivider from './OrnateDivider';
import { menuCategories } from '../data';

const MenuView = memo(function MenuView() {
  // Memoize filtered categories to prevent recalculation
  const primaryCategories = useMemo(() => 
    menuCategories.filter(
      cat => cat.id === 'appetizers' || cat.id === 'mains' || cat.id === 'desserts'
    ),
    []
  );
  
  const secondaryCategories = useMemo(() => 
    menuCategories.filter(
      cat => cat.id === 'beverages' || cat.id === 'children'
    ),
    []
  );

  return (
    <div className="space-y-12 select-none">
      {/* Immersive Dark Banner Hero */}
      <section className="relative rounded-3xl overflow-hidden py-16 px-8 text-center bg-brand-dark shadow-2xl">
        {/* Subtle decorative radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a1f0d_0%,_#1a1a1a_70%)] opacity-85" />
        
        {/* Parallax background sheet */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80')` }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-gold font-bold tracking-[0.3em] text-xs uppercase block"
          >
            La Carte Gastronomique
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl text-[#fff8f0] font-bold tracking-tight leading-tight"
          >
            Our Menu
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#e8d9c4] text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto"
          >
            Authentic French culinary traditions elevated with contemporary craft and seasonal abundance.
          </motion.p>
        </div>
      </section>

      {/* Culinary Introduction Details as requested verbatim */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center max-w-3xl mx-auto text-[#666] italic text-sm sm:text-[15px] leading-relaxed px-4"
      >
        "All dishes are prepared using the finest seasonal ingredients and traditional French cooking techniques. Our executive chef, Pierre Dubois, brings over 20 years of experience from Michelin-starred restaurants."
      </motion.p>

      {/* Primary Categories Grid (Appetizers, Mains, Desserts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {primaryCategories.map((cat, index) => (
          <MenuCard key={cat.id} category={cat} index={index} />
        ))}
      </div>

      {/* Beautiful Animated Section Divider */}
      <OrnateDivider />

      {/* Secondary Categories Grid (Beverages, Children's) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {secondaryCategories.map((cat, index) => (
          <MenuCard key={cat.id} category={cat} index={index + 3} />
        ))}
      </div>

      {/* Allergens warning & disclaimer retained verbatim */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-2 border-t border-amber-900/5 pt-12 max-w-xl mx-auto px-4"
      >
        <div className="flex items-center justify-center gap-1.5 text-brand-gold text-xs font-bold tracking-wide uppercase">
          <Info size={13} className="text-brand-gold" /> Allergy & Gratuity Notice
        </div>
        <p className="text-sm font-serif italic text-brand-brown">
          Please inform your server of any food allergies or dietary restrictions.
        </p>
        <p className="text-xs text-[#777] leading-normal font-sans pt-1">
          A 20% gratuity will be added to parties of six or more.
        </p>
      </motion.div>
    </div>
  );
});

export default MenuView;
