import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "ExamSphere helped me crack aptitude tests easily.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Priya Verma",
      text: "Very user friendly and instant results are amazing.",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Aman Gupta",
      text: "Best platform for reasoning and mock tests.",
      img: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
    },
    {
      name: "Neha Singh",
      text: "Detailed performance report helped me improve.",
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Rohit Kumar",
      text: "Mobile friendly and smooth experience.",
      img: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
    },
  ];

  return (
    <section className="py-5 bg-light overflow-hidden">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">
          Our Alumni ❤️
        </h2>

        <div className="testimonial-slider">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="testimonial-card" key={index}>
                <img src={item.img} alt={item.name} />
                <p>"{item.text}"</p>
                <h6>{item.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
        .testimonial-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .testimonial-track {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        .testimonial-card {
          min-width: 280px;
          background: white;
          margin: 0 15px;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .testimonial-card img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .testimonial-card p {
          font-style: italic;
          font-size: 14px;
          color: #444;
        }

        .testimonial-card h6 {
          margin-top: 10px;
          font-weight: 600;
          color: #0d6efd;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        `}
      </style>
    </section>
  );
}

export default Testimonials;
