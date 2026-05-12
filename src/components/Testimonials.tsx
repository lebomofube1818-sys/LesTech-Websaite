import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, EcoThread',
    content: 'LesTech didn’t just run our ads; they re-engineered our entire attribution model. We saw a 4x jump in ROAS in 90 days.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Marcus Chen',
    role: 'Marketing Dir, SaaSFlow',
    content: 'The most analytical technical team we’ve ever worked with. They treat our budget like it’s their own. Highly recommended for full-house solutions.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, LuxeStay',
    content: 'LesTech\'s AI-driven persona mapping is a game changer. We finally understand exactly who we are talking to and why they buy.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Trusted By Industry Leaders</h2>
          <p className="text-white/60 text-lg">Don’t take our word for it. Take theirs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[32px] border-white/5 relative group"
            >
              <Quote className="w-10 h-10 text-brand-green/20 absolute top-8 right-8" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-brand-green/30 group-hover:border-brand-green transition-colors" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed italic">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
