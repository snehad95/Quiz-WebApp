import React, { useEffect, useState } from "react";
import {
  Zap,
  BarChart3,
  FileText,
  ShieldCheck,
  Smartphone,
  Layers,
} from "lucide-react";
import AuthModal from "./components/AuthModal";


/* ================= WHY CHOOSE ================= */


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


/* ================= HOW IT WORKS ================= */

function HowItWorks() {
  const steps = [
    "Register Account",
    "Select Quiz / Course",
    "Attempt Quiz",
    "Get Instant Result",
    "Track Progress",
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">How It Works</h2>

        <div className="row text-center">
          {steps.map((step, index) => (
            <div key={index} className="col-md-2 col-6 mb-4 mx-auto">
              <div
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-2"
                style={{ width: "60px", height: "60px", fontWeight: "bold" }}
              >
                {index + 1}
              </div>
              <p className="fw-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= COUNTER ================= */

function Counterr({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2 className="fw-bold">
      {count}
      {suffix}
    </h2>
  );
}

/* ================= STATISTICS ================= */



function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const animate = () => {
      const duration = 2000;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);

          // Restart animation after small delay
          setTimeout(() => {
            start = 0;
            setCount(0);
            animate();
          }, 1000);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);
    };

    animate();

    return () => {};
  }, [end]);

  return (
    <h2 className="fw-bold">
      {count}
      {suffix}
    </h2>
  );
}

function StatisticsSection() {
  const stats = [
    { value: 5000, label: "Students Registered", suffix: "+" },
    { value: 12000, label: "Quiz Attempts", suffix: "+" },
    { value: 200, label: "Practice Tests", suffix: "+" },
    { value: 95, label: "User Satisfaction", suffix: "%" },
  ];

  return (
    <section className="py-5" style={{ background: "#2563eb" }}>
      <div className="container">
        <div className="row text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="fw-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ================= TESTIMONIALS ================= */



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



/* ================= CALL TO ACTION ================= */

function CallToAction() {
  return (
    <section
      className="py-5 text-center"
      style={{
        background: "linear-gradient(135deg,#2563eb,#1e40af)",
        color: "white",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">
          Check your preparation, not just your luck
        </h2>

        <p className="mb-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Practice real exam-level questions, track your progress,
          and build confidence with every quiz you attempt.
        </p>

        
        <button
        
          className="btn btn-light btn-lg px-4 fw-semibold"
          style={{ borderRadius: "30px" }}
        >
          Start Practicing Now
         
        </button>
        
      </div>
    </section>
  );
}

/* ================= MAIN COMPONENT ================= */

function HomePage() {

  const [showAuth,setShowAuth] = useState(true);

  return (
    <>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      <WhyChooseExamSphere />
      <HowItWorks />
      <StatisticsSection />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default HomePage;