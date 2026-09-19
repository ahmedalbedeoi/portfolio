import { useEffect, useRef, useState } from 'react';
import { HiAcademicCap, HiCode, HiBookOpen } from 'react-icons/hi';

const timeline = [
  { year: 'Year 1', title: 'IT Support Specialist', desc: 'Started my career in IT Support, handling networking, systems, and hands-on technical troubleshooting.', icon: <HiBookOpen /> },
  { year: 'Courses', title: 'Azur Claude . CCNA · Network+ · A+ · MCSA ' , desc: 'Built a strong foundation in networking and systems administration.', icon: <HiAcademicCap /> },
  { year: 'Ongoing', title: 'Learning Front-End Development', desc: 'Diving deep into Nextjs, React, Redux Toolkit, and modern JavaScript to build real projects.', icon: <HiCode /> },
  { year: 'Now', title: 'Building My Portfolio', desc: 'Applying what I learn by building complete, production-style web applications.', icon: <HiCode /> },
];

const stats = [
  { label: 'Certifications', value: 4 },
  { label: 'Projects Built', value: 6 },
  { label: 'Technologies', value: 10 },
  { label: 'Years in IT', value: 1 },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-[#FF6B35]">
      {count}+
    </span>
  );
}

export default function About() {
  return (
    <div>
      {/* Introduction */}
      <section className="bg-[#0A0A0A] text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          I'm Ahmed M Ibrahim, an IT Support professional building my path into Front-End Development.
          I enjoy solving technical problems and creating clean, responsive web applications with
          React and modern JavaScript tools.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-12">Experience</h2>
        <div className="relative border-l-2 border-[#2A2A2A] ml-4">
          {timeline.map((item, i) => (
            <div key={i} className="mb-10 ml-8 relative">
              <span className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B35] text-white text-sm">
                {item.icon}
              </span>
              <p className="text-sm text-[#FF6B35] font-medium mb-1">{item.year}</p>
              <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              <p className="text-sm text-[#A3A3A3] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">My Goal</h2>
          <p className="text-[#C4C4C4]">
            I'm combining my IT support background with growing front-end skills to move into a
            full-time developer role. Every project I build focuses on writing clean code, solving
            real problems, and creating a smooth user experience.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter value={stat.value} />
              <p className="text-sm text-[#A3A3A3] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
