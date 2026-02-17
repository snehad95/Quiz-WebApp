import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ img, title, desc }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="col-md-4">
      <div
        className="card mx-auto text-center"
        style={{
          width: "14rem",
          height: "420px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          boxShadow: hover
            ? "0 12px 25px rgba(0,0,0,0.25)"
            : "0 6px 15px rgba(0,0,0,0.15)",
          transform: hover ? "translateY(-10px)" : "translateY(0px)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={img}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h6 className="fw-bold">{title}</h6>
            <p className="small">{desc}</p>
          </div>

          <button className="btn btn-primary w-100">Open</button>
        </div>
      </div>
    </div>
  );
}

function DashBoard() {
  return (
    <div className="container mt-4">

      {/* ===== FIRST ROW ===== */}
      <h4 className="fw-bold mb-3">Software Development</h4>
      <div className="row g-4">

        <Card
          img="/assets/images/Exam_Courses/PGCP-AC.jpg"
          title="PGCP-AC"
          desc="Post Graduate Certificate Programme in Advanced Computing"
        />

        <Card
          img="/assets/images/Exam_Courses/PGCP-ASSD.jpg"
          title="PGCP-ASSD"
          desc="Post Graduate Certificate Programme in Advanced Secure Software Development"
        />

        <Card
          img="/assets/images/Exam_Courses/PGCP-MC.jpg"
          title="PGCP-MC"
          desc="Post Graduate Certificate Programme in Mobile Computing"
        />
      </div>

      {/* ===== SECOND ROW ===== */}
      <h4 className="fw-bold mt-5 mb-3">
        Artificial Intelligence & Data Science
      </h4>

      <div className="row g-4">
        <Card
          img="/assets/images/Exam_Courses/PGCP-AI.jpg"
          title="PGCP-AI"
          desc="Post Graduate Certificate Programme in Artificial Intelligence"
        />

        <Card
          img="/assets/images/Exam_Courses/PGCP-BDA.jpg"
          title="PGCP-BDA"
          desc="Post Graduate Certificate Programme in Big Data Analytics"
        />
      </div>
    </div>
  );
}

export default DashBoard;
