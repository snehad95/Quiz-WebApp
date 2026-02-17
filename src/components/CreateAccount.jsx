import React, { useState } from "react";

function CreateAccount({ close }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    setError("");
    alert("Account Created Successfully ✅");
    close();
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        backgroundColor: "#0b1c3d",
        color: "white",
        borderRadius: "15px",
        padding: "30px",
        position: "relative",
        transform: "scale(1)",
        animation: "scaleIn 0.3s ease-in-out",
      }}
    >
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
        }}
      >
        ✖
      </button>

      <h3 className="text-center mb-3" style={{ color: "#4da6ff" }}>
        Create Account
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-2"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control mb-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && (
          <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
        )}

        <button className="btn btn-primary w-100 mt-2">
          Create Account
        </button>
      </form>

      <style>
        {`
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        `}
      </style>
    </div>
  );
}

export default CreateAccount;