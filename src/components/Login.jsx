import React from "react";

function Login({ close }) {
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
        Log In
      </h3>

      <input type="email" placeholder="Email" className="form-control mb-3" />
      <input type="password" placeholder="Password" className="form-control mb-3" />

      <button className="btn btn-primary w-100">Log In</button>
    </div>
  );
}

export default Login;