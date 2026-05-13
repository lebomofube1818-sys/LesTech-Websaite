import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Trophy, BarChart3, Users, Cpu, TrendingUp as TrendingUpIcon, X, Sparkles, Zap, Shield } from 'lucide-react';
import { Button } from './Button';

const insightArticles = [
  {
    category: 'AI Strategy',
    title: 'The AI Revolution: Beyond the Hype to Real ROI.',
    result: '40%',
    metric: 'Efficiency Gain',
    tags: ['Artificial Intelligence', 'Future Readiness'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    desc: 'Explore how custom LLMs and automated decision-making layers are moving from experimental to essential for competitive business logic.',
    fullContent: 'The integration of Artificial Intelligence into business operations has moved beyond speculative innovation. At LesTech, we focus on identifying specific operational bottlenecks where AI agents can drive 10x improvements in throughput. By leveraging Gemini-driven intelligence layers, businesses can automate complex decision trees, reduce human error in critical data processing, and provide hyper-personalized customer experiences at scale. The 40% efficiency gain isn\'t just a number—it\'s a competitive moat that allows early adopters to reallocate human talent to higher-value creative and strategic tasks.',
    highlights: ['Automated Decision Pipelines', 'Custom LLM Training', 'Predictive Market Analysis']
  },
  {
    category: 'Digital Architecture',
    title: 'Why Your Digital Legacy is Your Greatest Asset.',
    result: '2.5x',
    metric: 'Equity Growth',
    tags: ['Architecture', 'Business Value'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    desc: 'Understanding why a robust digital ecosystem is the modern equivalent of prime real estate, and how to build one that lasts decades.',
    fullContent: 'Your digital infrastructure is more than just a tool—it is the foundation of your business\'s market value. A well-architected digital ecosystem increases business equity by ensuring data portability, operational transparency, and scalable customer acquisition pipelines. We build "Full House" solutions that integrate CRM, logistics, and front-end experience into a single cohesive unit. The 2.5x equity growth is achieved through the systematic elimination of "technical debt" and the creation of intellectual property that creates a significant barrier to entry for competitors.',
    highlights: ['Cloud Native Scalability', 'Data Sovereignty', 'Unified Logic Layers']
  }
];

export const DigitalInsights = () => {
  const [selectedArticle, setSelectedArticle] = useState<null | typeof insightArticles[0]>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="insights">
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-black/98 backdrop-blur-3xl"
            onClick={() => setSelectedArticle(null)}
            style={{ perspective: "2000px" }}
          >
            <motion.div
              initial={{ scale: 0.7, y: 100, rotateX: 30, rotateY: -10, z: -500 }}
              animate={{ scale: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
              exit={{ scale: 0.7, y: 100, rotateX: 30, rotateY: 10, z: -500 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                mass: 0.8
              }}
              className="bg-zinc-900 border border-white/10 rounded-[48px] max-w-6xl w-full relative shadow-[0_0_150px_rgba(26,230,128,0.2)] overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green/20 hover:rotate-90 transition-all z-50 text-white group"
              >
                <X className="w-6 h-6 transition-transform group-hover:scale-125" />
              </button>

              <div className="overflow-y-auto overflow-x-hidden custom-scrollbar h-full">
                <div className="p-8 sm:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-stretch">
                    <div className="relative group overflow-hidden rounded-[32px] aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl">
                      <motion.img 
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={selectedArticle.image} 
                        alt={selectedArticle.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                      <div className="absolute bottom-12 left-12" style={{ transform: 'translateZ(40px)' }}>
                         <motion.p 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.4 }}
                           className="text-brand-green font-black text-7xl sm:text-8xl drop-shadow-2xl"
                         >
                           {selectedArticle.result}
                         </motion.p>
                         <motion.p 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.6 }}
                           className="text-white/40 uppercase tracking-[0.4em] text-sm font-bold pl-2"
                         >
                           {selectedArticle.metric}
                         </motion.p>
                      </div>
                    </div>

                    <div className="space-y-8 flex flex-col justify-center py-4">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4"
                      >
                        <span className="w-16 h-[2px] bg-brand-green" />
                        <span className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase">{selectedArticle.category}</span>
                      </motion.div>
                      
                      <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl sm:text-6xl font-black tracking-tighter leading-[1] text-white"
                      >
                        {selectedArticle.title}
                      </motion.h2>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-6"
                      >
                        <p className="text-white/70 leading-relaxed text-lg sm:text-xl font-medium border-l-4 border-brand-green/30 pl-6 py-2">
                          {selectedArticle.desc}
                        </p>
                        <p className="text-white/50 leading-relaxed text-base sm:text-lg">
                          {selectedArticle.fullContent}
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="pt-8 space-y-6"
                      >
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Strategic Pillars</p>
                        <div className="flex flex-wrap gap-3">
                           {selectedArticle.highlights.map(item => (
                             <div key={item} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-white/90 hover:bg-brand-green/10 hover:border-brand-green/40 transition-all cursor-default">
                                <Sparkles className="w-4 h-4 text-brand-green" />
                                {item}
                             </div>
                           ))}
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="pt-10 flex flex-col sm:flex-row gap-6"
                      >
                        <Button className="brand-glow px-12 h-16 text-lg rounded-[20px]" onClick={() => setSelectedArticle(null)}>
                          Acknowledge Receipt
                        </Button>
                        <Button variant="ghost" className="text-white/60 hover:text-white group h-16 px-10 text-lg rounded-[20px] bg-white/5 hover:bg-white/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                           Book Consultation <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Accent */}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/5 blur-[150px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative text */}
      <div className="absolute top-0 right-0 text-[15rem] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none -mr-40 uppercase">
        Knowledge
      </div>
      
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
        >
          Thought Leadership
        </motion.span>
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Digital <span className="text-gradient">Insights.</span></h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Strategic briefings on the technologies and methodologies shaping the future of commerce in Southern Africa.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 px-4 sm:px-0">
        {insightArticles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group block relative rounded-[32px] sm:rounded-[48px] overflow-hidden glass border-white/5 hover:border-brand-green/30 transition-all cursor-pointer shadow-2xl"
            onClick={() => setSelectedArticle(article)}
          >
             <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-square xl:aspect-[16/10]">
               <img 
                 src={article.image} 
                 alt={article.category}
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
               
               <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-[1px] bg-brand-green" />
                  <p className="text-brand-green font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">{article.category}</p>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tighter text-white group-hover:text-brand-green transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-white/50 text-sm sm:text-lg mb-8 max-w-lg line-clamp-3 group-hover:text-white/80 transition-colors">
                  {article.desc}
                </p>
 
                <div className="flex gap-8 sm:gap-12">
                  <div>
                    <p className="text-4xl sm:text-7xl font-display font-black text-brand-green drop-shadow-[0_0_20px_rgba(26,230,128,0.3)]">{article.result}</p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mt-1">{article.metric}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-10 border-t border-white/5 flex justify-between items-center bg-white/[0.02] group-hover:bg-brand-green/10 transition-all">
              <span className="font-bold flex items-center gap-2 text-sm sm:text-base text-white/80 group-hover:text-white group-hover:translate-x-2 transition-all">
                Read Strategic Briefing <ArrowRight className="w-4 h-4 text-brand-green" />
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-green group-hover:rotate-45 transition-all">
                 <Cpu className="w-5 h-5 text-brand-green opacity-50" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 bg-white/[0.01]">
        {[
          { icon: Users, label: 'Global Connectivity', val: '5.3B+' },
          { icon: BarChart3, label: 'Digital Economy', val: '$15.5T' },
          { icon: TrendingUpIcon, label: 'AI Adoption', val: '77%' },
          { icon: Trophy, label: 'Automation ROI', val: '250%' },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
             <stat.icon className="w-6 h-6 mx-auto mb-4 text-brand-blue group-hover:scale-110 group-hover:text-brand-green transition-all" />
             <p className="text-2xl sm:text-4xl font-display font-black text-white mb-1 tracking-tighter group-hover:text-gradient">{stat.val}</p>
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
