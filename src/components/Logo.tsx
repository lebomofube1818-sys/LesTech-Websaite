import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo = ({ className = '', iconSize = 'xl' }: LogoProps) => {
  const iconSizes = {
    sm: 'h-8 sm:h-10 w-auto',
    md: 'h-12 sm:h-16 w-auto',
    lg: 'h-32 sm:h-48 w-auto',
    xl: 'h-64 sm:h-[400px] lg:h-[600px] w-auto'
  };

  return (
    <motion.div 
      className={`flex items-center group relative ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30, rotateX: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotateY: 0,
        rotateX: 0
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.15, 
        z: 150,
        filter: "brightness(1.2)"
      }}
      style={{ perspective: 2000, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-brand-green/30 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.img 
        src="/logo.png" 
        alt="LesTech Logo" 
        className={`${iconSizes[iconSize]} object-contain relative z-10 drop-shadow-[0_40px_80px_rgba(8,217,114,0.4)] filter contrast-125 brightness-110`}
        whileHover={{
          filter: "contrast(1.6) brightness(1.4) drop-shadow(0 60px 120px rgba(8,217,114,0.7))",
          translateZ: 150,
          scale: 1.1
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 15
        }}
      /> 
    </motion.div>
  );
};
