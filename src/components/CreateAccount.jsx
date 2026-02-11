import React from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="  min-h-screen flex items-center justify-center bg-blue-50 px-5 py-5 mt-1  " style={{ marginLeft:"500px"}}>
      {/* ONE BIG CENTER BOX */}
      <div
        className="w-full max-w-md p-6 rounded-2xl shadow-xl"
        style={{
          width: "450px",
          height: "737px",
          backgroundColor: "#0b1c3d",
          color: "white",
          borderRadius: "10px",
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-700 pt-3">
          Create Account
        </h2>
        <p className="text-center text-blue-500 mt-2 mb-6 ">
          Test your skills. Track your growth. Level up.
        </p>

        {/* FORM */}
        <form className="space-y-4 text-center mt-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold  text-blue-900 mb-2">
              Full Name
            </label>
            <div className="relative mb-2 ">
              <i className="fas fa-user input-icon m-2  "></i>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input-field w-full mb-3 p-2 px-5 rounded-md border-none outline-none focus:ring-0"
                style={{ borderRadius: "5px", border: "none" }}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Phone Number
            </label>
            <div className="relative mb-2 ">
              <i className="fas fa-phone input-icon m-2"></i>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="input-field w-full mb-3 p-2 px-5 rounded-md border-none outline-none focus:ring-0"
                style={{ borderRadius: "5px", border: "none" }}
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
              Username
            </label>
            <div className="relative mb-2">
              <i className="fas fa-at input-icon m-2"></i>
              <input
                type="text"
                placeholder="Enter your username"
                className="input-field w-full mb-3 p-2 px-5 rounded-md border-none outline-none focus:ring-0"
                style={{ borderRadius: "5px", border: "none" }}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">
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
                className="input-field w-full mb-3 p-2   px-5 rounded-md border-none outline-none focus:ring-0"
                style={{ borderRadius: "5px", border: "none" }}
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="font-bold  w-[500px]  mb-3 p-2 px-5 mt-3  rounded-md bord" 
            style={{ borderRadius: "5px", border: "none", marginLeft:"35px" , fontWeight:"bold"}}
          >
            Create Account
          </button>
        </form>

        {/* SIGN UP */}
        <p className="text-center text-sm text-blue-600 mt-4 ">
          Already have an account?{" "}
          <span className="font-semibold cursor-pointer hover:underline ">
            <a href="" style={{ border: "none", outline: "none" }}>
              <Link to="/Login">Sign Up </Link>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
