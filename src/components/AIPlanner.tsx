import { motion } from 'motion/react';
import { generatePersonas, Persona } from '../services/geminiService';
import { useState } from 'react';
import { Button } from './Button';
import { Sparkles, Brain, Target, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';

export const AIPlanner = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [personas, setPersonas] = useState<Persona[] | null>(null);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const data = await generatePersonas(description);
      setPersonas(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="ai-strategy">
      <div className="text-center mb-12 sm:text-left sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full blue-gradient/10 border border-brand-blue/20 mb-6 text-brand-blue">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-widest">One-stop strategy Core</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight leading-tight">Generate Your <br className="hidden sm:block" /> ICP Personas.</h2>
        <p className="text-base sm:text-lg text-white/60 max-w-2xl sm:mx-0 leading-relaxed font-medium">
          Input your business model, product, or target niche and let our specialized Gemini instance map your high-value customer personas.
        </p>
      </div>

      <div className="glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 mb-12 sm:mb-16 brand-border brand-glow">
        <label className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
          <Brain className="w-4 h-4 text-brand-green" /> Business Intelligence Input
        </label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. A B2B SaaS platform providing AI-powered recruitment tools for high-growth tech companies..."
          className="w-full h-32 sm:h-40 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-base sm:text-lg focus:outline-none focus:border-brand-green/50 transition-colors resize-none mb-6 sm:mb-8 text-white"
        />
        <Button 
          size="lg" 
          className="w-full py-5 sm:py-6 text-base sm:text-lg"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 sm:w-6 h-6 animate-spin text-black" />
              Processing Digital Architecture...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 sm:w-6 h-6 text-black" />
              Generate Strategy Protocol
            </>
          )}
        </Button>
      </div>

      {personas && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] border border-white/10 relative overflow-hidden bg-brand-gray/30 group hover:brand-border transition-all"
            >
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-48 h-48 text-brand-green" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-6 brand-glow">
                  <span className="font-bold text-xl text-black">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">{persona.name}</h3>
                <p className="text-brand-green font-display font-medium mb-6 uppercase tracking-wider text-sm">{persona.role}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                      <AlertCircle className="w-3 h-3 text-brand-blue" /> Pain Points
                    </h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((point, i) => (
                        <li key={i} className="text-sm text-white/70 flex gap-2">
                          <span className="text-brand-green">•</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                      <Target className="w-3 h-3 text-brand-green" /> Objectives
                    </h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, i) => (
                        <li key={i} className="text-sm text-white/70 flex gap-2">
                          <span className="text-brand-blue">•</span> {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3 text-brand-blue">
                      <TrendingUp className="w-3 h-3" /> Growth Logic
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed italic">
                      "{persona.marketingStrategy}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
