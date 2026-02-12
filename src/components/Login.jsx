import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
          Log In Your Account
        </h2>
        <p className="text-center mb-4" style={{ color: "#9ecbff" }}>
          Test your skills. Track your growth. Level up.
        </p>

        {/* FORM */}
        <form>
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
              placeholder="Enter password"
              className="form-control"
            />
          </div>

          {/* Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary fw-bold"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Sign Up */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/create-account"
            className="fw-semibold text-decoration-none text-info"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
