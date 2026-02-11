import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> upstream/main
import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
<<<<<<< HEAD
import ExamCategories from "./components/ExamCategories";
import WhyChooseExamSphere from "./components/WhyChooseExamSphere";
import HowItWorks from "./components/HowItWorks";
import StatisticsSection from "./components/StatisticsSection";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import QuizPage from "./components/QuizPage";
import About from "./components/About";
import Course from "./components/Course";
=======
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Course from "./components/Course";
import Exams from "./components/Exams";
import About from "./components/About";
import ExamCategories from "./ExamCategories";
import HomePage from "./HomePage";
>>>>>>> upstream/main



function App() {
  return (
    <>
      {/* Common Header */}
      <Header />
<<<<<<< HEAD

      <Routes>
        {/* ===== Home Page ===== */}
        <Route
          path="/"
          element={
            <>
            
              <Slideshow />
              <FeatureBoxes />
              <Info />
              <ExamCategories />
              <WhyChooseExamSphere />
              <HowItWorks />
              <StatisticsSection />
              <Testimonials />
              <CallToAction />
              
            
          
            </>
          }
        />

        {/* ===== Quiz Page ===== */}
        <Route path="/QuizPage/*" element={<QuizPage />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Course" element={<Course/>}/>
       
=======
>>>>>>> upstream/main

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

<<<<<<< HEAD
      </Routes>
          <Footer />
=======
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
>>>>>>> upstream/main
    </>
  );
}

export default App;

