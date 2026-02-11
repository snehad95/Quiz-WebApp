import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Slideshow from "./components/Slideshow";
import FeatureBoxes from "./components/FeatureBoxes";
import Info from "./components/Info";
import ExamCategories from "./components/ExamCategories";
import WhyChooseExamSphere from "./components/WhyChooseExamSphere";
import HowItWorks from "./components/HowItWorks";
import StatisticsSection from "./components/StatisticsSection";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import QuizPage from "./components/QuizPage";
import About from "./components/About";
import Course from "./components/Course";



function App() {
  return (
    <>
      <Header />

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
       


      </Routes>
          <Footer />
    </>
  );
}

export default App;

