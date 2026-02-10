import React from "react";

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

export default CallToAction;
