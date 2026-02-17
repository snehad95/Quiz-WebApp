import React from "react";

function CourseContent() {

  const courses = [
    {
      title: "Programming Fundamentals",
      details: [
        "C/C++ basics", 
        "Java fundamentals",
         "Python programming"
      ]
    },
    {
      title: "Core Computer Science Concepts",
      details: [
        "Operating Systems",
        "Computer Networks",
        "DBMS",
        "OOPS"
      ]
    },
    {
      title: "Technicaal skills for interviews",
      details: [
        "Problem Solving",
        "System Design"
      ]
    },
    {
      title: "Aptitude and Reasoning",
      details: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Verbal Ability"
      ]
    },
    {
      title: "Algorithms and Data Structures (Using Java)",
      details: [
        "Arrays",
        "Linked List",
        "Stack",
        "Queue",
        "Sorting"
      ]
    }
  ];

  return (
    <div className="container py-5">

      <h3 className="fw-bold mb-4">
        PG Certificate Programme in Advanced Computing (PGCP-AC)
      </h3>

      <div className="accordion" id="courseAccordion">

        {courses.map((item, index) => (

          <div className="accordion-item mb-2" key={index}>

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                {item.title} — {item.hours}
              </button>

            </h2>

            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#courseAccordion"
            >
              <div className="accordion-body">
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CourseContent;
