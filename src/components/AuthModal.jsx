import { useState, useEffect } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function AuthModal({ onClose }) {
  const [mode, setMode] = useState("register");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div style={overlay}>
      <div style={panel}>

        {/* Close */}
        <span onClick={onClose} style={close}>×</span>

        {mode === "register" ? <CreateAccount /> : <Login />}

        <div style={switchBox}>
          <span onClick={() => setMode(mode === "register" ? "login" : "register")}>
            {mode === "register"
              ? "Already have an account? Login"
              : "New here? Create account"}
          </span>
        </div>

      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.55)",
  display: "flex",
  justifyContent: "flex-end",
  aliignItems: "stretch",
  zIndex: 9999
};

const panel = {
  width: "380px",
  height: "70vh",
  background: "#081a35",
  padding: "30px 25px",
  color: "#fff",
  position: "relative",
  borderRadius: "20px 0 0 20px",
  boxShadow: "-10px 0 40px rgba(0,0,0,.4)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"   // ✅ content vertically centered
};

const close = {
  position: "absolute",
  right: "20px",
  top: "15px",
  fontSize: "30px",
  cursor: "pointer",
  color: "#7dd3fc"
};

const switchBox = {
  marginTop: "20px",
  textAlign: "center",
  color: "#60a5fa",
  cursor: "pointer",
  fontWeight: 500
};
