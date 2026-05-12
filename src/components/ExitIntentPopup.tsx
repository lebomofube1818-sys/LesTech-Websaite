import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-brand-gray border border-white/10 p-8 md:p-12 rounded-[40px] max-w-xl w-full relative z-10 shadow-2xl"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full blue-gradient/10 text-brand-blue mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-widest">Wait! Don't Leave Empty Handed</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 tracking-tighter leading-tight">
              Download the 2026 <br />
              <span className="text-brand-blue">SaaS Scaling Blueprint.</span>
            </h2>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We’ve mapped out the exact multi-channel strategy we use to take SaaS brands from $1M to $10M ARR. Free for a limited time.
            </p>

            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-blue/50 outline-none"
              />
              <Button size="lg" className="w-full py-6">
                Get Instant Access <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-[10px] text-center text-white/20 mt-6 uppercase tracking-widest font-bold">
              Join 5,000+ founders receiving our weekly growth teardowns.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
