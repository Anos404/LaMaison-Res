import { motion } from 'motion/react';
import { Clock, Calendar, Utensils, Award, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { memo, useCallback } from 'react';
import { ActiveTab } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

const HomeView = memo(function HomeView({ setActiveTab }: HomeViewProps) {
  const handleMenuClick = useCallback(() => setActiveTab('menu'), [setActiveTab]);
  const handleContactClick = useCallback(() => setActiveTab('contact'), [setActiveTab]);
    <div className="space-y-16">
      {/* Cinematic Hero Box */}
      <section className="relative rounded-3xl overflow-hidden h-[540px] flex items-center justify-center p-8 bg-brand-dark shadow-2xl">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a1f0d_0%,_#1a1a1a_70%)] opacity-80" />
        
        {/* Real photo back plate overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')` }}
        />

        <div className="relative z-10 text-center space-y-6 max-w-3xl px-4">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-gold font-semibold tracking-[0.3em] text-xs uppercase block"
          >
            Est. 1998 — Paris
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl text-[#fff8f0] font-bold tracking-tight leading-tight"
          >
            Authentic French Cuisine
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#e8d9c4] text-lg sm:text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            Experience Mediterranean flavors with a contemporary twist on contemporary table sets.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={handleMenuClick}
              className="bg-brand-gold hover:bg-[#e6d7b8] text-brand-dark px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Menu
            </button>
            <button 
              onClick={handleContactClick}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs shadow-md transition-all duration-300"
            >
              Book Table
            </button>
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
        {/* Opening Hours card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-white rounded-2xl p-8 border border-amber-900/5 shadow-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 text-brand-brown mb-6">
              <Clock className="w-6 h-6 text-brand-gold" />
              <h3 className="font-serif text-2xl font-bold">Opening Hours</h3>
            </div>
            
            <div className="divide-y divide-amber-900/5 space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-brand-brown">Monday - Thursday</span>
                <span className="text-[#555] text-sm">11:30 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-bold text-brand-brown">Friday - Saturday</span>
                <span className="text-[#555] text-sm">11:30 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-bold text-brand-brown">Sunday</span>
                <span className="text-brand-brown font-semibold bg-amber-50 px-3 py-1 rounded text-xs">Closed</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-amber-900/5 pt-6 text-sm text-[#777] italic flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Join us during weekday afternoons for special Parisian tea pairings.</span>
          </div>
        </motion.div>

        {/* Chef Specials Teaser */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-brand-dark rounded-2xl overflow-hidden shadow-xl min-h-[380px] relative flex flex-col justify-end p-8"
        >
          {/*********** Background graphic overlay ***********/}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 hover:scale-105 transition-transform duration-[4000ms]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80')` }}
          />

          <div className="relative z-20 space-y-4">
            <div className="bg-brand-gold text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 animate-bounce" /> Seasonal Special
            </div>
            
            <h3 className="font-serif text-3xl font-bold text-white">Bouillabaisse Provençale</h3>
            
            <p className="text-[#e2d6c5] max-w-md text-sm leading-relaxed">
              Traditional rich Provençal fish stew brewed with market-fresh sea delicacies, simmered with rouille and golden saffron broth croutons.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="bg-brand-gold text-brand-dark text-lg font-bold px-4 py-1.5 rounded-md">$34.99</span>
              <button 
                onClick={handleMenuClick}
                className="text-white hover:text-brand-gold text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                View Full Selection <span>→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Deluxe Chef's Bio */}
      <section className="bg-brand-warm-white/40 border border-amber-900/5 rounded-3xl p-8 sm:p-12 shadow-inner">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative shrink-0 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-brand-gold/60 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&h=400&q=80" 
              alt="Executive Chef Pierre Dubois"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">La Table de Dubois</h3>
            <p className="text-brand-brown/80 text-sm tracking-wider uppercase font-semibold">Under Executive Chef Pierre Dubois</p>
            <p className="text-[#555] leading-relaxed text-sm sm:text-base max-w-2xl">
              "We cook to convey feelings. To serve is to curate a memory. Every seasonal item on the plate is an expression of our rich inheritance across the Mediterranean coastlines, brought straight into a contemporary fine Parisian lounge."
            </p>
            <div className="pt-2">
              <span className="font-serif text-brand-gold italic text-lg">— Pierre Dubois</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default HomeView;
