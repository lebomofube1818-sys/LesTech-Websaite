/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { CaseStudies } from './components/CaseStudies';
import { ContactForm } from './components/ContactForm';
import { AIPlanner } from './components/AIPlanner';
import { Testimonials } from './components/Testimonials';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { SocialMission } from './components/SocialMission';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const HomePage = () => (
  <main>
    <Hero />
    <ServicesOverview />
    <CaseStudies />
    <SocialMission />
    <Testimonials />
    <ContactForm />
  </main>
);

const ServicesPage = () => (
  <div className="pt-32">
    <ServicesOverview />
    <ContactForm />
  </div>
);

const ImpactPage = () => (
  <div className="pt-32">
    <CaseStudies />
    <ContactForm />
  </div>
);

const MissionPage = () => (
  <div className="pt-32">
    <SocialMission />
    <ContactForm />
  </div>
);

const StrategyPage = () => (
  <div className="pt-32">
    <AIPlanner />
    <ContactForm />
  </div>
);

const AboutPage = () => (
  <div className="pt-32 px-6 max-w-4xl mx-auto py-24">
    <h1 className="text-6xl font-bold mb-12 tracking-tighter">Architecture & Growth.</h1>
    <div className="prose prose-invert prose-lg max-w-none text-white/70 space-y-8">
      <p>LesTech was founded on the principle that digital presence is no longer just a "marketing" channel—it's a core operational asset. We call this "Full House Digital solutions."</p>
      <p>We are a localized collective of elite engineers, designers, and strategists. Our philosophy is rooted in "Operational Marketing." We don't just generate leads; we build the infrastructure that captures them, the logic that nurtures them, and the brand equity that keeps them.</p>
      <div className="grid md:grid-cols-2 gap-12 pt-12">
        <div className="glass p-8 rounded-3xl border-brand-green/20">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Our Core Pillars</h3>
          <ul className="space-y-4">
            <li className="flex gap-2"><span className="text-brand-green font-bold">01</span> Performance Engineering</li>
            <li className="flex gap-2"><span className="text-brand-green font-bold">02</span> Data Integrity</li>
            <li className="flex gap-2"><span className="text-brand-green font-bold">03</span> Brand Architecture</li>
          </ul>
        </div>
        <div className="glass p-8 rounded-3xl border-brand-green/20">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Our Technology</h3>
          <p>LesTech leverages custom Gemini-driven intelligence layers to predict market shifts and automate high-velocity demand generation.</p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <ExitIntentPopup />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ai-planner" element={<StrategyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

