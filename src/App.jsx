import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home Section/Home";
import Program from "./Components/Program Section/Program";
import About from "./Components/About Section/About";
import Campus from "./Components/Campus Section/Campus";
import Testimonal from "./Components/Testimonal Section/Testimonal";
import Contact from "./Components/Contact Section/Contact";
import Footer from "./Components/Footer Section/Footer";
import VideoPlayer from "./Components/VideoPlayerSection/VideoPlayer";

function AppContent() {
  const location = useLocation();
  const [playState, setPlayState] = useState(false);

  // 🔥 ROUTE BASED SCROLL
  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {/* ALL SECTIONS ALWAYS PRESENT */}
      <Home />
      <Program />
      <About setPlayState={setPlayState} />
      <Campus />
      <Testimonal />
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<AppContent />} />
      <Route path="/program" element={<AppContent />} />
      <Route path="/about" element={<AppContent />} />
      <Route path="/campus" element={<AppContent />} />
      <Route path="/testimonial" element={<AppContent />} />
      <Route path="/contact" element={<AppContent />} />
    </Routes>
  );
}

export default App;
