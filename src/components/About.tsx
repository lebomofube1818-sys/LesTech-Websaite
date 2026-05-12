import { motion } from 'motion/react';
import { Target, Zap, Shield, Globe, ArrowUpRight, BarChart3, Users, Cpu, MessageSquare } from 'lucide-react';
import { Button } from './Button';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Decorative Graphic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            rotate: 360,
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-24 w-80 h-80 bg-brand-blue/5 blur-[100px] rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern office"
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-green font-bold text-sm tracking-[0.4em] uppercase mb-6 block">Our Identity</span>
            <h1 className="text-5xl sm:text-8xl font-black mb-8 leading-[1.1] tracking-tighter text-gradient">
              Architecting the <br />
              Digital Frontier.
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed mb-12 px-4">
              LesTech was born from a simple realization: businesses in Lesotho don't just need websites—they need digital transformation that scales.
            </p>
            
            {/* Floating 3D-like graphic */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 pointer-events-none hidden lg:block">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 rounded-3xl border-2 border-brand-green/20 glass relative flex items-center justify-center overflow-hidden"
                style={{ transform: 'rotateX(45deg) rotateZ(45deg)' }}
              >
                 <div className="absolute inset-0 bg-brand-green/5" />
                 <Cpu className="w-12 h-12 text-brand-green/30" />
              </motion.div>
            </div>

            <div className="relative inline-block group" style={{ perspective: "1200px" }}>
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotateX: [2, 8, 2],
                  rotateY: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateX: 15, 
                  rotateY: -15,
                  z: 100,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                {/* Back Layer (3D Depth) */}
                <div 
                  className="absolute inset-0 bg-brand-green/30 rounded-2xl -z-10 blur-md" 
                  style={{ transform: "translateZ(-30px)" }}
                />
                
                <Button 
                  size="lg" 
                  className="brand-glow relative z-10 font-black px-10 sm:px-20 py-6 sm:py-12 text-lg sm:text-3xl rounded-2xl sm:rounded-[40px] border-2 border-brand-green/60 shadow-[0_0_30px_rgba(26,230,128,0.3)] bg-brand-black/80 backdrop-blur-md" 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ transform: "translateZ(40px)" }}
                >
                  Partner With Us
                </Button>

                {/* Intense Glowing Aura */}
                <div className="absolute inset-x-0 -bottom-10 h-2 w-full bg-brand-green/50 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Influence Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <span className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Regional Impact</span>
                <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Setting the <br /> <span className="text-gradient">Benchmark.</span></h2>
                <p className="text-lg text-white/50 leading-relaxed mb-10">
                  Our influence extends across the Mountain Kingdom, helping local businesses compete on a global scale through rigorous digital implementation.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { val: '24/7', label: 'Availability' },
                     { val: '99.9%', label: 'Uptime' },
                   ].map((stat, i) => (
                     <div key={i} className="border-l border-brand-green/30 pl-6">
                        <p className="text-4xl font-black text-white mb-2">{stat.val}</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
                     </div>
                   ))}
                </div>
             </div>

             <div className="lg:w-1/2 relative" style={{ perspective: '1200px' }}>
                <motion.div
                  initial={{ rotateY: 25, rotateX: 10 }}
                  whileInView={{ rotateY: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                   {[
                     { color: 'bg-brand-blue', label: 'Security', z: 40 },
                     { color: 'bg-brand-green', label: 'Growth', z: 20 },
                     { color: 'bg-brand-green', label: 'Agility', z: 60 },
                     { color: 'bg-brand-blue', label: 'Scale', z: 0 }
                   ].map((item, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ translateZ: 80, rotateX: 5, rotateY: -5 }}
                        className={`${item.color}/10 border border-white/10 p-10 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center gap-4 group transition-colors hover:bg-white/[0.05]`}
                        style={{ transform: `translateZ(${item.z}px)` }}
                     >
                        <div className={`w-3 h-3 rounded-full ${item.color} brand-glow group-hover:scale-150 transition-transform`} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{item.label}</span>
                     </motion.div>
                   ))}
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
              alt="Data visualization"
              className="rounded-[40px] border border-white/10 shadow-2xl brand-glow grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-brand-green/20 hidden sm:block">
              <p className="text-4xl font-black text-brand-green mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Basotho Lead</p>
            </div>
          </motion.div>

          <div>
            <span className="text-brand-blue font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter">Beyond Marketing. <br /> <span className="text-gradient">Operational Growth.</span></h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We separate ourselves from traditional agencies by focusing on "Full House Digital Solutions." This means we don't just look at how your business looks online—we look at how it <span className="text-white font-bold">operates</span>.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Shield, title: 'Uncompromising Integrity', desc: 'Secure solutions that protect your business data and customer trust.' },
                { icon: Zap, title: 'High-Velocity Growth', desc: 'Agile development cycles that move at the speed of the digital market.' },
                { icon: Globe, title: 'Global Standards', desc: 'Bringing world-class engineering standards to local businesses in Lesotho.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-green/10 transition-colors">
                    <item.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Grid Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tighter">Technology Stack.</h2>
            <p className="text-white/40 max-w-xl mx-auto italic">Powering the next generation of digital infrastructure in SADC.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Cloud Infrastructure', icon: Cpu, color: 'brand-blue', shadow: 'rgba(59, 130, 246, 0.2)' },
              { label: 'AI Strategy', icon: Target, color: 'brand-green', shadow: 'rgba(26, 230, 128, 0.2)' },
              { label: 'Data Analysis', icon: BarChart3, color: 'brand-blue', shadow: 'rgba(59, 130, 246, 0.2)' },
              { label: 'Business Logic', icon: Users, color: 'brand-green', shadow: 'rgba(26, 230, 128, 0.2)' }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateX: 10,
                  rotateY: -5,
                  boxShadow: `0 20px 40px ${tech.shadow}`,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="glass p-6 sm:p-10 rounded-3xl border border-white/5 text-center transition-all bg-white/[0.03]"
              >
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-${tech.color}/10 relative`} style={{ transform: 'translateZ(30px)' }}>
                  <tech.icon className={`w-8 h-8 text-${tech.color}`} />
                  <div className={`absolute inset-0 bg-${tech.color}/20 blur-xl opacity-0 hover:opacity-100 transition-opacity`} />
                </div>
                <p className="font-bold text-white/80 uppercase tracking-widest text-xs sm:text-sm" style={{ transform: 'translateZ(20px)' }}>{tech.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageSquare className="w-12 h-12 text-brand-green mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl sm:text-5xl font-black italic mb-10 leading-tight tracking-tight">
            "Our mission is to ensure that no business in Lesotho is left behind in the global shift toward digital-first economies."
          </h2>
          <div className="w-20 h-[2px] bg-brand-green mx-auto mb-6" />
          <p className="text-brand-green font-bold tracking-[0.3em] uppercase text-sm">LesTech Executive Vision</p>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      </section>
    </div>
  );
};
