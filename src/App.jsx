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
import Exams from "./components/QuizPage/Exams.jsx";

import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";



import CourseContent from "./components/QuizPage/CourseContent";
import UserProfile from "./components/QuizPage/UserProfile";
import Test from "./components/QuizPage/Test.jsx";


function App() {
  const [popup, setPopup] = useState(null);
  const [user, setUser] = useState(null); // ✅ login state

  return (
    <>
      {/* Header */}
      <Header 
        setPopup={setPopup} 
        user={user} 
        setUser={setUser} 
      />

      {/* Routes */}
      <Routes>
        {/* Home */}
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

        {/* Quiz Section */}
  
        <Route path="/Test" element={<Test/>} />

        {/* Dashboard */}
        
        <Route path="/course-content" element={<CourseContent />} />
        <Route path="/user-profile" element={<UserProfile />} />

        {/* Other Pages */}
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
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
          {popup === "login" && (
            <Login
              close={() => setPopup(null)}
              setUser={setUser}
            />
          )}

          {popup === "create" && (
            <CreateAccount
              close={() => setPopup(null)}
              setUser={setUser}
            />
          )}
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;