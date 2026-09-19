import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/slices/favoritesSlice';

export default function ProjectCard({ project }) {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.ids);
  const { id, title, description, tech, github, demo, color, image } = project;
  const isFavorite = favoriteIds.includes(id);

  return (
    <div className="card overflow-hidden text-left">
      <div
        className="h-40 flex items-center justify-center text-4xl font-bold text-white relative"
        style={{ backgroundColor: color }}
      >
        {image}
        <button
          onClick={() => dispatch(toggleFavorite(id))}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute top-3 right-3 text-xl text-white bg-black/20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/40 transition-colors"
        >
          {isFavorite ? <HiHeart className="text-[#FF6B35]" /> : <HiOutlineHeart />}
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-[#A3A3A3] mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-[#141414] rounded-full text-[#C4C4C4]">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 btn-secondary text-sm py-2"
          >
            <FaGithub /> Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 btn-primary text-sm py-2"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
