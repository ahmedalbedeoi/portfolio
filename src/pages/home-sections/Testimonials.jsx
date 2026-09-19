import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: 'Sara Ahmed', role: 'Frontend Student', text: 'Ahmed explains complex topics like Redux in a way that finally made sense to me. Highly recommended!' },
  { name: 'Omar Khaled', role: 'Junior Developer', text: 'The React course helped me land my first developer job. Practical and to the point.' },
  { name: 'Laila Mostafa', role: 'CS Student', text: 'Best JavaScript course I have taken. Clear explanations with real project examples.' },
];

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 rounded-2xl p-6 text-left border border-white/10">
              <FaQuoteLeft className="text-[#FF6B00] text-xl mb-4" />
              <p className="text-white/70 text-sm mb-4">{t.text}</p>
              <div>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-white/50 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
