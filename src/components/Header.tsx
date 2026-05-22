import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) {
      setActiveMobileDropdown(null);
    }
  }, [isOpen]);

  const detailedServices = [
    { name: 'AI Solutions', desc: 'Custom LLMs & Neural Agents' },
    { name: 'Digital Strategy', desc: 'Market Dominance Planning' },
    { name: 'Brand Identity', desc: 'High-Impact Visual Systems' },
    { name: 'App Dev', desc: 'Next-Gen Interactive Builds' },
  ];

  const missionPillars = [
    { name: 'Growth Engineering', desc: 'Scaling technical infrastructure' },
    { name: 'Market Intelligence', desc: 'Data-driven strategy systems' },
    { name: 'Revenue Logic', desc: 'Optimizing digital value chains' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', isDropdown: true, items: detailedServices },
    { name: 'Digital Impact', href: '/impact' },
    { name: 'Digital Mission', href: '/mission', isDropdown: true, items: missionPillars },
    { name: 'One-stop strategy', href: '/strategy' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-2 sm:py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <Link to="/" className="z-[110] pointer-events-auto mt-1">
          <Logo iconSize="lg" className="sm:-ml-4 scale-75 sm:scale-100 origin-top-left drop-shadow-2xl" />
        </Link>
      </div>

      {/* Sticky Navigation Pill */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-[120] pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-end px-6 sm:px-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium bg-white/[0.04] backdrop-blur-[6px] rounded-full px-6 py-2 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] pointer-events-auto hover:bg-white/[0.08] transition-all duration-500">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <div key={link.name} className="relative" ref={activeDropdown === link.name ? dropdownRef : null}>
                    {link.isDropdown ? (
                      <div className="relative group/nav">
                        <button
                          className={`relative px-4 py-2 transition-colors flex items-center gap-1 cursor-pointer outline-none ${
                            isActive ? 'text-brand-green font-bold' : 'text-white/70 hover:text-white'
                          }`}
                          onMouseEnter={() => {
                            setHoveredLink(link.name);
                            setActiveDropdown(link.name);
                          }}
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
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
                          <span className={hoveredLink === link.name ? 'text-black font-bold' : isActive ? 'text-brand-green font-bold' : ''}>
                            {link.name}
                          </span>
                          <motion.div
                            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className={`w-4 h-4 ${hoveredLink === link.name ? 'text-black' : isActive ? 'text-brand-green' : 'text-white/40'}`} />
                          </motion.div>

                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-full right-0 mt-4 w-72 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[150]"
                                onMouseLeave={() => setActiveDropdown(null)}
                              >
                                <div className="grid gap-2">
                                  {link.items?.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={link.href + '#' + item.name.toLowerCase().replace(' ', '-')}
                                      className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/5 transition-all outline-none"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="mt-1">
                                        <CheckCircle2 className="w-4 h-4 text-brand-green opacity-40 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                      <div className="text-left">
                                        <div className="text-white font-bold text-sm tracking-tight">{item.name}</div>
                                        <div className="text-white/40 text-[10px] leading-tight">{item.desc}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                <div className="mt-3 pt-3 border-t border-white/5">
                                  <Link 
                                    to={link.href} 
                                    className="flex items-center justify-between px-3 text-[11px] font-bold text-brand-green hover:translate-x-1 transition-transform"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    VIEW ALL {link.name.toUpperCase()} <ArrowUpRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    ) : (
                      <Link 
                        to={link.href} 
                        className={`relative px-4 py-2 transition-colors ${
                          isActive ? 'text-brand-green font-bold' : 'text-white/70 hover:text-white'
                        }`}
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
                        <span className={hoveredLink === link.name ? 'text-black font-bold' : isActive ? 'text-brand-green' : ''}>
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-[1px] h-6 bg-white/10 mx-2" />
            <Button size="sm" onClick={() => {
              if (window.location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-3 bg-white/[0.04] backdrop-blur-[6px] rounded-full border border-white/10 shadow-xl pointer-events-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden fixed top-20 left-6 right-6 glass brand-border rounded-3xl p-8 z-[150] shadow-2xl backdrop-blur-2xl bg-black/80 pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <div key={link.name} className="flex flex-col gap-2">
                    {link.isDropdown ? (
                      <>
                        <button 
                          className={`flex items-center justify-between text-2xl font-black transition-all tracking-tighter outline-none ${
                            isActive ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                          }`}
                          onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name)}
                        >
                          {link.name}
                          <ChevronDown className={`w-6 h-6 transition-transform ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeMobileDropdown === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-2 pl-4 border-l border-white/10"
                            >
                              {link.items?.map((item) => {
                                const hashVal = '#' + item.name.toLowerCase().replace(' ', '-');
                                const isSubActive = window.location.hash === hashVal;
                                return (
                                  <Link
                                    key={item.name}
                                    to={link.href + hashVal}
                                    className={`text-lg font-bold transition-colors py-1 ${
                                      isSubActive ? 'text-brand-green' : 'text-white/60 hover:text-brand-green'
                                    }`}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveMobileDropdown(null);
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                );
                              })}
                              <Link
                                to={link.href}
                                className="text-sm font-bold text-brand-green hover:underline py-1 mt-1 flex items-center gap-1"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveMobileDropdown(null);
                                }}
                              >
                                VIEW ALL {link.name.toUpperCase()} <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link 
                        to={link.href} 
                        className={`text-2xl font-black transition-all tracking-tighter ${
                          isActive ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="h-[1px] bg-white/10 w-full my-2" />
              <Button className="w-full h-14 font-bold text-lg" onClick={() => {
                setIsOpen(false);
                if (window.location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
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
