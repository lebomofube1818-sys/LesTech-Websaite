import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-brand-gray/50 border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2 px-2 sm:px-0">
            <Link to="/" className="mb-8 block">
              <Logo iconSize="lg" />
            </Link>
            <p className="text-white/60 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              We help businesses transform ideas into powerful digital solutions that drive growth, efficiency, and success.
              Empowering Lesotho through technology & innovation.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 col-span-1 lg:col-span-2 gap-8 px-2 sm:px-0">
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40 mb-6 sm:mb-8">Navigation</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Services', href: '/services' },
                  { name: 'Digital Impact', href: '/impact' },
                  { name: 'Digital Mission', href: '/mission' },
                  { name: 'One-stop Strategy', href: '/strategy' },
                  { name: 'About Us', href: '/about' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base">
                      {link.name} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40 mb-6 sm:mb-8">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base">Email Us</p>
                    <p className="text-white/60 text-xs sm:text-sm truncate">info@lestech.co.ls</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-white/60 text-xs sm:text-sm">+266 62392626</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm sm:text-base">WhatsApp</p>
                    <p className="text-white/60 text-xs sm:text-sm">+266 62392626</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 LesTech Digital Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
