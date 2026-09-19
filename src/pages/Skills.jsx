import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaUsers } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux, SiNpm } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiChatAlt2, HiLightBulb } from 'react-icons/hi';
import { FcNext } from 'react-icons/fc';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Nextjs', icon: <FcNext /> },      { name: 'React', icon: <FaReact /> },
      { name: 'Redux', icon: <SiRedux /> },{ name: 'JavaScript', icon: <FaJs /> },
      
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'CSS', icon: <FaCss3Alt /> },

            { name: 'HTML', icon: <FaHtml5 /> },

      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'npm', icon: <SiNpm /> },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration', icon: <FaUsers /> },
      { name: 'Communication', icon: <HiChatAlt2 /> },
      { name: 'Problem Solving', icon: <HiLightBulb /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-white">Skills</h1>
        <p className="text-[#A3A3A3] mt-2">Technologies and tools I work with every day.</p>
      </div>

      <div className="flex flex-col gap-14">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xl font-semibold text-white mb-6 border-l-4 border-[#FF6B35] pl-3">
              {cat.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="card flex flex-col items-center justify-center gap-3 py-8 px-4"
                >
                  <div className="text-3xl text-[#FF6B35]">{skill.icon}</div>
                  <p className="text-sm font-medium text-white text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
