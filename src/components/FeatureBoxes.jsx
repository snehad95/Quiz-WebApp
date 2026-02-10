import React from "react";

function FeatureBoxes() {

  const boxes = [
    { icon: "assets/images/FeaturesBox/icon1AI.png", text: "AI & Multilingual Computing" },
    { icon: "assets/images/FeaturesBox/icon2Cyber.png", text: "Cyber Security & Forensics" },
    { icon: "assets/images/FeaturesBox/icon3Elearning.png", text: "Education & Training" },
    { icon: "assets/images/FeaturesBox/icon4governance.png", text: "E-governance" },
    { icon: "assets/images/FeaturesBox/icon5SE.png", text: "Software Technologies" },
  ];

  return (
    <div className="container-fluid py-5 px-3" style={{ background: "#f5f7fa" }}>
      
      <div className="row row-cols-2 row-cols-md-5 g-4">

        {boxes.map((box, index) => (
          <div key={index} className="col">

            <div className="feature-box text-center">

              <img
                src={box.icon}
                alt={box.text}
                className="feature-icon"
              />

              <p className="feature-text">{box.text}</p>

            </div>

          </div>
        ))}

      </div>

      {/* CSS */}
      <style>
        {`
        .feature-box {
          background: white;
          border-radius: 16px;
          padding: 25px 15px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.35s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Hover Effect */
        .feature-box:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: #0d6efd;
          box-shadow: 0 12px 30px rgba(13,110,253,0.25);
        }

        /* Icon Animation (Straight open) */
        .feature-icon {
          width: 55px;
          height: 55px;
          margin-bottom: 12px;
          transition: transform 0.4s ease;
        }

        .feature-box:hover .feature-icon {
          transform: scale(1.1);
        }

        /* Text Style */
        .feature-text {
          font-weight: 600;
          font-size: 15px;
          color: #1b1b1b;
          transition: color 0.3s ease;
        }

        .feature-box:hover .feature-text {
          color: #0d6efd;
        }
        `}
      </style>

    </div>
  );
}

export default FeatureBoxes;
