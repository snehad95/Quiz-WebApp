import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header({ setPopup, user, setUser }) {
  const { t, i18n } = useTranslation();

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
        <span className="text-white fw-bold">{t("welcome")}</span>

        <div className="d-flex align-items-center gap-3 fw-bold">
          <button
            onClick={() => {
              i18n.changeLanguage("en");
              localStorage.setItem("lang", "en");
            }}
            className="text-white border-0 bg-transparent"
          >
            🌐 English
          </button>

          <span className="text-white mx-2">|</span>

          <button
            onClick={() => {
              i18n.changeLanguage("hi");
              localStorage.setItem("lang", "hi");
            }}
            className="text-white border-0 bg-transparent"
          >
            हिंदी
          </button>

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
              placeholder={t("search")}
            />
            <button type="submit" className="btn btn-outline-success btn-sm">
              {t("search")}
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
            <span className="fw-bold fs-3 text-white">ExamSphere</span>
          </Link>

          <div className="collapse navbar-collapse">
            <div
              className="ms-auto d-flex align-items-center"
              style={{ gap: "30px" }}
            >
              <ul
                className="navbar-nav mb-0 d-flex flex-row"
                style={{ gap: "40px" }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white fw-semibold">
                    {t("home")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link text-white fw-semibold">
                    {t("about")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/Exams"
                    className="nav-link text-white fw-semibold"
                  >
                    {t("exams")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/Course"
                    className="nav-link text-white fw-semibold"
                  >
                    {t("course")}
                  </Link>
                </li>
              </ul>

              <div className="ms-3">
                {!user ? (
                  <>
                    <button
                      className="btn btn-outline-light me-2"
                      onClick={() => setPopup("login")}
                    >
                      {t("login")}
                    </button>

                    <button
                      className="btn btn-warning"
                      onClick={() => setPopup("create")}
                    >
                      {t("createAccount")}
                    </button>
                  </>
                ) : (
                  <div className="d-flex align-items-center gap-3 text-black">
                    <span style={{ fontWeight: "600" }}>👤 {user.name}</span>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => setUser(null)}
                    >
                      {t("logout")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
