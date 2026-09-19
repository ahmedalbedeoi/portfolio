const skills = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Redux Toolkit', level: 85 },
  { name: 'Tailwind CSS / Bootstrap', level: 88 },
];

export default function SkillsOverview() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Skills Overview</h2>
      </div>
      <div className="flex flex-col gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-white text-sm">{skill.name}</span>
              <span className="text-sm text-[#A3A3A3]">{skill.level}%</span>
            </div>
            <div className="w-full h-2.5 bg-[#141414] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF6B35] rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
