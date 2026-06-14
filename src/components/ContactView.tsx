import React, { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Calendar, HelpCircle, Send, CheckCircle2, Clock, Map } from 'lucide-react';

const ContactView = memo(function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2 people',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;
    
    setIsLoading(true);
    // Simulate brief network lag
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      date: '',
      guests: '2 people',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-brand-gold font-bold tracking-[0.25em] text-xs uppercase block">Reservations & Location</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-brown font-bold leading-tight">Visit La Maison</h2>
        <div className="w-12 h-1 bg-brand-gold mx-auto rounded" />
        <p className="text-[#666] text-sm italic sm:text-base">
          Secure private culinary seating in our main lounge, or request bespoke event catering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-stretch">
        
        {/* Info detail block */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-white rounded-2xl p-8 border border-amber-900/5 shadow-md flex flex-col justify-between"
        >
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="font-serif text-2xl font-bold text-brand-brown">Location Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/40 flex items-center justify-center shrink-0 text-brand-gold">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-brand-brown leading-none">Our Address</p>
                    <p className="text-xs text-[#555] mt-1">123 Rue de la Paix</p>
                    <p className="text-xs text-[#555]">Paris, France 75002</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/40 flex items-center justify-center shrink-0 text-brand-gold">
                    <Phone size={15} />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-brand-brown leading-none">Direct Desk</p>
                    <p className="text-xs text-[#555] mt-1">
                      <a href="tel:+33145678901" className="hover:text-brand-gold transition-colors font-semibold">
                        +33 1 45 67 89 01
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/40 flex items-center justify-center shrink-0 text-brand-gold">
                    <Mail size={15} />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-brand-brown leading-none">Email Enquiries</p>
                    <p className="text-xs text-[#555] mt-1">
                      <a href="mailto:info@lamaison.com" className="hover:text-brand-gold transition-colors font-semibold">
                        info@lamaison.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-amber-900/5 pt-6 space-y-4">
              <h4 className="font-serif text-lg font-bold text-brand-brown flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" /> Service Hours
              </h4>
              <ul className="space-y-2 text-xs text-[#555] font-medium">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-semibold text-brand-brown">11:30 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="font-semibold text-brand-brown">11:30 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between text-brand-gold font-bold bg-amber-50/50 px-2 py-1 rounded">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map display placeholder */}
          <div className="mt-8 relative h-40 rounded-xl overflow-hidden border border-amber-900/5 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent pointer-events-none z-15" />
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=200&q=80" 
              alt="Paris Map Placeholder"
              className="w-full h-full object-cover saturate-[0.8] brightness-95"
            />
            <div className="absolute inset-x-0 bottom-0 bg-brand-dark/90 backdrop-blur-sm p-3 flex items-center justify-between text-[#fff8f0] z-20">
              <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Map size={12} className="text-brand-gold animate-bounce" /> Map of Rue de la Paix
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[10px] bg-brand-gold text-brand-dark font-extrabold px-3 py-1 rounded-full uppercase"
              >
                Open Nav
              </a>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Reservation Module */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white rounded-2xl p-8 border border-amber-900/5 shadow-md flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="reservation-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">Make a Reservation</h3>
                  <p className="text-xs text-[#666]">Request table seating immediately instantly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-brand-brown">Full Name</label>
                    <input 
                      id="name-input"
                      type="text" 
                      required
                      placeholder="e.g. Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm p-3.5 bg-brand-cream/30 border border-amber-900/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl outline-none transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-brand-brown">Email address</label>
                    <input 
                      id="email-input"
                      type="email" 
                      required
                      placeholder="e.g. jean@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm p-3.5 bg-brand-cream/30 border border-amber-900/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="date-input" className="block text-xs font-bold uppercase tracking-wider text-brand-brown">Preferred Date</label>
                    <input 
                      id="date-input"
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3.5 bg-brand-cream/30 border border-amber-900/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl outline-none transition cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="guests-select" className="block text-xs font-bold uppercase tracking-wider text-brand-brown">Number of Guests</label>
                    <select 
                      id="guests-select"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full text-sm p-3.5 bg-brand-cream/30 border border-amber-900/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl outline-none transition cursor-pointer"
                    >
                      <option>1 person</option>
                      <option>2 people</option>
                      <option>3 people</option>
                      <option>4 people</option>
                      <option>5+ people</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="requests-textarea" className="block text-xs font-bold uppercase tracking-wider text-brand-brown">Special Requests</label>
                  <textarea 
                    id="requests-textarea"
                    rows={3}
                    placeholder="Allergies, birthday celebrations, or window table preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm p-3.5 bg-brand-cream/30 border border-amber-900/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl outline-none transition"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-brown hover:bg-brand-dark text-white hover:text-brand-gold py-4 rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all duration-300 pointer-events-auto"
                >
                  {isLoading ? 'Processing Request...' : (
                    <>
                      Send Table Request <Send size={12} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="reservation-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-16 h-16 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={32} className="animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-brand-brown">Reservation Requested</h3>
                  <p className="text-sm text-[#555] max-w-md mx-auto">
                    Merci, <strong className="text-brand-dark">{formData.name}</strong>! We have received your booking request for <strong className="text-brand-dark">{formData.guests}</strong> on <strong className="text-brand-dark">{formData.date}</strong>. Our host will confirm via email shortly.
                  </p>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={resetForm}
                    className="bg-brand-brown text-white hover:text-brand-gold px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition"
                  >
                    Submit Another Option
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
});

export default ContactView;
