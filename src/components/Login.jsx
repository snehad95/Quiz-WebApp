import React, { useState } from "react";

function Login({ close, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Fake login (later replace with backend)
    const loggedInUser = {
      name: email.split("@")[0], // simple name from email
      email: email,
    };

    setUser(loggedInUser); // ✅ set user in App.jsx
    close(); // ✅ close popup
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#0b1c3d",
        color: "white",
        borderRadius: "12px",
        padding: "30px",
        position: "relative",
      }}
    >
      {/* Close Button */}
      <button
        onClick={close}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>

      <h3 className="text-center mb-3" style={{ color: "#4da6ff" }}>
        Log In
      </h3>

      <input
        type="email"
        placeholder="Email"
        className="form-control mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="form-control mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;