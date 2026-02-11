import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="  min-h-screen flex items-center justify-center bg-blue-50 px-5 py-5 mt-1 "  style={{ marginLeft:"500px"}}>
      {/* ONE BIG CENTER BOX */}
      <div
        className=" w-full p-4 rounded-2xl shadow-xl  "
        style={{
          width: "448px",
          height: "477px",
          backgroundColor: "#0b1c3d",
          color: "white",
          borderRadius: "10px",
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-700">
          LogIn Your Account
        </h2>
        <p className="text-center text-blue-500 mt-2 mb-6">
          Test your skills. Track your growth. Level up.
        </p>

        {/* FORM */}
        <form className="space-y-4 text-center ">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2 mt-4">
              Email Address
            </label>
            <div className="relative mb-2 ">
              <i className="fas fa-envelope input-icon m-2"></i>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input-field w-full mb-3 p-2 px-5 rounded-md border-none outline-none focus:ring-0"
                style={{ borderRadius: "5px", border: "none" }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2 ">
              Password
            </label>
            <div className="relative mb-2">
              <i className="fas fa-lock input-icon m-2"></i>
              <input
                type="password"
                placeholder="Create password"
                className="input-field w-full mb-3 p-2 px-5 rounded-md border-none outline-none focus:ring-0"
                style={{ borderRadius: "5px", border: "none" }}
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-fit  bg-blue-900 text-blue py-2.5  px-5 rounded-lg font-bold hover:bg-white-700 transition m-2 p-2  "
            style={{ borderRadius: "5px", border: "none", fontWeight:"bold",  }}
          >
            LogIn
          </button>
        </form>

        {/* SIGN UP */}
        <p className="text-center text-sm text-blue-600 mt-4">
          Don't have an account?{" "}
          <span className="font-semibold cursor-pointer hover:underline ">
            <a href="" style={{ textDecoration: "none" }}>
              <Link to="/create-account">Create Account </Link>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
