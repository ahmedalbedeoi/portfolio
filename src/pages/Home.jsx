import { NavLink } from 'react-router-dom';
import { HiSparkles, HiArrowRight } from 'react-icons/hi';
import FeaturedProjects from './home-sections/FeaturedProjects';
import WhatIDo from './home-sections/WhatIDo';
import SkillsOverview from './home-sections/SkillsOverview';

const stats = [
  { value: '6+', label: 'PROJECTS' },
  { value: '4', label: 'CERTIFICATIONS' },
  { value: '1yr', label: 'IT EXPERIENCE' },
];

function Hero() {
  return (
    <section className="bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Orange gradient accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl" />
      <div className="absolute top-60 -left-40 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-8 text-sm text-[#FF6B35]">
            <HiSparkles /> Available for new projects & collaborations
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-[#FF6B35]">Ahmed</span>
            <br />
            M Ibrahim.
          </h1>

          <p className="text-[#A3A3A3] max-w-lg mb-10 text-lg">
            Front-End Developer building modern, responsive web applications with React, Redux,
            and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <NavLink to="/projects" className="btn-primary flex items-center gap-2 justify-center">
              View Projects <HiArrowRight />
            </NavLink>
            <NavLink to="/contact" className="btn-secondary text-center">
              Contact Me
            </NavLink>
          </div>

          <div className="border-t border-[#2A2A2A] pt-8 flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-[#FF6B35]">{stat.value}</p>
                <p className="text-xs text-[#787878] tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - code card */}
        <div className="relative">
          <div className="rounded-2xl border border-[#FF6B35]/40 bg-[#141414] p-10 shadow-2xl shadow-orange-500/10">
            <div className="flex items-center justify-center h-56">
              <span className="text-8xl font-bold text-[#FF6B35] font-mono">{'</>'}</span>
            </div>
            <div className="mt-6 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] px-5 py-4">
              <p className="font-semibold text-white">React + Redux Toolkit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhatIDo />
      <SkillsOverview />
    </>
  );
}
