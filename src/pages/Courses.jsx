import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { HiSearch, HiHeart } from 'react-icons/hi';
import CourseCard from '../components/CourseCard';
import { coursesData, categories } from '../data/coursesData';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const favoriteIds = useSelector((state) => state.favorites.ids);

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesFavorites = !showFavoritesOnly || favoriteIds.includes(course.id);
      return matchesCategory && matchesSearch && matchesFavorites;
    });
  }, [activeCategory, search, showFavoritesOnly, favoriteIds]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#111111]">All Courses</h1>
        <p className="text-gray-500 mt-2">Browse all programming courses and start learning today.</p>
      </div>

      {/* Search bar */}
      <div className="relative max-w-md mx-auto mb-8 flex items-center gap-3">
        <div className="relative flex-1">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#FF6B00] transition-colors"
          />
        </div>
        <button
          onClick={() => setShowFavoritesOnly((prev) => !prev)}
          aria-label="Show favorites only"
          className={`flex items-center justify-center w-11 h-11 rounded-full border transition-colors ${
            showFavoritesOnly
              ? 'bg-[#FF6B00] border-[#FF6B00] text-white'
              : 'border-gray-200 text-gray-400 hover:border-[#FF6B00] hover:text-[#FF6B00]'
          }`}
        >
          <HiHeart />
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === cat
                ? 'bg-[#FF6B00] text-white'
                : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#FF6B00]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-12">
          {showFavoritesOnly ? "You haven't favorited any courses yet." : 'No courses found matching your search.'}
        </p>
      )}
    </section>
  );
}
