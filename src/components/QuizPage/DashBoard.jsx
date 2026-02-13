import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

function Dashboard() {

  const candidateName = "Purva";
  const hasNotification = true;

  const [hoveredCard, setHoveredCard] = useState(null);

  // ⭐ Card style
  const getCardStyle = (id) => ({
    transition: "all 0.3s ease",
    transform: hoveredCard === id ? "translateY(-6px)" : "translateY(0)",
    border: hoveredCard === id ? "2px solid #0d6efd" : "1px solid #dee2e6",
    boxShadow:
      hoveredCard === id
        ? "0 8px 20px rgba(13,110,253,0.25)"
        : "0 2px 8px rgba(0,0,0,0.05)",
    cursor: "pointer",
    borderRadius: "12px"
  });

  return (
    <div className="container-fluid">

      {/* ===== Welcome Section ===== */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h3>Welcome, {candidateName}</h3>
          <p className="text-muted">
            Attempt online MCQ assessments to improve your performance.
          </p>
        </div>

        {/* Notification Bell */}
        <div style={{ position: "relative", cursor: "pointer" }}>
          <FaBell size={24} />

          {hasNotification && (
            <span
              style={{
                position: "absolute",
                top: "-3px",
                right: "-3px",
                width: "10px",
                height: "10px",
                backgroundColor: "red",
                borderRadius: "50%"
              }}
            ></span>
          )}
        </div>

      </div>

      {/* ===== Categories ===== */}
      <h5 className="mb-3">Exam Categories</h5>

      <div className="row g-4">

        {/* ===== Card 1 ===== */}
        <div className="col-md-4">
          <div
            className="p-4 bg-white"
            style={getCardStyle(1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h5 className="fw-semibold mb-2">IT & Programming</h5>

            <p className="text-muted mb-4">
              High level technical assessments designed for developers.
            </p>

            <div className="d-flex justify-content-between">

              <button className="btn btn-primary px-4">
           Attempt Quiz
              </button>

              <button className="btn btn-outline-primary px-4">
                Explore
              </button>

            </div>
          </div>
        </div>

        {/* ===== Card 2 ===== */}
        <div className="col-md-4">
          <div
            className="p-4 bg-white"
            style={getCardStyle(2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h5 className="fw-semibold mb-2">Finance & Management</h5>

            <p className="text-muted mb-4">
              Industry level finance and business skill assessments.
            </p>

            <div className="d-flex justify-content-between">

              <button className="btn btn-primary px-4">
              Attempt Quiz
              </button>

              <button className="btn btn-outline-primary px-4">
                Explore
              </button>

            </div>
          </div>
        </div>

        {/* ===== Card 3 ===== */}
        <div className="col-md-4">
          <div
            className="p-4 bg-white"
            style={getCardStyle(3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h5 className="fw-semibold mb-2">Design & Multimedia</h5>

            <p className="text-muted mb-4">
              Creative skill tests for design professionals.
            </p>

            <div className="d-flex justify-content-between">

              <button className="btn btn-primary px-4">
               Attempt Quiz
              </button>

              <button className="btn btn-outline-primary px-4">
                Explore
              </button>

            </div>
          </div>
        </div>
         
         
         

            
        

      </div>

      <p className="mt-5 text-muted">
        Need help? Contact exam support team.
      </p>

    </div>
  );
}

export default Dashboard;
