import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CourseContent() {
  const sections = [
    {
      title: "Section 1: Programming Basics",
      topics: ["C Basics", "C++", "Java Programming", "Python"],
    },
    {
      title: "Section 2: Core Computer Science",
      topics: ["Operating Systems", "DBMS", "Computer Networks", "OOPS"],
    },
    {
      title: "Section 3: Aptitude",
      topics: ["Quant", "Reasoning", "Verbal"],
    },
    {
      title: "Section: Web Development",
      topics: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
    },
    {
      title: "Section: Communication Skills",
      topics: [
        "Communication Basics",
        "Personality Development",
        "English & Grammar",
        "Public Speaking & GD",
        "Interview Preparation",
      ],
    },
  ];

  const [completed, setCompleted] = useState([]); // fresh progress every load
  const [openIndex, setOpenIndex] = useState(0); // first section open by default

  const progress = (completed.length / sections.length) * 100;

  const completeSection = (index) => {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    }
    if (index < sections.length - 1) {
      setOpenIndex(index + 1);
    } else {
      setOpenIndex(null);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="fw-bold mb-4 text-center">
        Live Assessment - PGCP Advanced Computing
      </h3>

      {/* Progress Bar */}
      <div style={{ position: "relative", marginBottom: "40px" }}>
        <div
          style={{
            height: "12px",
            background: "#e9ecef",
            borderRadius: "10px",
          }}
        />
        <div
          style={{
            height: "12px",
            width: `${progress}%`,
            background: "#198754",
            borderRadius: "10px",
            position: "absolute",
            top: 0,
            transition: "width 0.4s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: `calc(${progress}% - 12px)`,
            width: "24px",
            height: "24px",
            background: "#198754",
            borderRadius: "50%",
            transition: "left 0.4s ease",
            border: "3px solid white",
            boxShadow: "0 0 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Sections */}
      {sections.map((section, index) => {
        const isCompleted = completed.includes(index);
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`card mb-3 shadow-sm ${isCompleted ? "border-success" : ""}`}
          >
            <div className="card-body">
              {/* Header */}
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <h5 className="mb-0 fw-semibold">
                  {section.title} {isCompleted && "✅"}
                </h5>
              </div>

              {/* Dropdown */}
              <div
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                }}
              >
                <div className="mt-3">
                  <ul className="mb-2">
                    {section.topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                  {!isCompleted && (
                    <button
                      className="btn btn-success"
                      onClick={() => completeSection(index)}
                    >
                      Start Test
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseContent;
