import CourseCard from '../../components/CourseCard';
import { coursesData } from '../../data/coursesData';

export default function FeaturedCourses() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#111111]">Featured Courses</h2>
        <p className="text-gray-500 mt-2">Everything you need to become a professional front-end developer.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
