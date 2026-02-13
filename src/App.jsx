import React from "react";
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
import HomePage from "./HomePage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      {/* Common Header */}
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
              <HowItWorks />
              <StatisticsSection />
              <Testimonials />
              <CallToAction />
              <HomePage />
            </>
          }
        />

        {/* ===== Other Pages ===== */}
        <Route path="/dashboard" 
        element={
            <ProtectedRoute>
               <Dashboard />
            </ProtectedRoute>
          } 
          />

        
        <Route path="/QuizPage/*" element={<QuizPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FeatureBoxes" element={<FeatureBoxes />} />
      </Routes>

      {/* Common Footer */}
      <Footer />
    </>
  );
}

export default App;