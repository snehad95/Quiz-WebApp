import React, { useEffect, useState } from "react";

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

export default StatisticsSection;
