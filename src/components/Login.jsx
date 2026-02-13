import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import { isLoggedIn } from "../utils/auth";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    if(isLoggedIn()) {
      navigate("/dashboard");
    }
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (err) {
      alert("Invalid login");
    }
  };

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
        <h2 className="text-center mb-2" style={{ color: "#4da6ff" }}>
          Log In Your Account
        </h2>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/create-account">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
