import { NavLink } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import { projectsData } from '../../data/projectsData';

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <p className="text-[#A3A3A3] mt-2">A few things I've recently built.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="text-center mt-10">
        <NavLink to="/projects" className="btn-secondary">View All Projects</NavLink>
      </div>
    </section>
  );
}
