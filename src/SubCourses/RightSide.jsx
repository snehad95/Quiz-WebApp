import React, { useState } from "react";

const items = [
  { title: "Basics" },
  { title: "Foot Printing & Reconnaissance" },
  { title: "Scanning" },
  { title: "Exploitation" },
  { title: "Maintaining Access" },
  { title: "Reporting" },
];

export default function RightSide() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl"
      style={{ width: "300px", marginTop:"30px",marginLeft:"25px" }}
    >
      {/* Header */}
      <div className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-semibold border-b ">
        Share Your Experiences
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {items.map((item, idx) => (
          <div key={idx} className="border-b border-gray-200 ">
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center w-full px-3 py-2 text-gray-700 text-sm hover:bg-gray-50 transition"
              style={{
                width: "100%",
                height: "55px",
                border: "none",
                textAlign: "left",
              }}
            >
              <span>{item.title}</span>

              <svg
                style={{display:"flex", width: "20px", marginLeft: "auto",alignItems:"center" }}
                className={`  w-4 h-4 transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === idx && (
              <div className="px-4  text-xs text-gray-600">
                <p>This section content goes here.</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      {/* <div className="flex items-center justify-between px-3 py-2 bg-green-50 border-t rounded-b-xl">
        <span className="font-semibold text-sm text-gray-800">
          Three 90 Challenge
        </span>
        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition">
          Explore
        </button>
      </div> */}
    </div>
  );
}
