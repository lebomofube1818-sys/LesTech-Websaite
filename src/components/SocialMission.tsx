import { motion } from 'motion/react';
import { Users, Lightbulb, Briefcase, Globe } from 'lucide-react';

export const SocialMission = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white/[0.01]" id="mission">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-bold text-brand-blue border-white/5 uppercase tracking-widest">
              <Users className="w-4 h-4" />
              <span>Our Digital Mission</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1] sm:leading-tight">
              Addressing <span className="text-brand-green">Unemployment.</span> <br />
              Building <span className="text-brand-blue">Opportunities.</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-medium">
              Unemployment remains one of Lesotho's biggest challenges. At LesTech, we believe technology is the key to changing that. 
              We create digital solutions, skills, and opportunities that empower young Basotho to build, earn, and lead.
            </p>

            <motion.div 
              animate={{ 
                y: [0, -5, 0],
                rotateX: [0, 2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 10,
                rotateY: -5,
                z: 40,
                boxShadow: "0 20px 40px rgba(26, 230, 128, 0.2)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl brand-border bg-brand-green/5 inline-block group cursor-default"
            >
              <p className="text-brand-green font-black tracking-widest text-xs sm:text-sm italic uppercase relative z-10" style={{ transform: 'translateZ(20px)' }}>
                WE DON'T JUST BUILD WEBSITES. WE BUILD FUTURES.
              </p>
              <div className="absolute inset-0 bg-brand-green/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-1" />
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-6">
            {[
              { icon: Lightbulb, title: 'Innovating Solutions', desc: 'Solving local challenges through global technology.' },
              { icon: Briefcase, title: 'Empowering Businesses', desc: 'Helping local enterprises reach their digital potential.' },
              { icon: Users, title: 'Creating Opportunities', desc: 'Building high-value career paths for local talent.' },
              { icon: Globe, title: 'Digital Lesotho', desc: 'Architecting the future of the nation’s digital infrastructure.' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 sm:p-8 rounded-2xl sm:rounded-[32px] glass border-white/5 hover:brand-border transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl brand-gradient flex items-center justify-center mb-4 sm:mb-6 brand-glow">
                  <stat.icon className="w-5 h-5 sm:w-6 h-6 text-black" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-brand-green transition-colors leading-tight">{stat.title}</h3>
                <p className="text-white/40 text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Lesotho Outline Watermark (Simulated) */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none">
        <Globe className="w-[600px] h-[600px]" />
      </div>
    </section>
  );
};
