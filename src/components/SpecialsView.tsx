import { motion } from 'motion/react';
import { Award, Zap, Sparkles, ChefHat } from 'lucide-react';
import { memo } from 'react';
import { specialsData } from '../data';

const SpecialsView = memo(function SpecialsView() {
  return (
    <div className="space-y-16">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-brand-gold font-bold tracking-[0.25em] text-xs uppercase block">Limited Creations</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-brown font-bold leading-tight">Daily & Seasonal Specials</h2>
        <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        <p className="text-[#666] italic text-sm sm:text-base">
          Prepared using rare ingredients sourced exclusively from artisanal foragers throughout the French countryside.
        </p>
      </div>

      {/* Daily Features Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {specialsData.dailyFeatures.map((feat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group bg-white rounded-2xl overflow-hidden border border-amber-900/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual element frame */}
            <div className="relative h-64 overflow-hidden select-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              <img 
                src={feat.image} 
                alt={feat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-6 z-20">
                <span className="bg-brand-gold/90 backdrop-blur-md text-brand-dark px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest inline-flex items-center gap-1 shadow-sm">
                  <Zap size={10} className="fill-brand-dark animate-bounce" /> Daily Series
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">{feat.title}</h3>
                  <span className="font-serif text-2xl font-bold text-brand-gold font-light">${feat.price}</span>
                </div>
                <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">{feat.time}</p>
                <p className="text-[#555] text-sm leading-relaxed">{feat.description}</p>
              </div>

              <div className="border-t border-amber-900/5 pt-4 mt-6 text-xs text-[#777] italic flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-brand-gold/80" />
                <span>Requires active table booking. Premium pairings option available.</span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Seasonal Luxuries */}
      <section className="bg-brand-dark rounded-3xl p-8 sm:p-12 text-[#faf7f2] relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a1f0d_0%,_#1a1a1a_70%)] opacity-85" />
        
        {/* Abstract seasonal wallpaper plate overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80')` }}
        />

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-1.5 justify-center">
              <Sparkles className="w-3.5 h-3.5 fill-brand-gold animate-pulseAndSpin" /> Autumn & Winter
            </span>
            <h3 className="font-serif text-3xl font-bold text-white">Seasonal Specialties</h3>
            <div className="w-8 h-[1px] bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            {specialsData.seasonalSpecialties.map((item, id) => (
              <div key={id} className="space-y-3 pb-6 border-b border-white/5 last:border-none md:border-none md:pb-0">
                <div className="flex justify-between items-baseline gap-4">
                  <h4 className="font-serif text-xl font-bold text-[#faf7f2] hover:text-brand-gold transition-colors">
                    {item.name}
                  </h4>
                  <span className="font-serif text-xl font-semibold text-brand-gold">${item.price}</span>
                </div>
                <p className="text-[#c7baa7] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export default SpecialsView;
