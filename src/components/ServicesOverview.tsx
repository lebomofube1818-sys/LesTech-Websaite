import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Cpu, 
  Brain, 
  CreditCard, 
  ShoppingCart, 
  Cloud, 
  ShieldCheck, 
  ArrowRight,
  Globe,
  X,
  CheckCircle2
} from 'lucide-react';
import { Button } from './Button';
import { useState } from 'react';

const services = [
  {
    title: 'Website & App Development',
    desc: 'Modern, responsive websites, custom web applications, and mobile apps tailored to your business needs.',
    icon: Code2,
    details: [
      'Custom UI/UX Design',
      'React & Next.js Performance',
      'Cross-Platform Mobile Apps',
      'SEO-Optimized Architecture'
    ]
  },
  {
    title: 'Branding & Digital Marketing',
    desc: 'Logo & brand identity design, social media management, and digital campaigns that grow your brand.',
    icon: Palette,
    details: [
      'Brand Identity Systems',
      'Content Strategy',
      'PPC & Ad Optimization',
      'Social Media Growth'
    ]
  },
  {
    title: 'API & FinTech Solutions',
    desc: 'Custom API development, third-party integrations, and secure, scalable & reliable digital systems.',
    icon: Cpu,
    details: [
      'Banking API Integration',
      'Secure Payment Gateways',
      'Scalable Microservices',
      'Legacy System Modernization'
    ]
  },
  {
    title: 'AI Solutions',
    desc: 'AI chatbots & assistants, process automation, and data analysis providing smart business insights.',
    icon: Brain,
    details: [
      'LLM Custom Training',
      'Automated Support Bots',
      'Predictive Analytics',
      'Workflow Automation'
    ]
  },
  {
    title: 'Online Payment Integrations',
    desc: 'Mobile money integrations, payment gateway setup, and secure transaction systems for your business.',
    icon: CreditCard,
    details: [
      'Mobile Money (M-Pesa/Ecocash)',
      'Global Credit Card Support',
      'Fraud Detection Layers',
      'Real-time Settlement'
    ]
  },
  {
    title: 'E-Commerce Solutions',
    desc: 'High-performance online stores, product management systems, and secure checkout with order tracking.',
    icon: ShoppingCart,
    details: [
      'Inventory Management',
      'Direct-to-Consumer Growth',
      'Secure Checkout Flow',
      'Abandoned Cart Recovery'
    ]
  },
  {
    title: 'Cloud & Hosting Solutions',
    desc: 'Reliable cloud hosting, domain registration, and daily backups with continuous maintenance.',
    icon: Cloud,
    details: [
      'Serverless Deployment',
      'Auto-scaling Infrastructure',
      'Daily Encrypted Backups',
      '99.9% Uptime Guarantee'
    ]
  },
  {
    title: 'Cybersecurity & Data Protection',
    desc: 'Comprehensive website security, data encryption, and protection against evolving threats & attacks.',
    icon: ShieldCheck,
    details: [
      'End-to-End Encryption',
      'Vulnerability Assessments',
      'DDoS Protection',
      'Compliant Data Storage'
    ]
  },
];

export const ServicesOverview = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-24 px-6 relative" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-2 sm:px-0">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-green font-bold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-gradient tracking-tight">Services.</h2>
          </div>
          <p className="text-white/50 max-w-sm text-base sm:text-lg">
            Tailored digital strategies designed for the next generation of business success in Lesotho and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-4 sm:p-8 rounded-2xl sm:rounded-3xl glass border-white/5 hover:border-brand-green/30 transition-all duration-500 hover:brand-glow flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl brand-gradient flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform brand-glow">
                <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
              </div>
              <h3 className="text-base sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-brand-green transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-white/50 text-xs sm:text-lg mb-4 sm:mb-8 leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
                {service.desc}
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-0 hover:bg-transparent group/btn text-brand-blue hover:text-brand-green w-fit text-xs sm:text-sm hidden sm:flex"
              >
                Analysis Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ 
                opacity: 0, 
                perspective: 1500, 
                rotateY: 20, 
                rotateX: -10,
                scale: 0.8,
                translateZ: -300
              }}
              animate={{ 
                opacity: 1, 
                rotateY: 0, 
                rotateX: 0,
                scale: 1,
                translateZ: 0
              }}
              exit={{ 
                opacity: 0, 
                perspective: 1500, 
                rotateY: -20, 
                rotateX: 10,
                scale: 0.8,
                translateZ: -300
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="relative w-[calc(100vw-32px)] max-w-2xl glass brand-border rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xl brand-glow max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-white/10 transition-colors bg-white/5"
              >
                <X className="w-5 h-5 sm:w-6 h-6" />
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 h-16 rounded-2xl brand-gradient flex items-center justify-center brand-glow">
                  <selectedService.icon className="w-6 h-6 sm:w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gradient">{selectedService.title}</h3>
                  <p className="text-brand-green font-bold text-xs sm:text-sm tracking-widest uppercase">Analysis Report</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 leading-relaxed italic">
                "{selectedService.desc}"
              </p>

              <div className="space-y-4 mb-10 sm:mb-12">
                <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  Key Components Analyzed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedService.details?.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-white/80 text-sm sm:text-base font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="w-full sm:flex-1" onClick={() => setSelectedService(null)}>
                  Request Case Study
                </Button>
                <Button variant="outline" className="w-full sm:flex-1 backdrop-blur-sm" onClick={() => {
                  setSelectedService(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get Custom Quote
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
