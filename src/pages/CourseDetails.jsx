import { useParams, NavLink } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

export default function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#111111]">Course not found</h1>
        <NavLink to="/courses" className="btn-primary inline-block mt-6">Back to Courses</NavLink>
      </section>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="text-white py-20 px-6 text-center"
        style={{ backgroundColor: course.color }}
      >
        <span className="inline-block bg-white/20 text-sm px-3 py-1 rounded-full mb-4">{course.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{course.title}</h1>
        <p className="text-white/80 max-w-xl mx-auto">{course.description}</p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 text-left">
        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-10 text-sm">
          <span className="px-4 py-2 bg-[#F5F5F5] rounded-full">{course.lessons} Lessons</span>
          <span className="px-4 py-2 bg-[#F5F5F5] rounded-full">{course.duration}</span>
          <span className="px-4 py-2 bg-[#F5F5F5] rounded-full">{course.level}</span>
        </div>

        {/* Curriculum */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#111111] mb-4">Curriculum</h2>
          <ul className="space-y-2">
            {['Introduction & Setup', 'Core Concepts', 'Hands-on Project', 'Best Practices', 'Final Assessment'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-xl text-sm text-[#111111]">
                <span className="text-[#FF6B00] font-bold">{i + 1}.</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#111111] mb-4">Requirements</h2>
          <p className="text-gray-500 text-sm">A computer with internet access. No prior experience required unless stated as Intermediate/Advanced.</p>
        </div>

        {/* Skills Learned */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#111111] mb-4">Skills You'll Learn</h2>
          <div className="flex flex-wrap gap-2">
            {[course.category, 'Problem Solving', 'Best Practices', 'Real Projects'].map((skill) => (
              <span key={skill} className="text-xs px-3 py-1.5 border border-[#FF6B00] text-[#FF6B00] rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-100">
          <button className="btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}
