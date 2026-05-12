import { motion } from 'motion/react';
import { ArrowRight, Trophy, BarChart3, Users, TrendingUp as TrendingUpIcon } from 'lucide-react';
import { Button } from './Button';

const studies = [
  {
    client: 'EcoThread Co.',
    title: '420% Increase in Shopify ROAS within 90 days.',
    result: '+420%',
    metric: 'ROAS Increase',
    tags: ['E-commerce', 'Paid Social'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    client: 'CloudFlow SaaS',
    title: 'Acquiring high-LTV enterprise leads at 60% lower CPA.',
    result: '-60%',
    metric: 'CPA Reduction',
    tags: ['SaaS', 'SEO', 'PPC'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="case-studies">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 text-[15rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none -mr-40">
        RESULTS
      </div>
      
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Impact In Numbers</h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
          We don't win until you do. Real results that showcase our impact on growth and efficiency.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block relative rounded-3xl sm:rounded-[40px] overflow-hidden glass border-white/5"
          >
            <div className="relative h-[320px] sm:h-[400px]">
              <img 
                src={study.image} 
                alt={study.client}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
                    {tag}
                  </span>
                ))}
              </div>
 
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12">
                <p className="text-brand-green font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-4">{study.client}</p>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 leading-tight tracking-tight text-white group-hover:text-brand-green transition-colors">
                  {study.title}
                </h3>
                
                <div className="flex gap-8 sm:gap-12">
                  <div>
                    <p className="text-3xl sm:text-5xl font-display font-black text-white">{study.result}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{study.metric}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 sm:p-8 border-t border-white/5 flex justify-between items-center group-hover:bg-brand-blue/5 transition-colors">
              <span className="font-bold flex items-center gap-2 text-sm sm:text-base">
                View Full Breakdown <ArrowRight className="w-4 h-4" />
              </span>
              <Trophy className="w-5 h-5 sm:w-6 h-6 text-brand-blue" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 bg-white/[0.01]">
        {[
          { icon: BarChart3, label: 'Capital Deployed', val: '$500M+' },
          { icon: TrendingUpIcon, label: 'Avg ROAS', val: '6.4x' },
          { icon: Users, label: 'leads Generated', val: '2.4M' },
          { icon: Trophy, label: 'Awards Won', val: '12' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
             <stat.icon className="w-6 h-6 mx-auto mb-4 text-brand-blue" />
             <p className="text-3xl md:text-4xl font-display font-black text-white mb-1">{stat.val}</p>
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
