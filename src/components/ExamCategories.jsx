import React from "react";
import { useNavigate } from "react-router-dom";

function ExamCategories() {

  const navigate = useNavigate();   

  const categories = [
    {
      image: "assets/images/ExamCategoried_img/programming.jpg",
      title: "Programming",
      desc: "Test coding knowledge in different programming languages."
    },
    {
      image: "assets/images/ExamCategoried_img/aptitude.jpg",
      title: "Quantitative Aptitude",
      desc: "Improve mathematical and logical problem solving skills."
    },
    {
      image: "assets/images/ExamCategoried_img/reasoning1.jpg",
      title: "Logical Reasoning",
      desc: "Develop analytical and thinking ability."
    },
    {
      image: "assets/images/ExamCategoried_img/english.jpg",
      title: "English",
      desc: "Practice grammar, vocabulary and comprehension."
    },
    {
      image: "assets/images/ExamCategoried_img/gk.jpg",
      title: "General Knowledge",
      desc: "Stay updated with current affairs and general awareness."
    },
    {
      image: "assets/images/ExamCategoried_img/tech.jpg",
      title: "Technical Subjects",
      desc: "Prepare technical concepts for placements and exams."
    }
  ];

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4 fw-bold">
        Available Exams / Categories
      </h2>

      <div className="row g-4">

        {categories.map((cat, index) => (
          <div className="col-md-4 col-sm-6" key={index}>

            <div className="card h-100 shadow-sm category-card">

              <img
                src={cat.image}
                className="card-img-top"
                alt={cat.title}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">

                <h5 className="card-title fw-bold">
                  {cat.title}
                </h5>

                <p className="card-text text-muted">
                  {cat.desc}
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/StudentAuth")}
                >
                  Start Quiz
                </button>

              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ExamCategories;
