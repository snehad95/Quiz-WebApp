import React from "react";
import { Link } from "react-router-dom";

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
    <Link to ={'/'}>Home</Link>
      <div
        className="d-flex justify-content-between align-items-center px-4"
        style={{
          backgroundColor: "#000",
          color: "white",
          fontSize: "14px",
          padding: "6px 0",
          margin: 0,
        }}
      >
        <span className="text-white fw-bold">Welcome to ExamSphere</span>

        <div className="d-flex align-items-center gap-3 fw-bold">
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

          <span style={{ cursor: "pointer" }}>A+</span>
          <span style={{ cursor: "pointer" }}>A</span>
          <span style={{ cursor: "pointer" }}>A-</span>

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
        style={{ backgroundColor: "#0b1c3d", borderBottom: "none", margin: 0 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="assets/images/logo.png"
              alt="logo"
              width="110"
              className="me-3"
            />
            <span className="fw-bold fs-3 text-white">ExamSphere</span>
          </a>

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
              <ul
                className="navbar-nav mb-0 d-flex flex-row"
                style={{ gap: "95px" }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="QuizPage"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    Exams
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ cursor: "pointer", fontSize: "18px" }}
                  >
                    Course
                  </a>
                </li>
              </ul>

              <div className="d-flex" style={{ gap: "15px" }}>
                {/*< Link to ="/Login">*/}
                <button
                  className="btn btn-outline-light px-4 rounded-pill"
                  style={{ cursor: "pointer" }}
                >
                  LogIn
                </button>
                {/*</Link>*/}

                 {/*<Link to="/create-account">*/}
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
                {/*}
                </Link> 
                */}
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
      <style jsx>{`
        .nav-link:hover {
          color: #4facfe !important;
        }
        .btn:hover {
          opacity: 0.85;
        }
      `}</style>
    </>
  );
}

export default Header;
