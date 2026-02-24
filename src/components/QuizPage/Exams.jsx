import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Card({ img, title, desc }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="col-md-4">
      <div
        className="card mx-auto text-center p-3"
        style={{
          width: "14rem",
          borderRadius: "12px",
          border: "1px solid #ddd",
          boxShadow: hover
            ? "0 12px 25px rgba(0,0,0,0.25)"
            : "0 6px 15px rgba(0,0,0,0.15)",
          transform: hover ? "translateY(-8px)" : "translateY(0px)",
          transition: "all 0.25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* IMAGE BOX */}
        <div
          style={{
            height: "120px",
            borderRadius: "10px",
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginBottom: "6px",
          }}
        >
          <img
            src={img}
            alt={title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* TEXT */}
        <h6 className="fw-bold mb-1">{title}</h6>
        <p className="small mb-2">{desc}</p>

        {/* BUTTON */}

        <Link to ="/course-content" className="btn btn-primary btn-sm w-100">Open</Link>
      </div>
    </div>
  );
}

function DashBoard() {
  return (
    <div className="container mt-4">

      {/* ===== FIRST HEADING (PINK) ===== */}
      <div className="mb-3">
        <span
          className="fw-bold px-3 py-2"
          style={{
            background: "#ffd6e7",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          Software Development
        </span>
      </div>

      <div className="row g-4">
        <Card
          img="/assets/images/Exams_Courses/PGCP-AC.jpg"
          title="PGCP-AC"
          desc="Post Graduate Certificate Programme in Advanced Computing"
        />

        <Card
          img="/assets/images/Exams_Courses/PGCP-ASSD.jpg"
          title="PGCP-ASSD"
          desc="Post Graduate Certificate Programme in Advanced Secure Software Development"
        />

        <Card
          img="/assets/images/Exams_Courses/PGCP-MC.jpg"
          title="PGCP-MC"
          desc="Post Graduate Certificate Programme in Mobile Computing"
        />
      </div>

      {/* ===== SECOND HEADING (BLUE) ===== */}
      <div className="mt-5 mb-3">
        <span
          className="fw-bold px-3 py-2"
          style={{
            background: "#ffd6e7",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          Artificial Intelligence & Data Science
        </span>
      </div>

      <div className="row g-4">
        <Card
          img="/assets/images/Exams_Courses/PGCP-AI.jpg"
          title="PGCP-AI"
          desc="Post Graduate Certificate Programme in Artificial Intelligence"
        />

        <Card
          img="/assets/images/Exams_Courses/PGCP-BDA.jpg"
          title="PGCP-BDA"
          desc="Post Graduate Certificate Programme in Big Data Analytics"
        />
      </div>
    </div>
  );
}

export default DashBoard;
