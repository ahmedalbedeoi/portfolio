import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { HiHeart } from 'react-icons/hi';
import ProjectCard from '../components/ProjectCard';
import { projectsData, projectFilters } from '../data/projectsData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const favoriteIds = useSelector((state) => state.favorites.ids);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesFilter = activeFilter === 'All' || p.tech.includes(activeFilter);
      const matchesFavorites = !showFavoritesOnly || favoriteIds.includes(p.id);
      return matchesFilter && matchesFavorites;
    });
  }, [activeFilter, showFavoritesOnly, favoriteIds]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="text-[#A3A3A3] mt-2">A selection of things I've built.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-sm px-4 py-2 rounded-full transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-[#FF6B35] text-white'
                : 'bg-[#141414] text-[#C4C4C4] hover:bg-[#FF6B35]/10'
            }`}
          >
            {filter}
          </button>
        ))}
        <button
          onClick={() => setShowFavoritesOnly((prev) => !prev)}
          aria-label="Show favorites only"
          className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
            showFavoritesOnly
              ? 'bg-[#FF6B35] border-[#FF6B35] text-white'
              : 'border-[#2A2A2A] text-[#787878] hover:border-[#FF6B35] hover:text-[#FF6B35]'
          }`}
        >
          <HiHeart />
        </button>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[#A3A3A3]">
          {showFavoritesOnly ? "You haven't favorited any projects yet." : 'No projects found for this filter.'}
        </p>
      )}
    </section>
  );
}
