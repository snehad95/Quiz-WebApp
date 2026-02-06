import React from "react";
import { CheckCircle2, Zap } from "lucide-react";

const infoData = [
  {
    number: 1,
    title: "About Our Quiz Project",
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
    number: 2,
    title: "Quiz Types",
    side: "right",
    description: "Multiple quiz formats designed to evaluate different learning skills.",
    points: [
      "Fill in the Blanks",
      "Subjective Questions",
      "Multiple Choice Questions",
    ],
  },
  {
    number: 3,
    title: "Performance Tracking",
    side: "left",
    description: "Students can monitor their progress and identify weak areas.",
    points: [
      "Instant Result",
      "Score Tracking",
      "Detailed Analysis",
    ],
  },
  {
    number: 4,
    title: "Learning Benefits",
    side: "left",
    description: "Improves conceptual clarity and time management skills.",
    points: [
      "Concept Clarity",
      "Time Management",
      "Practice Questions",
    ],
  },
  {
    number: 5,
    title: "User Features",
    side: "right",
    description: "User friendly and secure platform designed for smooth experience.",
    points: [
      "Easy Interface",
      "Mobile Friendly",
      "Secure Access",
    ],
  },
];

function Info() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto relative">

        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-400 -translate-x-1/2" />

        <div className="space-y-20">
          {infoData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLeft={item.side === "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;

/* ---------- Timeline Item ---------- */

function TimelineItem({ item, isLeft }) {
  return (
    <div className="relative">

      {/* Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md" />

      {/* Card Container */}
      <div className={`md:w-[45%] ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
        
        <div className="bg-white rounded-2xl shadow-lg border border-blue-200 p-7 hover:-translate-y-2 transition duration-300">

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white">
              <Zap size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-400 font-bold">
                Section {item.number}
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-5">
            {item.description}
          </p>

          {/* Points */}
          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                {point}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
