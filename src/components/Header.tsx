import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Home } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Impact', href: '/impact' },
    { name: 'Digital Mission', href: '/mission' },
    { name: 'One-stop strategy', href: '/strategy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-4 sm:px-6 py-2 sm:py-3 border-white/10 shadow-2xl">
        <Link to="/" className="flex items-center gap-2 group z-[110]">
          <div className="w-8 h-8 sm:w-10 h-10 rounded-lg brand-gradient flex items-center justify-center group-hover:rotate-12 transition-transform brand-glow">
            <Home className="w-5 h-5 sm:w-6 h-6 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tighter text-white group-hover:text-brand-green transition-colors">LESTECH</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 mr-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="relative px-4 py-2 text-white/70 hover:text-white transition-colors"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-brand-green rounded-full -z-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className={hoveredLink === link.name ? 'text-black font-bold' : ''}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
          <Button size="sm" onClick={() => {
            if (window.location.pathname === '/') {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/#contact';
            }
          }}>
            Book a Call <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-20 left-6 right-6 glass brand-border rounded-3xl p-8 z-[120] shadow-2xl backdrop-blur-2xl bg-black/80"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-2xl font-black text-white/90 hover:text-brand-green transition-all tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-white/10 w-full my-2" />
              <Button className="w-full h-14 font-bold text-lg" onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
