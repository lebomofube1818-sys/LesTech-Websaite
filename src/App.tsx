/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { DigitalInsights } from './components/CaseStudies';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { AIPlanner } from './components/AIPlanner';
import { InnovationBlog } from './components/Testimonials';
import { SocialMission } from './components/SocialMission';
import { LoaderScreen } from './components/LoaderScreen';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.substring(1));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const timer = setTimeout(() => {
          const reElement = document.getElementById(id);
          if (reElement) {
            reElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

const HomePage = () => (
  <main>
    <Hero />
    <ServicesOverview />
    <DigitalInsights />
    <SocialMission />
    <InnovationBlog />
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
    <DigitalInsights />
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

const AboutPage = () => <About />;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoaderScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen flex flex-col">
        <Header />
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

