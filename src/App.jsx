import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
import ExamCategories from "./components/ExamCategories";


import About from "./components/About";
import Course from "./components/Course";
import Exams from "./components/Exams";

import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

import QuizPageHome from "./components/QuizPage/QuizPageHome";
import Dashboard from "./components/QuizPage/DashBoard";
import CourseContent from "./components/QuizPage/CourseContent";
import UserProfile from "./components/QuizPage/UserProfile";

function App() {
  const [popup, setPopup] = useState(null);

  return (
    <>
      <Header setPopup={setPopup} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div style={{ position: "relative" }}>
                <Slideshow />

                {/* Popup Overlay */}
                {popup && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100vh",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 999,
                    }}
                  >
                    {popup === "login" && (
                      <Login close={() => setPopup(null)} />
                    )}

                    {popup === "create" && (
                      <CreateAccount close={() => setPopup(null)} />
                    )}
                  </div>
                )}
              </div>

              <FeatureBoxes />
              <Info />
              <ExamCategories />
             
            </>
          }
        />

        {/* Quiz Section */}
        <Route path="/QuizPage/*" element={<QuizPageHome />} />
      
        <Route path="/course-content" element={<CourseContent />} />

        {/* Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* Other Pages */}
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Exams" element={<Exams />} />

        {/* Auth */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />

          {/* User Profile */}
          <Route path="user-profile" element={<UserProfile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
