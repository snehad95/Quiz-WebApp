import React, { useState } from "react";

function StudentAuth() {

  const [isRegister, setIsRegister] = useState(false);
  const [step, setStep] = useState("form"); // form | otp | success

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [message, setMessage] = useState("");

  // Email validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Send OTP
  const sendOtp = () => {
    if (!isValidEmail(email)) {
      setMessage("Enter a valid email");
      return;
    }

    if (isRegister && !name) {
      setMessage("Enter your name");
      return;
    }

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setStep("otp");

    alert("Demo OTP: " + newOtp); // demo only
    setMessage("OTP sent to your email");
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setStep("success");
      setMessage("Authentication Successful 🎉");
    } else {
      setMessage("Invalid OTP ❌");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <div className="card shadow-lg p-4 rounded-4 border-0">

            <h3 className="text-center fw-bold mb-3">
              {isRegister ? "Student Registration" : "Student Login"}
            </h3>

            {message && (
              <p className="text-center text-primary fw-semibold">
                {message}
              </p>
            )}

            {/* STEP 1 : FORM */}
            {step === "form" && (
              <>
                {isRegister && (
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-primary w-100"
                  onClick={sendOtp}
                >
                  {isRegister ? "Register & Send OTP" : "Login with OTP"}
                </button>

                <p className="text-center mt-3 mb-0">
                  {isRegister ? "Already registered?" : "New student?"}
                  <button
                    className="btn btn-link p-0 ms-1"
                    onClick={() => {
                      setIsRegister(!isRegister);
                      setMessage("");
                    }}
                  >
                    {isRegister ? "Sign In" : "Register"}
                  </button>
                </p>
              </>
            )}

            {/* STEP 2 : OTP */}
            {step === "otp" && (
              <>
                <div className="mb-3">
                  <label className="form-label">Enter OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success w-100 mb-2"
                  onClick={verifyOtp}
                >
                  Verify OTP
                </button>

                <button
                  className="btn btn-link w-100"
                  onClick={sendOtp}
                >
                  Resend OTP
                </button>
              </>
            )}

            {/* STEP 3 : SUCCESS */}
            {step === "success" && (
              <div className="text-center">
                <h5 className="text-success fw-bold">
                  Welcome 🎉
                </h5>
                <p className="text-muted">
                  You are now signed in successfully.
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentAuth;
