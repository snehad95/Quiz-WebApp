import React from "react";
import { Link } from "react-router-dom";

function Header({ setPopup, user, setUser }) {

  const googleSearch = () => {
    const query = document.getElementById("googleSearch").value;
    if (query) {
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  };

  return (
    <>
      {/* ===== Top Black Bar ===== */}
      <div
        className="d-flex justify-content-between align-items-center px-4"
        style={{
          backgroundColor: "#000",
          color: "white",
          fontSize: "14px",
          padding: "6px 0",
        }}
      >
        <span className="text-white fw-bold">
          Welcome to ExamSphere
        </span>

        <div className="d-flex align-items-center gap-3 fw-bold">
          <Link to="/" className="text-white text-decoration-none">
            🌐 English
          </Link>
          <span>|</span>
          <Link to="/" className="text-white text-decoration-none">
            हिंदी
          </Link>

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

      {/* ===== Navbar ===== */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0b1c3d" }}
      >
        <div className="container-fluid">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center text-decoration-none"
          >
            <img
              src="assets/images/logo.png"
              alt="logo"
              width="110"
              className="me-3"
            />
            <span className="fw-bold fs-3 text-white">
              ExamSphere
            </span>
          </Link>

          <div className="collapse navbar-collapse">
            <div
              className="ms-auto d-flex align-items-center"
              style={{ gap: "30px" }}
            >
              {/* Menu */}
              <ul
                className="navbar-nav mb-0 d-flex flex-row"
                style={{ gap: "40px" }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white fw-semibold">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link text-white fw-semibold">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/QuizPage" className="nav-link text-white fw-semibold">
                    Exams
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Course" className="nav-link text-white fw-semibold">
                    Course
                  </Link>
                </li>
              </ul>

              {/* Auth Buttons */}
              <div className="ms-3">
                {!user ? (
                  <>
                    <button
                      className="btn btn-outline-light me-2"
                      onClick={() => setPopup("login")}
                    >
                      Login
                    </button>

                    <button
                      className="btn btn-warning"
                      onClick={() => setPopup("create")}
                    >
                      Create Account
                    </button>
                  </>
                ) : (
                  <div className="d-flex align-items-center gap-3 text-white">
                    <span style={{ fontWeight: "600" }}>
                      👤 {user.name}
                    </span>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => setUser(null)}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </nav>

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