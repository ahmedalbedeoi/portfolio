import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/70 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Ahmed<span className="text-[#FF6B35]">.dev</span>
          </h3>
          <p className="text-sm max-w-xs">
            Front-End Developer building clean, modern, and responsive web experiences.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <NavLink to="/projects" className="hover:text-[#FF6B35] text-sm">Projects</NavLink>
          <NavLink to="/about" className="hover:text-[#FF6B35] text-sm">About</NavLink>
          <NavLink to="/skills" className="hover:text-[#FF6B35] text-sm">Skills</NavLink>
          <NavLink to="/contact" className="hover:text-[#FF6B35] text-sm">Contact</NavLink>
        </div>

        <div className="flex gap-4 text-xl">
          <a href="https://github.com/ahmedalbedeoi" aria-label="GitHub" className="hover:text-[#FF6B35]"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ahmedalbedeoi" aria-label="LinkedIn" className="hover:text-[#FF6B35]"><FaLinkedin /></a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/10 text-xs text-center">
        © {new Date().getFullYear()} Ahmed M Ibrahim. All rights reserved.
      </div>
    </footer>
  );
}
