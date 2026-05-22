import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Cpu, RefreshCw, Layers } from 'lucide-react';

interface LoaderScreenProps {
  onComplete: () => void;
}

export const LoaderScreen = ({ onComplete }: LoaderScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Core Systems...');
  const [isFinishing, setIsFinishing] = useState(false);

  // Simulated high-fidelity progress loader
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Varying increment steps for natural, techy charging feel
      const increment = Math.floor(Math.random() * 8) + 4;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      // Dynamic text protocol messages
      if (currentProgress < 25) {
        setStatusText('Configuring Neural Engine...');
      } else if (currentProgress < 50) {
        setStatusText('Establishing Secure Virtual Gateway...');
      } else if (currentProgress < 75) {
        setStatusText('Loading Vector Matrices & Assets...');
      } else if (currentProgress < 95) {
        setStatusText('Calibrating 3D Viewport Systems...');
      } else {
        setStatusText('Mission Protocol Fully Operational.');
      }

      if (currentProgress === 100) {
        clearInterval(interval);
        // Add a slight pause at 100% for readability before launching transition
        setTimeout(() => {
          setIsFinishing(true);
        }, 550);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-brand-black flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFinishing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
        onAnimationComplete={(definition) => {
          // Trigger the page unlock when the fade out completes
          if (isFinishing && (definition as any).opacity === 0) {
            onComplete();
          }
        }}
        style={{ perspective: '1500px' }}
      >
        {/* Dynamic Space Background Grid behind everything */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Cinematic outer glowing circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: isFinishing ? 0 : [0.2, 0.4, 0.2], 
            scale: isFinishing ? 1.5 : 1,
          }}
          transition={{
            opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            scale: { duration: 1.2, ease: [0.85, 0, 0.15, 1] }
          }}
          className="absolute w-[600px] h-[600px] rounded-full border border-brand-green/5 pointer-events-none"
        />

        <div className="relative flex flex-col items-center justify-center p-6 w-full max-w-lg z-10" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Futuristic 3D Logo Unit */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center mb-8" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Outer Circular Tech Ring Progress */}
            <svg 
              className="absolute w-full h-full transform -rotate-90 pointer-events-none" 
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0066FF" />
                  <stop offset="100%" stopColor="#33FF00" />
                </linearGradient>
              </defs>
              {/* Outer static tracked ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                className="stroke-white/[0.04]"
                strokeWidth="0.75"
                fill="transparent"
              />
              {/* Loading progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                stroke="url(#loader-gradient)"
                strokeWidth="1.25"
                fill="transparent"
                strokeDasharray="289"
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: 289 - (289 * progress) / 100,
                  opacity: isFinishing ? 0 : 1
                }}
                transition={{
                  strokeDashoffset: { type: 'tween', ease: 'easeOut', duration: 0.15 },
                  opacity: { duration: 0.5 }
                }}
              />
            </svg>

            {/* Glowing ring aura */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(51,255,0,0.1)',
                  '0 0 40px rgba(0,102,255,0.2)',
                  '0 0 20px rgba(51,255,0,0.1)'
                ],
                rotate: 360
              }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute w-[86%] h-[86%] rounded-full border border-dashed border-white/5"
            />

            {/* Core 3D logo with satisfying entry and camera exit zoom */}
            <motion.div
              className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center hover:brightness-125 transition-all"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, scale: 0.35, rotateY: -110, z: -200 }}
              animate={isFinishing ? {
                scale: 22,
                rotateY: 25,
                rotateX: -15,
                opacity: [1, 0.8, 0],
                z: 1100
              } : {
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                z: 0
              }}
              transition={isFinishing ? {
                duration: 1.1,
                ease: [0.76, 0, 0.18, 1], // Cinematic cubic-bezier
              } : {
                type: 'spring',
                stiffness: 70,
                damping: 14,
                delay: 0.2
              }}
            >
              {/* Infinite dynamic pulse/ambient glow backplane */}
              <motion.div 
                className="absolute inset-0 bg-brand-green/18 blur-[60px] rounded-full"
                animate={{ scale: [0.85, 1.15, 0.85] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              />

              <img 
                src="/logo.png" 
                alt="LesTech Logo" 
                className="w-full h-full object-contain relative z-10 filter brightness-110 drop-shadow-[0_20px_40px_rgba(51,255,0,0.3)]"
              />
            </motion.div>
          </div>

          {/* Core Status & Live Telemetry Elements below Logo */}
          <motion.div 
            className="w-full flex flex-col items-center"
            animate={{ opacity: isFinishing ? 0 : 1, y: isFinishing ? 40 : 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Realtime progress tracker percentage */}
            <div className="flex items-baseline gap-1 font-display tracking-normal font-black text-white relative">
              <span className="text-5xl sm:text-6xl text-gradient relative">
                {String(progress).padStart(3, '0')}
              </span>
              <span className="text-xs sm:text-sm font-bold text-brand-green tracking-widest font-mono">%</span>
            </div>

            {/* Custom interactive progress tracking line */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full my-4 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-brand-blue to-brand-green"
                animate={{ width: `${progress}%` }}
                transition={{ type: 'tween', ease: 'easeOut' }}
              />
            </div>

            {/* Dynamic Status Title */}
            <p className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-center font-display h-5">
              {statusText}
            </p>

            {/* Simulated Live telemetry credentials */}
            <div className="flex items-center gap-6 mt-12 text-[9px] font-mono font-bold tracking-widest text-white/20 uppercase">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-brand-green" /> E2EE SYSTEM</span>
              <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-brand-blue" /> CORE V2.05</span>
              <span className="flex items-center gap-1 flex-shrink-0"><Layers className="w-3 h-3 text-yellow-500 animate-pulse" /> ONLINE</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
