import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { LanguageProvider } from "./context/LanguageContext";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Placements from "./components/Placements";
import Research from "./components/Research";
import VisionMission from "./components/VisionMission";
import Contact from "./components/Contact";
import Admission from "./components/Admission";
import PGAdmission from "./components/PGAdmission";
import VirtualTour from "./components/VirtualTour"; 
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import AppointmentButton from "./components/AppointmentButton";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
        {/* Global background layer */}
        <Background />
        <ScrollToTop />
        <Navbar />
        <WhatsAppButton />
        <AppointmentButton />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Stats />
              </>
            } />
            <Route path="/facilities" element={<Features />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/research" element={<Research />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/pg-admission" element={<PGAdmission />} />
            <Route path="/programs" element={<Faculty />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
      </Router>
    </LanguageProvider>
  );
}