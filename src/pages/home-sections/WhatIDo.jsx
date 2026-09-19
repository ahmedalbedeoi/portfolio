import { HiCode, HiDeviceMobile, HiLightningBolt, HiPuzzle } from 'react-icons/hi';

const items = [
  { icon: <HiCode />, title: 'Clean, Modern Code', desc: 'Writing readable, maintainable React and JavaScript.' },
  { icon: <HiDeviceMobile />, title: 'Responsive Design', desc: 'Interfaces that work smoothly on any screen size.' },
  { icon: <HiLightningBolt />, title: 'Performance Focused', desc: 'Fast-loading, optimized web applications.' },
  { icon: <HiPuzzle />, title: 'Problem Solver', desc: 'Comfortable debugging and connecting frontend to real systems.' },
];

export default function WhatIDo() {
  return (
    <section className="bg-[#141414] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What I Do</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="card p-6 text-left bg-[#1C1C1C]">
              <div className="text-3xl text-[#FF6B35] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#A3A3A3]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
