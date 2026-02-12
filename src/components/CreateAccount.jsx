import React from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaf2ff",
        padding: "20px",
      }}
    >
      <div
        className="shadow-lg"
        style={{
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#0b1c3d",
          color: "white",
          borderRadius: "12px",
          padding: "30px",
        }}
      >
        {/* Heading */}
        <h2 className="text-center mb-2" style={{ color: "#4da6ff" }}>
          Create Account
        </h2>
        <p className="text-center mb-4" style={{ color: "#9ecbff" }}>
          Test your skills. Track your growth. Level up.
        </p>

        {/* FORM */}
        <form>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-light">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="form-control"
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-light">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="form-control"
            />
          </div>

          {/* Username */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-light">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="form-control"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-light">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-light">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="form-control"
            />
          </div>

          {/* Button */}
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-primary fw-bold">
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="fw-semibold text-decoration-none text-info"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
