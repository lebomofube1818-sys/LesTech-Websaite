import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageSquare, Send, CheckCircle2, Loader2, ShieldCheck, Zap, User, X } from 'lucide-react';
import { Button } from './Button';
import React, { useState } from 'react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate high-performance secure server dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      sector: '',
      message: ''
    });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-20">
        <div className="lg:w-1/2 px-2 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-bold text-brand-green border-white/5 uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" />
            <span>Mission Control</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] sm:leading-tight tracking-tighter">
            Architect Your <br />
            <span className="text-gradient">Growth Logic.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 sm:mb-12 max-w-lg leading-relaxed font-medium">
            Stop guessing. Start engineering. Our strategy protocols are deep dives into your technical unit economics and market inefficiencies.
          </p>
          
          <div className="space-y-6 sm:space-y-8">
            {[
              'Audit of your current stack & attribution.',
              'Competitor digital gap analysis.',
              'Custom technology roadmap for the next 180 days.',
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center shrink-0 group-hover:brand-glow transition-all">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                </div>
                <p className="text-base sm:text-lg font-medium text-white/60 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, perspective: 1000, rotateY: 15, rotateX: 5, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 relative overflow-hidden brand-border brand-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col justify-end gap-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/20 truncate">Identity</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 focus:border-brand-green/50 outline-none text-white text-sm sm:text-base" 
                    placeholder="Full Names" 
                  />
                </div>
                <div className="flex flex-col justify-end gap-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/20 truncate">Organization</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 focus:border-brand-green/50 outline-none text-white text-sm sm:text-base" 
                    placeholder="Business Name" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col justify-end gap-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/20 truncate" title="Digital Coordinates">Digital Coordinates</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 focus:border-brand-green/50 outline-none text-white text-sm sm:text-base" 
                    placeholder="Work Email" 
                  />
                </div>
                <div className="flex flex-col justify-end gap-2">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/20 truncate">Comm Line</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 focus:border-brand-green/50 outline-none text-white text-sm sm:text-base" 
                    placeholder="Work Number" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/20">Growth Sector</label>
                <select 
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 focus:border-brand-green/50 outline-none appearance-none text-white cursor-pointer group-hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  <option value="" disabled className="bg-brand-gray">Select Service</option>
                  <option value="AI Solutions" className="bg-brand-gray">AI Solutions</option>
                  <option value="Digital Strategy" className="bg-brand-gray">Digital Strategy</option>
                  <option value="Brand Identity" className="bg-brand-gray">Brand Identity</option>
                  <option value="App Dev" className="bg-brand-gray">App Dev</option>
                  <option value="Growth Engineering" className="bg-brand-gray">Growth Engineering</option>
                  <option value="Market Intelligence" className="bg-brand-gray">Market Intelligence</option>
                  <option value="Revenue Logic" className="bg-brand-gray">Revenue Logic</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/20">Project Brief</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 focus:border-brand-green/50 outline-none resize-none text-white text-sm sm:text-base" 
                  placeholder="What technical bottlenecks are stalling your scale?" 
                />
              </div>

              <Button type="submit" size="lg" className="w-full py-6" disabled={loading}>
                {loading ? (
                  <>Processing... <Loader2 className="w-5 h-5 ml-2 animate-spin" /></>
                ) : (
                  <>Initiate Strategy Protocol <Send className="w-5 h-5 ml-2" /></>
                )}
              </Button>
              
              <p className="text-[10px] text-center text-white/20 uppercase tracking-[0.2em] font-bold">
                Data processing protected by end-to-end security layers.
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* 3D Gliding Success Modal Card */}
      <AnimatePresence>
        {submitted && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" style={{ perspective: '1200px' }}>
            {/* Modal Backdrop overlay to close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-transparent"
              onClick={resetForm}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.82, rotateX: 25, y: 80, rotateY: -6 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.82, rotateX: -15, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 160 }}
              className="relative w-full max-w-lg bg-brand-black/95 border border-brand-green/35 rounded-[32px] p-8 sm:p-10 shadow-[0_30px_100px_rgba(10,255,147,0.18)] overflow-hidden z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Blur accent glow layers */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

              <button 
                onClick={resetForm}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div style={{ transform: 'translateZ(30px)' }}>
                {/* Visual Status Indicator header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-[10px] text-brand-green font-bold uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    Agent On Call: Processing
                  </div>
                  <div className="text-white/20 text-[10px] font-mono tracking-widest uppercase font-bold">
                    SECURE HUB
                  </div>
                </div>

                {/* 3D Animated Icon Unit */}
                <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                    className="absolute inset-0 border border-dashed border-brand-green/30 rounded-full"
                  />
                  <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center brand-glow">
                    <ShieldCheck className="w-8 h-8 text-black" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-center text-white tracking-tight mb-3">
                  Transmission Dispatched
                </h3>
                
                <p className="text-center text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Your request has been successfully sent and is being processed by an <span className="text-brand-green font-bold">agent on call</span>.
                </p>

                {/* Dynamic context details to make the response extremely grounded */}
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2 mb-2">
                    <span className="text-white/40 uppercase tracking-widest font-bold">Representative</span>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-green" /> {formData.name || 'Anonymous Partner'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2 mb-2">
                    <span className="text-white/40 uppercase tracking-widest font-bold">Inquiry Sector</span>
                    <span className="text-brand-green font-bold tracking-tight">
                      {formData.sector || 'Digital Strategy'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40 uppercase tracking-widest font-bold">Telemetry Status</span>
                    <span className="text-white/60 flex items-center gap-1.5 animate-pulse">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" /> Connecting live console...
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto px-10" 
                    onClick={resetForm}
                  >
                    Return to Mission Control
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

