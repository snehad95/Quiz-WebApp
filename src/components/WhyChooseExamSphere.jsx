import React from "react";
import {
  Zap,
  BarChart3,
  FileText,
  ShieldCheck,
  Smartphone,
  Layers,
} from "lucide-react";

function WhyChooseExamSphere() {
  const points = [
    {
      icon: <Zap size={30} />,
      text: "Instant Results",
      color: "linear-gradient(135deg,#f97316,#fb923c)",
    },
    {
      icon: <BarChart3 size={30} />,
      text: "Detailed Performance Report",
      color: "linear-gradient(135deg,#22c55e,#4ade80)",
    },
    {
      icon: <Layers size={30} />,
      text: "Multiple Quiz Formats",
      color: "linear-gradient(135deg,#a855f7,#c084fc)",
    },
    {
      icon: <FileText size={30} />,
      text: "User Friendly Interface",
      color: "linear-gradient(135deg,#06b6d4,#67e8f9)",
    },
    {
      icon: <ShieldCheck size={30} />,
      text: "Secure & Reliable Platform",
      color: "linear-gradient(135deg,#ef4444,#f87171)",
    },
    {
      icon: <Smartphone size={30} />,
      text: "Mobile Friendly",
      color: "linear-gradient(135deg,#eab308,#fde047)",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg,#f8fafc,#eef2ff,#fdf4ff)",
      }}
    >
      <div className="container">

        <h2 className="fw-bold text-center mb-5">
          Why Choose ExamSphere ⭐
        </h2>

        <div className="row">
          {points.map((point, index) => (
            <div key={index} className="col-md-4 mb-4">

              <div className="choose-card text-center p-4 h-100">

                {/* Colorful Icon */}
                <div
                  className="icon-box mb-3"
                  style={{ background: point.color }}
                >
                  {point.icon}
                </div>

                <h6 className="fw-semibold">{point.text}</h6>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
        .choose-card {
          background: white;
          border-radius: 18px;
          transition: 0.3s;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          cursor: pointer;
        }

        .choose-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 14px 35px rgba(0,0,0,0.15);
        }

        .icon-box {
          width: 70px;
          height: 70px;
          margin: auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.3s;
        }

        .choose-card:hover .icon-box {
          transform: scale(1.1);
        }
        `}
      </style>
    </section>
  );
}

export default WhyChooseExamSphere;
