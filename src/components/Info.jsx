import React from "react";
import { CheckCircle2 } from "lucide-react";

const infoData = [
  {
    
    title: "About Our Quiz Project",
    gif: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    side: "left",
    description:
      "Our quiz platform helps students practice concepts, prepare for exams, and improve performance through structured assessment.",
    points: [
      "Enhances subject understanding",
      "Instant performance feedback",
      "Supports multiple quiz formats",
      "Helps in exam preparation",
    ],
  },
  {
   
    title: "Quiz Types",
    gif: "https://cdn-icons-png.flaticon.com/512/4205/4205906.png",
    side: "right",
    description:
      "Multiple quiz formats designed to evaluate different learning skills.",
    points: [
      "Fill in the Blanks",
      "Subjective Questions",
      "Multiple Choice Questions",
    ],
  },
  {
   
    title: "Performance Tracking",
    gif: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    side: "left",
    description:
      "Students can monitor their progress and identify weak areas.",
    points: ["Instant Result", "Score Tracking", "Detailed Analysis"],
  },
  {
   
    title: "Learning Benefits",
    gif: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    side: "right",
    description:
      "Improves conceptual clarity and time management skills.",
    points: ["Concept Clarity", "Time Management", "Practice Questions"],
  },
  {
 
    title: "User Features",
    gif: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    side: "left",
    description:
      "User friendly and secure platform designed for smooth experience.",
    points: ["Easy Interface", "Mobile Friendly", "Secure Access"],
  },
];

function Info() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg,#eff6ff,#dbeafe,#bfdbfe)",
      }}
    >
      <div className="container position-relative">

        {/* Timeline Line */}
        <div
          className="position-absolute top-0 start-50 translate-middle-x d-none d-md-block"
          style={{
            width: "5px",
            height: "100%",
            background: "linear-gradient(to bottom,#3b82f6,#60a5fa,#93c5fd)",
          }}
        />

        {infoData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Info;

/* ---------------- Timeline Item ---------------- */

function TimelineItem({ item }) {
  const isLeft = item.side === "left";

  return (
    <div className="row my-5 align-items-center position-relative">

      {isLeft && (
        <div className="col-md-6">
          <CreativeCard item={item} />
        </div>
      )}

      {/* Timeline Dot - PERFECT CENTER */}
      <div
        className="d-none d-md-flex position-absolute top-50 start-50 translate-middle rounded-circle shadow-lg"
        style={{
          width: "50px",
          height: "50px",
          background: "linear-gradient(45deg,#3b82f6,#2563eb)",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "18px",
          zIndex: 2,
        }}
      >
        {item.number}
      </div>

      {!isLeft && (
        <div className="col-md-6 offset-md-6">
          <CreativeCard item={item} />
        </div>
      )}
    </div>
  );
}

/* ---------------- Card ---------------- */

function CreativeCard({ item }) {
  return (
    <div
      className="p-4 shadow-lg"
      style={{
        borderRadius: "20px",
        backdropFilter: "blur(12px)",
        background:
          "linear-gradient(135deg,rgba(255,255,255,0.8),rgba(219,234,254,0.6))",
        border: "1px solid rgba(59,130,246,0.2)",
        transition: "0.4s",
      }}
    >
      <div className="d-flex align-items-center mb-3">

        <img
          src={item.gif}
          alt="icon"
          style={{
            width: "60px",
            height: "60px",
            marginRight: "15px",
          }}
        />

        <h5
          className="fw-bold"
          style={{
            background: "linear-gradient(45deg,#2563eb,#1d4ed8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {item.title}
        </h5>
      </div>

      <p className="text-muted">{item.description}</p>

      <ul className="list-unstyled">
        {item.points.map((point, i) => (
          <li key={i} className="d-flex mb-2">
            <CheckCircle2
              size={20}
              style={{ color: "#2563eb", marginRight: "8px" }}
            />
            <span className="fw-semibold">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

