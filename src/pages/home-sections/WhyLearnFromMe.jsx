import { HiCode, HiAcademicCap, HiSparkles, HiLightBulb } from 'react-icons/hi';

const items = [
  { icon: <HiCode />, title: 'Practical Projects', desc: 'Learn by building real, portfolio-worthy projects.' },
  { icon: <HiAcademicCap />, title: 'Beginner Friendly', desc: 'Clear explanations designed for all skill levels.' },
  { icon: <HiSparkles />, title: 'Modern Technologies', desc: 'Stay up to date with the latest tools and practices.' },
  { icon: <HiLightBulb />, title: 'Real Examples', desc: 'Concepts tied to real-world use cases, not theory alone.' },
];

export default function WhyLearnFromMe() {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111111]">Why Learn From Me</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="card p-6 text-left bg-white">
              <div className="text-3xl text-[#FF6B00] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-[#111111] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
