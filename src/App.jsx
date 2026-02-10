import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import StudentAuth from "./components/StudentAuth";

function HomePage() {
  return (
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
  );
}

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<student_login />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
