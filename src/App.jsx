import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
import ExamCategories from "./components/ExamCategories";
<<<<<<< HEAD
import HowItWorks from "./components/HowItWorks";
import StatisticsSection from "./components/StatisticsSection";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

import QuizPage from "./components/QuizPage";
=======




>>>>>>> 2d72883 (updated)
import About from "./components/About";
import Course from "./components/Course";
import Exams from "./components/Exams";

import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

import HomePage from "./HomePage";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseContent from "./components/QuizPage/CourseContent";


=======
import QuizPageHome from "./components/QuizPage/QuizPageHome";
import Dashboard from "./components/QuizPage/DashBoard";
>>>>>>> 2d72883 (updated)

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
<<<<<<< HEAD
              <HowItWorks />
              <StatisticsSection />
              <Testimonials />
              <CallToAction />
=======
              
              <HomePage />
>>>>>>> 2d72883 (updated)
            </>
          }
        />

<<<<<<< HEAD
        <Route path="/QuizPage/*" element={<QuizPage />} />
=======
        {/* ===== Other Pages ===== */}
        <Route path="/QuizPage/*" element={<QuizPageHome />} />
>>>>>>> 2d72883 (updated)
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Exams" element={<Exams />} />

        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FeatureBoxes" element={<FeatureBoxes />} />
<<<<<<< HEAD
        <Route path="/course-content" element={<CourseContent />} />

=======
        <Route path="/dashboard/*" element={<Dashboard/>}/>
>>>>>>> 2d72883 (updated)
      </Routes>

      <Footer />
    </>
  );
}

export default App;