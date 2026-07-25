import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, BookOpen, FlaskConical, Bus } from 'lucide-react';

// Local high-res school photography assets
import hero1 from '../../assets/images/hero1.webp';
import hero2 from '../../assets/images/hero2.webp';
import hero3 from '../../assets/images/hero3.webp';

const featureTabs = [
  {
    id: 'academics',
    label: 'CBSE Curriculum',
    icon: BookOpen,
    image: hero1,
    badge: 'Academic Excellence',
    desc: 'Structured learner-centric CBSE education fostering critical thinking and conceptual mastery.',
  },
  {
    id: 'labs',
    label: 'Smart Labs & STEM',
    icon: FlaskConical,
    image: hero3,
    badge: 'Hands-on Innovation',
    desc: 'State-of-the-art Science, Computer, and Robotics labs for practical discovery.',
  },
  {
    id: 'safety',
    label: 'Secured Campus',
    icon: Bus,
    image: hero2,
    badge: '24/7 Security & Fleet',
    desc: 'GPS-tracked bus transport paired with round-the-clock CCTV campus surveillance.',
  },
];

/**
 * HeroImage Component (Redesigned UI/UX Showcase)
 * Premium, minimal, and visually engaging institution card composition
 * inspired by modern software landing pages. Completely replaces traditional poster carousels.
 */
const HeroImage = () => {
  const [activeTab, setActiveTab] = useState(featureTabs[0]);

  return (
    <div className="relative w-full flex items-center justify-center lg:justify-end">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Rotating Border Accent Ring */}
      <div className="absolute inset-0 m-auto w-[94%] h-[94%] rounded-3xl border border-secondary/15 rotate-2 pointer-events-none" />

      {/* Main SaaS-Style Interactive Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative z-10 w-full max-w-xl lg:max-w-xl xl:max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/90 shadow-2xl p-3.5 sm:p-5 flex flex-col gap-4 group"
      >
        {/* Card Header: Live Status Bar */}
        <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
              Admissions Open 2026-27
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/15 text-accent-hover text-[11px] font-bold">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-primary">Aligarh Campus</span>
          </div>
        </div>

        {/* Photography Display Container */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative w-full"
            >
              <img
                src={activeTab.image}
                alt={activeTab.label}
                className="w-full h-auto object-contain rounded-2xl"
                loading="eager"
              />

              {/* Gradient Overlay & Feature Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-2xl flex flex-col justify-end p-4 sm:p-5">
                <div className="space-y-1 text-white">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent bg-primary/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {activeTab.badge}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-normal max-w-md">
                    {activeTab.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {featureTabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1.5 border text-center ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-slate-50 text-neutral-600 border-slate-200/80 hover:bg-slate-100 hover:text-primary'
                }`}
              >
                <IconComp className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-accent' : 'text-neutral-500'}`} />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Floating Micro-Badge Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-premium border border-slate-100"
      >
        <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent-hover flex items-center justify-center flex-shrink-0">
          <Award className="w-4 h-4 text-primary" />
        </div>
        <div>
          <span className="font-heading font-extrabold text-xs text-primary block leading-none">
            Top Ranked School
          </span>
          <span className="text-[10px] text-neutral-500 font-medium">Aligarh District</span>
        </div>
      </motion.div>

      {/* Floating Micro-Badge Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -bottom-5 -left-3 z-20 hidden sm:flex items-center gap-2.5 bg-primary text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10"
      >
        <div className="w-8 h-8 rounded-lg bg-white/10 text-accent flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <span className="font-heading font-extrabold text-xs text-accent block leading-none">
            100% CBSE Success
          </span>
          <span className="text-[10px] text-slate-300 font-medium">Academic Excellence</span>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroImage;
