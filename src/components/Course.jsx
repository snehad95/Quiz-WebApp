import React from "react";
import { Link } from "react-router-dom"; // ✅ ADDED
/* ================= DATA ================= */

/* Trending Courses */
const trendingSlide1 = [
  { title: "AI Security Essentials", img: "/assets/images/course/course1.png" },
  { title: "Cyber Security", img: "/assets/images/course/course2.jpg" },
  { title: "Machine Learning", img: "/assets/images/course/course3.jpg" },
  { title: "DevOps Fundamentals", img: "/assets/images/course/course4.jpg" },
];

const trendingSlide2 = [
  { title: "Cloud Computing", img: "/assets/images/course/course5.jpg" },
  { title: "Data Structure And Algo", img: "/assets/images/course/course6.jpg" },
  { title: "DevOps Fundamentals", img: "/assets/images/course/course7.jpg" },
  { title: "Data Science", img: "/assets/images/course/course8.jpg" },
];

/* AIML Courses */
const aimlSlide1 = [
  { title: "AI Fundamentals", img: "/assets/images/course/c1.jpg" },
  { title: "Machine Learning Basics", img: "/assets/images/course/c2.jpg" },
  { title: "Deep Learning", img: "/assets/images/course/c3.jpg" },
  { title: "Neural Networks", img: "/assets/images/course/c4.jpg" },
];

const aimlSlide2 = [
  { title: "NLP Essentials", img: "/assets/images/course/c5.jpg" },
  { title: "Computer Vision", img: "/assets/images/course/c6.jpg" },
  { title: "AI with Python", img: "/assets/images/course/c7.jpg" },
  { title: "MLOps Basics", img: "/assets/images/course/c8.jpg" },
];

/* FEATURED COURSES */
const featuredSlide1 = [
  { title: "Full Stack Web Development", img: "/assets/images/course/f1.jpg" },
  { title: "Advanced React", img: "/assets/images/course/f2.jpg" },
  { title: "Node.js Mastery", img: "/assets/images/course/f3.jpg" },
  { title: "System Design Basics", img: "/assets/images/course/f4.jpg" },
];

const featuredSlide2 = [
  { title: "Java Programming", img: "/assets/images/course/f5.jpg" },
  { title: "Python for Professionals", img: "/assets/images/course/f6.jpg" },
  { title: "C++ Advanced Concepts", img: "/assets/images/course/f7.jpg" },
  { title: "Database Design", img: "/assets/images/course/f9.jpg" },
];

/* ================= COMPONENT ================= */

function Course() {
  return (
    <div className="container mt-5">
      {/* MAIN HEADING */}
      <h2 className="text-center mb-4" style={{ color: "#324A8E" }}>
        Career-Focused Learning Paths
      </h2>

      {/* === TRENDING COURSES ===*/}
      <h4 className="mb-3">Trending Courses</h4>
      <Carousel id="trendingCarousel" slide1={trendingSlide1} slide2={trendingSlide2} />

      {/* === AIML COURSES ===*/}
      <h4 className="mt-5 mb-3">
        Top Courses in <span style={{ color: "#324A8E" }}>AIML</span>
      </h4>
      <Carousel id="aimlCarousel" slide1={aimlSlide1} slide2={aimlSlide2} />

      {/* === FEATURED COURSES === */}
      <h4 className="mt-5 mb-3">
        <span style={{ color: "#324A8E" }}>Featured</span> Courses
      </h4>
      <Carousel id="featuredCarousel" slide1={featuredSlide1} slide2={featuredSlide2} />
    </div>
  );
}

/* === REUSABLE CAROUSEL === */

function Carousel({ id, slide1, slide2 }) {
  const renderSlide = (slide) =>
    slide.map((course, index) => {
      // ✅ Wrap each card with Link to navigate to CourseDetailedPage
      const courseId = course.title.toLowerCase().replace(/\s+/g, "-"); 
      return (
        <div className="col-md-3 col-sm-6 mb-4" key={index}>
          <Link to={`/courses/${courseId}`}>
            <div className="card h-100 cursor-pointer">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-lg"
                style={{ height: "200px" }}
              />
              <div className="card-body text-center">
                <p className="card-text">{course.title}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div id={id} className="carousel slide relative mb-8" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">{renderSlide(slide1)}</div>
        </div>
        <div className="carousel-item">
          <div className="row">{renderSlide(slide2)}</div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
        style={{ marginLeft: "-130px" }}
      >
        <span style={{ fontSize: "30px", color: "black" }}>&#10094;</span>
      </button>

      {/* RIGHT ARROW */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
        style={{ marginRight: "-130px" }}
      >
        <span style={{ fontSize: "30px", color: "black" }}>&#10095;</span>
      </button>
    </div>
  );
}

export default Course;