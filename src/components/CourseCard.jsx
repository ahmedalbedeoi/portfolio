import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { toggleFavorite } from '../store/slices/favoritesSlice';

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.ids);
  const { id, title, description, lessons, level, image, color = '#FF6B00' } = course;
  const isFavorite = favoriteIds.includes(id);

  return (
    <div className="card overflow-hidden">
      <div
        className="h-40 flex items-center justify-center text-4xl font-bold text-white relative"
        style={{ backgroundColor: color }}
      >
        {image}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleFavorite(id));
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute top-3 right-3 text-xl text-white bg-black/20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/40 transition-colors"
        >
          {isFavorite ? <HiHeart className="text-[#FF6B00]" /> : <HiOutlineHeart />}
        </button>
      </div>
      <div className="p-5 text-left">
        <h3 className="font-semibold text-lg text-[#111111] mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{lessons} Lessons</span>
          <span className="px-2 py-1 bg-[#F5F5F5] rounded-full">{level}</span>
        </div>
        <button onClick={() => navigate(`/courses/${id}`)} className="btn-secondary w-full text-sm py-2">
          View Details
        </button>
      </div>
    </div>
  );
}
