import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[95vh] flex items-center justify-center pt-32 sm:pt-64 lg:pt-80 px-6 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
          alt="Engineering Background"
          className="w-full h-full object-cover opacity-80 brightness-75 select-none pointer-events-none scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black" />
      </div>

      {/* Background Decor */}
      <div className="hidden sm:block absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[140px] animate-pulse z-1" />
      <div className="hidden sm:block absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-brand-green/10 rounded-full blur-[140px] z-1" />
      
      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10" style={{ perspective: '2000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8 leading-[1] sm:leading-[0.9] tracking-tighter text-gradient relative" style={{ transform: 'translateZ(50px)' }}>
            <span className="absolute inset-0 blur-[40px] sm:blur-[60px] bg-brand-green/20 -z-1" />
            ONE STOP. <br /> 
            ENDLESS SOLUTIONS.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg px-4" style={{ transform: 'translateZ(30px)' }}>
            We help businesses transform ideas into powerful <span className="text-brand-green">digital solutions</span> that drive growth, efficiency, and success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-6">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                translateZ: 20,
                boxShadow: "0 20px 40px rgba(26, 230, 128, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-10 shadow-xl"
                onClick={() => {
                  if (window.location.pathname === '/') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Initiate Growth <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 5, 0],
                rotateX: [0, -1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5 
              }}
              whileHover={{ 
                scale: 1.05,
                translateZ: 50,
                rotateX: -5,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0, 112, 243, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full sm:w-auto mt-2 sm:mt-0"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-10 backdrop-blur-sm transition-all hover:border-brand-green/50 shadow-xl relative z-10"
                onClick={() => navigate('/services')}
                style={{ transform: 'translateZ(20px)' }}
              >
                Explore Our Tech
              </Button>
              <div className="absolute inset-0 bg-brand-blue/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <div className="flex justify-center gap-8 text-[10px] sm:text-xs font-black tracking-[0.4em] text-white/30 uppercase">
            <span>Build</span>
            <span className="text-brand-green">•</span>
            <span>Design</span>
            <span className="text-brand-blue">•</span>
            <span>Automate</span>
            <span className="text-brand-green">•</span>
            <span>Innovate</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
