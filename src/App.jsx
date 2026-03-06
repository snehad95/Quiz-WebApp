import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
import ExamCategories from "./components/ExamCategories";
import About from "./components/About";
import Course from "./components/Course";
import Exams from "./components/QuizPage/Exams.jsx";

import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";

import CourseContent from "./components/QuizPage/CourseContent";
import UserProfile from "./components/QuizPage/UserProfile";
import Test from "./components/QuizPage/Test.jsx";
import CourseDetailedPage from "./SubCourses/CourseDetailedPage.jsx";

import ScrollToTop from "./components/ScrollToTop"; // New Component

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/Test";

  const [popup, setPopup] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Header */}
      {!hideLayout && <Header setPopup={setPopup} user={user} setUser={setUser} />}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              <FeatureBoxes />
              <Info />
              <ExamCategories />
            </>
          }
        />
        <Route path="/Test" element={<Test />} />
        <Route path="/course-content" element={<CourseContent />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetailedPage />} />
        <Route path="/Exams" element={<Exams />} />
      </Routes>

      {/* Popup Modal */}
      {popup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          {popup === "login" && <Login close={() => setPopup(null)} setUser={setUser} />}
          {popup === "create" && <CreateAccount close={() => setPopup(null)} setUser={setUser} />}
        </div>
      )}

      {/* Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;