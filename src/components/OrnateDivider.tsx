import { useState, useRef, useEffect, memo } from 'react';

const OrnateDivider = memo(function OrnateDivider() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, once: true } as any
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center gap-6 my-16 w-full max-w-4xl mx-auto overflow-hidden px-4"
    >
      {/* Scroll-triggered slide outward lines */}
      <div 
        className="h-[1px] bg-gradient-to-r from-transparent to-brand-gold transition-all duration-1000 ease-out origin-right"
        style={{ width: isVisible ? '38%' : '0%' }}
      />
      
      {/* Centered Golden Fleur des lices / Diamond ornament */}
      <div 
        className="flex items-center justify-center text-brand-gold text-lg transition-transform duration-1000 ease-out"
        style={{ transform: `scale(${isVisible ? 1 : 0.4}) rotate(${isVisible ? 45 : 0}deg)` }}
      >
        <div className="w-3.5 h-3.5 border border-brand-gold bg-transparent relative flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-brand-gold" />
        </div>
      </div>

      <div 
        className="h-[1px] bg-gradient-to-l from-transparent to-brand-gold transition-all duration-1000 ease-out origin-left"
        style={{ width: isVisible ? '38%' : '0%' }}
      />
    </div>
  );
});

export default OrnateDivider;
