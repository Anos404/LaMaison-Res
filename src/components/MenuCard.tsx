import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Flame, HelpCircle, Sparkles, Award } from 'lucide-react';
import { MenuCategory } from '../types';

interface MenuCardProps {
  category: MenuCategory;
  index: number;
}

function MenuCard({ category, index }: MenuCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0, glossX: 50, glossY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tiltTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if touch device once on mount
  useEffect(() => {
    const checkTouch = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    const resizeListener = () => checkTouch();
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  // Optimized throttled mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    
    // Throttle updates using requestAnimationFrame
    if (tiltTimeoutRef.current) return;
    
    tiltTimeoutRef.current = setTimeout(() => {
      const item = cardRef.current;
      if (!item) return;
      
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const glossX = ((e.clientX - rect.left) / rect.width) * 100;
      const glossY = ((e.clientY - rect.top) / rect.height) * 100;

      setCoords({
        rotateY: x * 10,
        rotateX: -y * 10,
        shadowX: -x * 15,
        shadowY: -y * 15,
        glossX,
        glossY
      });
      
      tiltTimeoutRef.current = null;
    }, 16); // ~60fps throttle
  }, [isMobile]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0, glossX: 50, glossY: 50 });
    if (tiltTimeoutRef.current) {
      clearTimeout(tiltTimeoutRef.current);
      tiltTimeoutRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (tiltTimeoutRef.current) {
        clearTimeout(tiltTimeoutRef.current);
      }
    };
  }, []);

  // 3D CSS inline properties
  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) translateZ(${isHovered ? '8px' : '0px'})`,
    boxShadow: isHovered 
      ? `${coords.shadowX}px ${coords.shadowY}px 35px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(139, 69, 19, 0.05)`
      : '0 5px 15px rgba(0, 0, 0, 0.05)',
  };

  const glossStyle = {
    background: `radial-gradient(circle 120px at ${coords.glossX}% ${coords.glossY}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 80%)`,
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={tiltStyle}
      className="custom-perspective-card bg-white rounded-2xl border border-amber-900/5 overflow-hidden flex flex-col h-full transform-gpu select-none relative"
      id={`category-card-${category.id}`}
    >
      {/* Immersive radial reflection shine simulation overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-0 transition-opacity duration-300" 
        style={{ ...glossStyle, opacity: isHovered ? 1 : 0 }}
      />

      {/* Deluxe Header */}
      <div className="bg-brand-brown py-5 px-6 text-center select-none relative overflow-hidden">
        {/* Decorative thin Parisian lines */}
        <div className="absolute top-3 left-6 right-6 bottom-3 border border-brand-gold/25 pointer-events-none rounded" />
        
        <h3 className="font-serif text-2xl font-semibold tracking-wide text-[#faf7f2] flex items-center justify-center gap-3 relative z-10">
          <span className="text-brand-gold font-light animate-pulse">✦</span>
          {category.title}
          <span className="text-brand-gold font-light animate-pulse">✦</span>
        </h3>
      </div>

      <div className="p-6 bg-brand-warm-white/40 flex-grow relative">
        <ul className="space-y-6">
          {category.items.map((item, id) => (
            <li 
              key={id} 
              className="group list-none relative pb-5 border-b border-amber-900/5 last:border-none last:pb-0"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-grow">
                  <h4 className="font-serif text-[17px] font-bold text-brand-brown flex items-center flex-wrap gap-2 group-hover:text-amber-900 transition-colors duration-200">
                    <span>{item.name}</span>
                    
                    {/* Special Gold Chef Recommendation Badge */}
                    {item.isChefRecommendation && (
                      <span className="chef-badge-shimmer inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-dark px-3 py-0.5 rounded-full shadow-inner relative overflow-hidden text-white" aria-label="Chef's Recommendation">
                        <Sparkles size={8} className="animate-spin text-white" /> Recommended
                      </span>
                    )}

                    {/* Dietary Warning Tooltips */}
                    <div className="flex gap-1.5 items-center">
                      {item.isVegetarian && (
                        <div className="relative group inline-block drop-shadow-sm select-none">
                          <span className="w-5 h-5 bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 rounded-full flex items-center justify-center text-[10px] font-bold cursor-help transition-colors duration-150">
                            V
                          </span>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-brand-dark/95 backdrop-blur-md text-[#fff8f0] text-xs font-medium rounded-md opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl border border-white/5 z-50">
                            Vegetarian Selection
                          </span>
                        </div>
                      )}

                      {item.isGlutenFree && (
                        <div className="relative group inline-block drop-shadow-sm select-none">
                          <span className="w-5 h-5 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center text-[10px] font-bold cursor-help transition-colors duration-150">
                            GF
                          </span>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-brand-dark/95 backdrop-blur-md text-[#fff8f0] text-xs font-medium rounded-md opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl border border-white/5 z-50">
                            Gluten-Free Choice
                          </span>
                        </div>
                      )}

                      {item.isSpicy && (
                        <div className="relative group inline-block drop-shadow-sm select-none">
                          <span className="w-5 h-5 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-full flex items-center justify-center text-[10px] font-bold cursor-help transition-colors duration-150">
                            🌶️
                          </span>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-brand-dark/95 backdrop-blur-md text-[#fff8f0] text-xs font-medium rounded-md opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl border border-white/5 z-50">
                            Spicy Dish
                          </span>
                        </div>
                      )}
                    </div>
                  </h4>
                  <p className="mt-1 text-sm text-[#555] leading-relaxed select-none">
                    {item.description}
                  </p>
                </div>
                
                {/* Micro Animated Price Tag */}
                <span className="font-serif font-bold text-brand-brown/95 text-lg whitespace-nowrap select-none origin-right group-hover:scale-115 group-hover:text-brand-gold transition-all duration-350 ease-out">
                  {item.price === 'Varies' ? 'Varies' : `$${item.price}`}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Export memoized component to prevent unnecessary re-renders
export default memo(MenuCard);
