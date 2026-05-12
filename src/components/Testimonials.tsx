import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowRight, Zap, Cpu, Rocket } from 'lucide-react';
import { Button } from './Button';

const articles = [
  {
    title: 'Precision Scaling: How Serverless Elevates SMMEs',
    category: 'Architecture',
    readTime: '5 min',
    desc: 'Discover why shifting from traditional hosting to serverless edge computing is the secret to 10x growth without infrastructure headaches.',
    icon: <Zap className="w-6 h-6 text-brand-green" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'AI Agents: The New Workforce for Customer Success',
    category: 'Artificial Intelligence',
    readTime: '7 min',
    desc: 'How automated decision layers are helping local businesses maintain 24/7 global presence and hyper-personalized support.',
    icon: <Cpu className="w-6 h-6 text-brand-blue" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Digital Sovereignty: Owning Your Customer Data',
    category: 'Data Strategy',
    readTime: '6 min',
    desc: 'Beyond third-party cookies: Why building your own unified data logic is essential for protecting your business intellectual property.',
    icon: <Rocket className="w-6 h-6 text-brand-green" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  }
];

export const InnovationBlog = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-green font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              Knowledge Base
            </motion.span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Digital & Tech <br /><span className="text-gradient">Innovations.</span>
            </h2>
            <p className="text-white/50 text-lg sm:text-xl font-medium leading-relaxed">
              Strategic briefings on how modern technology is fundamentally changing the physics of business growth in Lesotho.
            </p>
          </div>
          <Button variant="outline" className="h-14 px-8 rounded-2xl group border-white/10 hover:border-brand-green/30" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            View All Articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-brand-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative glass rounded-[40px] border-white/5 overflow-hidden flex flex-col h-full hover:border-brand-green/30 transition-colors">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-brand-green/30 transition-colors">
                      {article.icon}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black mb-4 leading-tight group-hover:text-brand-green transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {article.desc}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors flex items-center gap-2">
                      Read Article <ArrowRight className="w-4 h-4 text-brand-green" />
                    </span>
                    <BookOpen className="w-5 h-5 text-white/20 group-hover:text-brand-green/50 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
