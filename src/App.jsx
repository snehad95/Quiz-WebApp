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

function App() {
  return (
    <>
      <Header />

      <Routes>
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
              <Footer />
            </>
          }
        />

        <Route path="/quiz" element={<QuizPage />} />
   
        <Route path="/" element={<header/>} />
      </Routes>
    </>
  );
}

export default App;
