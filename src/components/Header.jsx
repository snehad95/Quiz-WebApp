import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import Course from "./Course";
import FeatureBoxes from "./FeatureBoxes";
>>>>>>> upstream/main

function Header() {
  // Google search function
  const googleSearch = () => {
    const query = document.getElementById("googleSearch").value;
    if (query) {
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  };

  return (
    <>
      {/* ===== Top Black Accessibility Bar ===== */}
      <Link to="/">Home</Link>

      <div
        className="d-flex justify-content-between align-items-center px-4"
        style={{
          backgroundColor: "#000",
          color: "white",
          fontSize: "14px",
          padding: "6px 0",
<<<<<<< HEAD
=======
          margin: 0,
>>>>>>> upstream/main
        }}
      >
        <span className="text-white fw-bold">Welcome to ExamSphere</span>

        <div className="d-flex align-items-center gap-3 fw-bold">
<<<<<<< HEAD

          {/* Language Links */}
          <Link to="/" className="text-white text-decoration-none">
            🌐 English
          </Link>

          <span>|</span>

          <Link to="/" className="text-white text-decoration-none">
            हिंदी
          </Link>

          <span>|</span>

          <Link to="/" className="text-white text-decoration-none">
            Sitemap
          </Link>

          <span>|</span>

          <Link to="/" className="text-white text-decoration-none">
            Contact Us
          </Link>

          <span>|</span>

          <Link to="/" className="text-white text-decoration-none">
            Feedback
          </Link>

          <span>|</span>

          <Link to="/" className="text-white text-decoration-none">
            FAQ
          </Link>
=======
          <a href="/en" className="text-white text-decoration-none">
            🌐 English
          </a>
          <span>|</span>
          <a href="/hi" className="text-white text-decoration-none">
            हिंदी
          </a>
          <span>|</span>
          <a href="/sitemap" className="text-white text-decoration-none">
            Sitemap
          </a>
          <span>|</span>
          <a href="/contact" className="text-white text-decoration-none">
            Contact Us
          </a>
          <span>|</span>
          <a href="/feedback" className="text-white text-decoration-none">
            Feedback
          </a>
          <span>|</span>
          <a href="/faq" className="text-white text-decoration-none">
            FAQ
          </a>
>>>>>>> upstream/main

          <span style={{ cursor: "pointer" }}>A+</span>
          <span style={{ cursor: "pointer" }}>A</span>
          <span style={{ cursor: "pointer" }}>A-</span>

          {/* Google Search */}
          <form
            className="d-flex ms-3"
            onSubmit={(e) => {
              e.preventDefault();
              googleSearch();
            }}
          >
            <input
              id="googleSearch"
              autoComplete="off"
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
            />
            <button type="submit" className="btn btn-outline-success btn-sm">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0b1c3d" }}
      >
        <div className="container-fluid">
<<<<<<< HEAD

          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center text-decoration-none"
          >
=======
          <a className="navbar-brand d-flex align-items-center" href="#">
>>>>>>> upstream/main
            <img
              src="assets/images/logo.png"
              alt="logo"
              width="110"
              className="me-3"
            />
            <span className="fw-bold fs-3 text-white">ExamSphere</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              className="ms-auto d-flex align-items-center"
              style={{ gap: "30px" }}
            >
<<<<<<< HEAD

              {/* Navbar Menu */}
=======
>>>>>>> upstream/main
              <ul
                className="navbar-nav mb-0 d-flex flex-row"
                style={{ gap: "95px" }}
              >
                <li className="nav-item">
<<<<<<< HEAD
                  <Link
                    to="/"
                    className="nav-link text-white fw-semibold"
                    style={{ fontSize: "18px" }}
                  >
                    Home
=======
                  <Link to="/">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    Home
                  </a>
>>>>>>> upstream/main
                  </Link>
                </li>

                <li className="nav-item">
<<<<<<< HEAD
                  <Link
                    to="About"
                    className="nav-link text-white fw-semibold"
                    style={{ fontSize: "18px" }}
                  >
                    About
=======
                  <Link to="About">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    About
                  </a>
>>>>>>> upstream/main
                  </Link>
                </li>

                <li className="nav-item">
<<<<<<< HEAD
                  <Link
                    to="/QuizPage"
                    className="nav-link text-white fw-semibold"
                    style={{ fontSize: "18px" }}
                  >
                    Exams
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="Course"
                    className="nav-link text-white fw-semibold"
                    style={{ fontSize: "18px" }}
                  >
                    Course
                  </Link>
=======
                  < Link to="Exams">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    Exams
                  </a>
                  </Link>
                </li>
                <Link to ="/Course">
                <li className="nav-item">
                  
                  <a 
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    Course
                  </a>
>>>>>>> upstream/main
                </li>
                </Link>
              </ul>

              {/* Buttons */}
              <div className="d-flex" style={{ gap: "15px" }}>
<<<<<<< HEAD
                <button className="btn btn-outline-light px-4 rounded-pill">
                  LogIn
                </button>

                <button
                  className="btn px-4 rounded-pill text-white"
                  style={{
                    background: "linear-gradient(45deg,#4facfe,#00f2fe)",
                    border: "none",
                  }}
                >
                  Create Account
=======
                < Link to ="/Login">
                <button
                  className="btn btn-outline-light px-4 rounded-pill"
                  style={{ cursor: "pointer" }}
                >
                  LogIn
>>>>>>> upstream/main
                </button>
                </Link>

                 <Link to="/create-account">
                 <button
                  className="btn px-4 rounded-pill text-white"
                  style={{
                    background: "linear-gradient(45deg,#4facfe,#00f2fe)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  
                >
                  Create Account
                </button> 
                </Link> 
                {/* <Link to="/create-account">
                  <button className="btn px-4 rounded-pill text-white">
                    Create Account
                  </button>
                </Link> */}
              </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Hover effect */}
      <style>
        {`
          .nav-link:hover {
            color: #4facfe !important;
          }

          .btn:hover {
            opacity: 0.85;
          }
        `}
      </style>
    </>
  );
}

export default Header;
