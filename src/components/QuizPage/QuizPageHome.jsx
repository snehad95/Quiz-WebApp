import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaIdCard,
  FaEnvelope,
  FaSignOutAlt,
  FaQuestionCircle,
  FaBell,
  FaShieldAlt
} from "react-icons/fa";
import DashBoard from "./DashBoard";

/* ===== Temporary Pages ===== */



function Exams() {
  return <h3>Exams Content Area</h3>;
}

function Profile() {
  return <h3>Profile Content Area</h3>;
}

function Help() {
  return <h3>Help Content Area</h3>;
}

/* ===== Candidate ID Generator ===== */

function generateCandidateID() {
  return "CDC" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function QuizPageHome() {

  const navigate = useNavigate();

  const [candidateID] = useState(generateCandidateID());
  const [sessionTime, setSessionTime] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const lastLogin = new Date().toLocaleString();

  /* ===== Session Timer ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <div className="d-flex">

      {/* ================= Sidebar ================= */}
      <div
        style={{
          width: "270px",
          background: "#0b1c3d",
          color: "white",
          minHeight: "100vh",
          padding: "20px",
          position: "relative"
        }}
      >

        {/* Candidate Identity */}
        <div className="text-center mb-4">
          <FaUserCircle size={70} />
          <h5 className="mt-2">Purva Athnere</h5>

          <p style={{ fontSize: "14px" }}>ID : {candidateID}</p>

          <p style={{ fontSize: "13px", opacity: 0.8 }}>
            ACTS C-DAC Delhi
          </p>

          {/* Exam Status Badge */}
          <span
            style={{
              background: "#28a745",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "12px"
            }}
          >
            Active
          </span>
        </div>

        <hr />

        {/* Navigation */}
        <ul style={{ listStyle: "none", padding: 0 }}>

          <li className="mb-3">
            <Link to="/QuizPage" className="text-white text-decoration-none">
              <FaTachometerAlt className="me-2" /> Dashboard
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/QuizPage/exams" className="text-white text-decoration-none">
              <FaBook className="me-2" /> Exams
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/QuizPage/profile" className="text-white text-decoration-none">
              <FaIdCard className="me-2" /> Profile
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/QuizPage/help" className="text-white text-decoration-none">
              <FaQuestionCircle className="me-2" /> Help
            </Link>
          </li>

        </ul>

        <hr />

        {/* Security Indicators */}
        <div style={{ fontSize: "14px" }}>
          <p><FaShieldAlt /> Device Bound ✔</p>
          <p><FaShieldAlt /> Secure Session ✔</p>
          <p><FaShieldAlt /> Fullscreen Required ✔</p>
        </div>

        {/* Bottom Section */}
        <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
          <p>
            <FaEnvelope className="me-2" />
            candidate@mail.com
          </p>

          <p
            style={{ cursor: "pointer", color: "#ff4d4d" }}
            onClick={logoutHandler}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </p>
        </div>

      </div>

      {/* ================= Main Section ================= */}
      <div className="flex-grow-1">

        {/* ===== Top Header ===== */}
        <div
          style={{
            background: "#f5f6fa",
            padding: "15px 25px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative"
          }}
        >

          {/* Security Status */}
          <div>
            <FaShieldAlt color="green" /> Secure Session Active
          </div>

          {/* Right Section */}
          <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>

            {/* Notification Bell */}
            <div style={{ position: "relative" }}>
              <FaBell
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => setShowNotification(!showNotification)}
              />

              {showNotification && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "30px",
                    width: "250px",
                    background: "white",
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                  }}
                >
                  <p>📌 New Exam Scheduled</p>
                  <p>📌 Result Declared</p>
                  <p>⚠ Security Alert</p>
                </div>
              )}
            </div>

            {/* Session Timer */}
            <div>Session : {formatTime(sessionTime)}</div>

            {/* Last Login */}
            <div style={{ fontSize: "13px", opacity: 0.7 }}>
              Last Login : {lastLogin}
            </div>

          </div>

        </div>

        {/* ===== Page Content ===== */}
        <div style={{ padding: "25px" }}>

          <Routes>
      
             <Route index element={<DashBoard />} />
            <Route path="exams" element={<Exams />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
          </Routes>

        </div>

      </div>

    </div>
  );
}

export default QuizPageHome;
