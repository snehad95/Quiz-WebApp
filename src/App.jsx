import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Footer from "./components/Footer";
import Info from "./components/Info";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Course from "./components/Course";
import Exams from "./components/Exams";
import About from "./components/About";
import ExamCategories from "./ExamCategories";
import HomePage from "./HomePage";



function App() {
  return (
    <>
      {/* Common Header */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              <FeatureBoxes />
              <Info />
              <ExamCategories/>
              <HomePage/>
            </>
          }
        />

        {/* Create Account Page */}
        
        <Route path="/create-account" element={<CreateAccount />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Course" element={<Course />} />
         <Route path="/Exams" element={<Exams />} />
         <Route path="/About" element={<About />} />
         <Route path="/FeatureBoxes" element={<FeatureBoxes />} />
    

        </Routes>

      {/* Common Footer */}
      <Footer />
    </>
  );
}

export default App;
