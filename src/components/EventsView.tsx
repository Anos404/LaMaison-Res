import { motion } from 'motion/react';
import { Calendar, Compass, ShieldCheck, Check, Sparkles, MailOpen } from 'lucide-react';
import { memo, useCallback } from 'react';
import { eventsData } from '../data';
import { ActiveTab } from '../types';

interface EventsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

const EventsView = memo(function EventsView({ setActiveTab }: EventsViewProps) {
  const handleContactClick = useCallback(() => setActiveTab('contact'), [setActiveTab]);
  return (
    <div className="space-y-16">
      {/* Visual top notes */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-brand-gold font-bold tracking-[0.25em] text-xs uppercase block">Soirées & Convivialité</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-brown font-bold leading-tight">Featured Culinary Events</h2>
        <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        <p className="text-[#666] text-sm italic sm:text-base">
          Gather under the warm bistro lights for evenings curated with custom jazz melodies, vintage crus, and high culinary art.
        </p>
      </div>

      {/* Events loop */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {eventsData.map((evt, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group bg-white rounded-2xl overflow-hidden border border-amber-900/5 shadow-md flex flex-col justify-between"
          >
            {/* Display banner */}
            <div className="relative h-60 overflow-hidden select-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10" />
              <img 
                src={evt.image} 
                alt={evt.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-brand-brown border border-brand-gold/40 text-[#fff8f0] px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  {evt.badge}
                </span>
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <Calendar size={13} />
                  <span>{evt.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-brown group-hover:text-brand-gold transition-colors">
                  {evt.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-900/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#777] font-semibold tracking-wider block">Price</span>
                  <span className="font-serif text-lg font-bold text-brand-brown">${evt.price} <small className="text-xs text-[#555] font-sans font-normal">/ person</small></span>
                </div>
                <button 
                  onClick={handleContactClick}
                  className="bg-brand-brown hover:bg-brand-dark text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-[10px] transition-all"
                >
                  Reserve Spot
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Deluxe Private Events Section */}
      <section className="bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2b180d_0%,_#0d0d0d_80%)] opacity-95" />
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-color-burn opacity-25 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1200&q=80')` }}
        />

        <div className="relative z-10 p-8 sm:p-12 md:p-16 text-[#faf7f2] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest inline-flex items-center gap-1">
              <Sparkles size={10} className="fill-brand-dark animate-spin" /> Custom Banquets
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">Host Your Private Occasion</h3>
            <p className="text-sm text-[#c7baa7] leading-relaxed max-w-2xl">
              From sophisticated salon dinners to pristine high-capacity cocktail soirées, allow our events team to craft your bespoke gathering with fully customizable Michelin-style menus and exquisite French table dressings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                'Bespoke culinary menus custom matching any allergy needs',
                'Advanced integrated digital AV setups',
                'Pristine service with dedicated personal stewards',
                'Flexible table arrangements in private dining salons'
              ].map((feature, id) => (
                <div key={id} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-xs text-[#dfd6cb] leading-tight font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="bg-[#fff8f0] text-brand-dark p-8 rounded-2xl border border-brand-gold/30 shadow-2xl space-y-5">
              <div className="text-center space-y-2">
                <h4 className="font-serif text-xl font-bold text-brand-brown">Contact Our Events Desk</h4>
                <p className="text-xs text-[#666]">Our concierge responds within 12 hours</p>
                <div className="w-8 h-[1px] bg-brand-gold mx-auto mt-2" />
              </div>

              <div className="space-y-4">
                <div className="text-sm text-brand-dark/80 text-center px-2">
                  Please trigger our active contact flow to plan and design menu sheets immediately.
                </div>
                
                <button 
                  onClick={handleContactClick}
                  className="w-full bg-brand-brown hover:bg-brand-dark text-white hover:text-brand-gold py-3.5 rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all duration-300"
                >
                  <MailOpen size={13} /> Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default EventsView;
