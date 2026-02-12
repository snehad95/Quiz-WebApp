import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaIdCard,
  FaEnvelope,
  FaSignOutAlt,
  FaQuestionCircle
} from "react-icons/fa";

/* ===== Pages ===== */

function Dashboard() {
  return <h2>Welcome Candidate Dashboard</h2>;
}

function Exams() {
  return <h2>Available Exams Section</h2>;
}

function Profile() {
  return <h2>Candidate Profile Section</h2>;
}

function Help() {
  return <h2>Help & Support Section</h2>;
}

/* ===== Candidate ID Generator ===== */

function generateCandidateID() {
  return "CDC" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

/* ===== Main Quiz Page ===== */

function QuizPageHome() {

  const [candidateID] = useState(generateCandidateID());

  return (
    <div className="d-flex">

      {/* ===== Sidebar ===== */}
      <div
        style={{
          width: "260px",
          background: "#0b1c3d",
          color: "white",
          minHeight: "100vh",
          padding: "20px",
          position: "relative"
        }}
      >

        {/* Candidate Info */}
        <div className="text-center mb-4">
          <FaUserCircle size={70} />
          <h5 className="mt-2">Puri Athnere</h5>
          <p style={{ fontSize: "14px" }}>Candidate ID : {candidateID}</p>
        </div>

        <hr />

        {/* Navigation */}
        <ul style={{ listStyle: "none", padding: 0 }}>

          <li className="mb-3">
            <Link to="." className="text-white text-decoration-none">
              <FaTachometerAlt className="me-2" />
              Dashboard
            </Link>
          </li>

          <li className="mb-3">
            <Link to="exams" className="text-white text-decoration-none">
              <FaBook className="me-2" />
              Exams
            </Link>
          </li>

          <li className="mb-3">
            <Link to="profile" className="text-white text-decoration-none">
              <FaIdCard className="me-2" />
              My Profile
            </Link>
          </li>

          <li className="mb-3">
            <Link to="help" className="text-white text-decoration-none">
              <FaQuestionCircle className="me-2" />
              Help
            </Link>
          </li>

        </ul>

        <hr />

        {/* Bottom Section */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px"
          }}
        >
          <p>
            <FaEnvelope className="me-2" />
            candidate@mail.com
          </p>

          <p style={{ cursor: "pointer", color: "#ff4d4d" }}>
            <FaSignOutAlt className="me-2" />
            Sign Out
          </p>
        </div>

      </div>

      {/* ===== Main Content ===== */}
      <div className="flex-grow-1 p-4">

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="exams" element={<Exams />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
        </Routes>

      </div>

    </div>
  );
}

export default QuizPageHome;
