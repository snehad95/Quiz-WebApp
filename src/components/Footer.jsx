import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#0b1c3d", color: "white" }}>

      <div className="container py-5">
        <div className="row">

          {/* Centers */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">CENTERS</h5>
            <ul className="footer-list">
              <li>Bengaluru</li>
              <li>Chennai</li>
              <li>Delhi</li>
              <li>Hyderabad</li>
              <li>Kolkata</li>
              <li>Mohali</li>
              <li>Mumbai</li>
              <li>Noida</li>
              <li>North East</li>
              <li>Patna</li>
              <li>Pune</li>
              <li>Thiruvananthapuram</li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">LINKS</h5>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Products & Services</li>
              <li>R&D</li>
              <li>Careers</li>
              <li>Tenders</li>
              <li>Press Kit</li>
              <li>Video Gallery</li>
              <li>Events</li>
              <li>Awards</li>
              <li>Downloads</li>
              <li>Achievements</li>
              <li>Alliance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5 className="footer-title">CONTACT US</h5>

            <p>
              Centre for Development of Advanced Computing <br />
              C-DAC Innovation Park, <br />
              Panchavati, Pashan, Pune – 411 008, Maharashtra (India)
            </p>

            <p>📞 Phone: +91-20-25503100</p>
            <p>📠 Fax: +91-20-25503131</p>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-1">
          Help | Website Policies | Copyright Policy | Terms & Conditions | Reach Us | Sitemap
        </p>

        <p className="mb-0">
          Website owned & maintained by: Centre for Development of Advanced Computing (C-DAC)
        </p>

        <p className="mb-0">© 2026 C-DAC. All rights reserved.</p>
      </div>


      {/* CSS */}
      <style>
        {`

        .footer-title {
          font-weight: 700;
          margin-bottom: 15px;
          border-bottom: 2px solid #1e3a8a;
          display: inline-block;
          padding-bottom: 5px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
        }

        .footer-list li {
          margin-bottom: 6px;
          cursor: pointer;
          transition: 0.3s;
          color: #d1d5db;
        }

        .footer-list li:hover {
          color: white;
          transform: translateX(5px);
        }

        .footer-bottom {
          background: #06132b;
          font-size: 14px;
          color: #cbd5e1;
        }

        `}
      </style>

    </footer>
  );
}

export default Footer;

