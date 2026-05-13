import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './Button';
import React, { useState } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const path = 'inquiries';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        sector: '',
        message: ''
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-20">
        <div className="lg:w-1/2 px-2 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-bold text-brand-green border-white/5 uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" />
            <span>Mission Control</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] sm:leading-tight tracking-tighter">
            Architect Your <br />
            <span className="text-gradient">Growth Logic.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 sm:mb-12 max-w-lg leading-relaxed font-medium">
            Stop guessing. Start engineering. Our strategy protocols are deep dives into your technical unit economics and market inefficiencies.
          </p>
          
          <div className="space-y-6 sm:space-y-8">
            {[
              'Audit of your current stack & attribution.',
              'competitor digital gap analysis.',
              'Custom technology roadmap for the next 180 days.',
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center shrink-0 group-hover:brand-glow transition-all">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                </div>
                <p className="text-base sm:text-lg font-medium text-white/60 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, perspective: 1000, rotateY: 15, rotateX: 5, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 relative overflow-hidden brand-border brand-glow">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full brand-gradient flex items-center justify-center mx-auto mb-8 brand-glow">
                  <CheckCircle2 className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Transmission Received</h3>
                <p className="text-white/60 text-lg">Our growth laboratory is processing your data packets.</p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Resend Packets</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/20">Identity</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-green/50 outline-none text-white" 
                      placeholder="Full Names" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/20">Organization</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-green/50 outline-none text-white" 
                      placeholder="Business Name" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/20">Digital Coordinates</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-green/50 outline-none text-white" 
                      placeholder="Work Email" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/20">Comm Line</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-green/50 outline-none text-white" 
                      placeholder="Work Number" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/20">Growth Sector</label>
                  <select 
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-green/50 outline-none appearance-none text-white cursor-pointer group-hover:bg-white/10 transition-colors"
                  >
                    <option value="" disabled className="bg-brand-gray">Select Service</option>
                    <option value="AI Solutions" className="bg-brand-gray">AI Solutions</option>
                    <option value="Digital Strategy" className="bg-brand-gray">Digital Strategy</option>
                    <option value="Brand Identity" className="bg-brand-gray">Brand Identity</option>
                    <option value="App Dev" className="bg-brand-gray">App Dev</option>
                    <option value="Growth Engineering" className="bg-brand-gray">Growth Engineering</option>
                    <option value="Market Intelligence" className="bg-brand-gray">Market Intelligence</option>
                    <option value="Revenue Logic" className="bg-brand-gray">Revenue Logic</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/20">Project Brief</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-brand-green/50 outline-none resize-none text-white" 
                    placeholder="What technical bottlenecks are stalling your scale?" 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full py-6" disabled={loading}>
                  {loading ? (
                    <>Processing... <Loader2 className="w-5 h-5 ml-2 animate-spin" /></>
                  ) : (
                    <>Initiate Strategy Protocol <Send className="w-5 h-5 ml-2" /></>
                  )}
                </Button>
                
                <p className="text-[10px] text-center text-white/20 uppercase tracking-[0.2em] font-bold">
                  Data processing protected by end-to-end security layers.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
