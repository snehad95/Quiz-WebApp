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
    <div className="container mt-5">
      {/* MAIN HEADING */}
      <h2 className="text-center mb-4" style={{ color: "#324A8E" }}>
        Career-Focused Learning Paths
      </h2>

      {/* ================= TRENDING COURSES ================= */}
      <h4 className="mb-3">Trending Courses</h4>
      <Carousel id="trendingCarousel" slide1={trendingSlide1} slide2={trendingSlide2} />

      {/* ================= AIML COURSES ================= */}
      <h4 className="mt-5 mb-3">
        Top Courses in <span style={{ color: "#324A8E" }}>AIML</span>
      </h4>
      <Carousel id="aimlCarousel" slide1={aimlSlide1} slide2={aimlSlide2} />

      {/* ================= FEATURED COURSES ================= */}
      <h4 className="mt-5 mb-3">
        <span style={{ color: "#324A8E" }}>Featured</span> Courses
      </h4>
      <Carousel id="featuredCarousel" slide1={featuredSlide1} slide2={featuredSlide2} />
    </div>
  );
}

/* ================= REUSABLE CAROUSEL ================= */

function Carousel({ id, slide1, slide2 }) {
  return (
    <div id={id} className="carousel slide position-relative mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            {slide1.map((course, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card h-100">
                  <img src={course.img} className="card-img-top" alt={course.title} />
                  <div className="card-body text-center">
                    <p className="card-text">{course.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            {slide2.map((course, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card h-100">
                  <img src={course.img} className="card-img-top" alt={course.title} />
                  <div className="card-body text-center">
                    <p className="card-text">{course.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
