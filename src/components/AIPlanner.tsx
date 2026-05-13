import { motion } from 'motion/react';
import { Layers, Zap, Shield, Repeat, Cpu, Network, Database, Layout, Globe } from 'lucide-react';

const FlowStep = ({ icon: Icon, title, description, delay, alignment = 'right' }: any) => (
  <motion.div
    initial={{ opacity: 0, x: alignment === 'right' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="glass brand-border rounded-[32px] p-8 sm:p-10 hover:border-brand-green/40 transition-all brand-glow-hover z-10 relative">
      <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mb-6 brand-glow group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-black" />
      </div>
      <h3 className="text-xl sm:text-2xl font-black mb-4 text-white tracking-tight">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm sm:text-base font-medium">
        {description}
      </p>
    </div>
    {/* Connector Lines (Desktop) */}
    <div className={`hidden lg:block absolute top-1/2 ${alignment === 'right' ? '-right-12' : '-left-12'} w-12 h-[2px] bg-gradient-to-r from-brand-green/20 to-transparent`} />
  </motion.div>
);

export const AIPlanner = () => {
  return (
    <div className="py-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden" id="ai-strategy">
      {/* Header Section */}
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full green-gradient/10 border border-brand-green/20 mb-6 text-brand-green"
        >
          <Cpu className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-widest">Full House Infrastructure</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter leading-[1.1]"
        >
          Scaling Reliability. <br />
          <span className="text-brand-green">One Logic</span> at a Time.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed"
        >
          Our "Full House" approach means we don't just build apps; we architect digital ecosystems that are resilient, elastic, and engineered for Lesotho's next growth wave.
        </motion.p>
      </div>

      {/* The Flow Diagram Wrapper */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Central visual core (Mobile Hidden) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 items-center justify-center z-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-brand-green/20 border-dashed rounded-full"
          />
          <div className="w-16 h-16 rounded-full brand-gradient brand-glow flex items-center justify-center">
            <Zap className="w-8 h-8 text-black" />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8 lg:pr-8">
          <FlowStep 
            icon={Layers} 
            title="Discovery & Mapping" 
            description="We ingest your business logic and constraints to map a technical blueprint that prioritizes modularity and zero-friction user journeys."
            delay={0.3}
            alignment="right"
          />
          <FlowStep 
            icon={Shield} 
            title="Reliability Engineering" 
            description="Our systems are built with fail-over logic and automated testing pipelines. We guarantee 99.9% uptime for critical mission components."
            delay={0.5}
            alignment="right"
          />
        </div>

        <div className="space-y-8 lg:pl-8 lg:mt-32">
          <FlowStep 
            icon={Network} 
            title="Elastic Scaling" 
            description="From 100 to 1 million users. Our cloud-native architectures automatically calibrate resources based on real-time demand."
            delay={0.4}
            alignment="left"
          />
          <FlowStep 
            icon={Repeat} 
            title="Sustained Evolution" 
            description="Digital products aren't static. We implement CI/CD cycles that allow for rapid feature deployment without disrupting existing flows."
            delay={0.6}
            alignment="left"
          />
        </div>
      </div>

      {/* Technical Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
        {[
          {
            icon: Database,
            title: "Data Integrity",
            text: "Robust database schemas designed for maximum throughput and ACID compliance.",
            color: "brand-blue"
          },
          {
            icon: Layout,
            title: "Interface Precision",
            text: "Pixel-perfect frontends that provide high-density information without cognitive overload.",
            color: "brand-green"
          },
          {
            icon: Globe,
            title: "Global Standards",
            text: "Adhering to international security and performance benchmarks in every line of code.",
            color: "white"
          }
        ].map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + (i * 0.1) }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <feat.icon className={`w-8 h-8 mb-6 ${feat.color === 'brand-green' ? 'text-brand-green' : feat.color === 'brand-blue' ? 'text-brand-blue' : 'text-white'}`} />
            <h4 className="text-xl font-bold mb-3 text-white">{feat.title}</h4>
            <p className="text-white/40 text-sm leading-relaxed">{feat.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

