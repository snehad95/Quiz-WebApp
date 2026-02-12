import React from "react";

/* ================= DATA ================= */

/* Trending Courses */
const trendingSlide1 = [
  { title: "AI Security Essentials", img: "/assets/images/cor1.jpg" },
  { title: "Software Development", img: "/assets/images/cor2.jpg" },
  { title: "Machine Learning", img: "/assets/images/cor3.jpg" },
  { title: "Hardware Engineering", img: "/assets/images/cor4.jpg" },
];

const trendingSlide2 = [
  { title: "Cloud Computing", img: "/assets/images/cor5.jpg" },
  { title: "Cyber Security", img: "/assets/images/cor6.jpg" },
  { title: "DevOps Fundamentals", img: "/assets/images/cor7.jpg" },
  { title: "Data Science", img: "/assets/images/cor8.jpg" },
];

/* AIML Courses */
const aimlSlide1 = [
  { title: "AI Fundamentals", img: "/assets/images/ai1.jpg" },
  { title: "Machine Learning Basics", img: "/assets/images/ai2.jpg" },
  { title: "Deep Learning", img: "/assets/images/ai3.jpg" },
  { title: "Neural Networks", img: "/assets/images/ai4.jpg" },
];

const aimlSlide2 = [
  { title: "NLP Essentials", img: "/assets/images/ai5.jpg" },
  { title: "Computer Vision", img: "/assets/images/ai6.jpg" },
  { title: "AI with Python", img: "/assets/images/ai7.jpg" },
  { title: "MLOps Basics", img: "/assets/images/ai8.jpg" },
];

/* FEATURED COURSES */
const featuredSlide1 = [
  { title: "Full Stack Web Development", img: "/assets/images/feat1.jpg" },
  { title: "Advanced React", img: "/assets/images/feat2.jpg" },
  { title: "Node.js Mastery", img: "/assets/images/feat3.jpg" },
  { title: "System Design Basics", img: "/assets/images/feat4.jpg" },
];

const featuredSlide2 = [
  { title: "Java Programming", img: "/assets/images/feat5.jpg" },
  { title: "Python for Professionals", img: "/assets/images/feat6.jpg" },
  { title: "C++ Advanced Concepts", img: "/assets/images/feat7.jpg" },
  { title: "Database Design", img: "/assets/images/feat8.jpg" },
];

/* ================= COMPONENT ================= */

function Course() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* MAIN HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
        Career-Focused Learning Paths
      </h2>

      {/* ================= TRENDING COURSES ================= */}
      <Section title="Trending Courses" slides={[trendingSlide1, trendingSlide2]} />

      {/* ================= AIML COURSES ================= */}
      <Section
        title={
          <>
            Top Courses in <span className="text-blue-900">AIML</span>
          </>
        }
        slides={[aimlSlide1, aimlSlide2]}
      />

      {/* ================= FEATURED COURSES ================= */}
      <Section
        title={
          <>
            <span className="text-blue-900">Featured</span> Courses
          </>
        }
        slides={[featuredSlide1, featuredSlide2]}
      />
    </div>
  );
}

/* ================= REUSABLE SECTION ================= */

function Section({ title, slides }) {
  return (
    <div className="mb-12">
      <h4 className="text-xl md:text-2xl font-semibold mb-4">{title}</h4>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide pb-2">
        {slides.flat().map((course, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 sm:w-56 md:w-64 lg:w-72 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img src={course.img} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold text-gray-700">{course.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
