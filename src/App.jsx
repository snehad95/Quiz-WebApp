import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
import ExamCategories from "./components/ExamCategories";
import HowItWorks from "./components/HowItWorks";
import StatisticsSection from "./components/StatisticsSection";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

import QuizPage from "./components/QuizPage";
import About from "./components/About";
import Course from "./components/Course";
import Exams from "./components/Exams";

import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
<<<<<<< HEAD
import HomePage from "./HomePage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseContent from "./components/QuizPage/CourseContent";

=======
>>>>>>> 0f4cf6bfd60fdabdd20c370912b393400c02a90a

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
              <HowItWorks />
              <StatisticsSection />
              <Testimonials />
              <CallToAction />
            </>
          }
        />

        <Route path="/QuizPage/*" element={<QuizPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Exams" element={<Exams />} />
<<<<<<< HEAD
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FeatureBoxes" element={<FeatureBoxes />} />
        <Route path="/course-content" element={<CourseContent />} />
=======
>>>>>>> 0f4cf6bfd60fdabdd20c370912b393400c02a90a
      </Routes>

      <Footer />
    </>
  );
}

export default App;