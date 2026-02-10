import React from "react";

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

export default HowItWorks;
