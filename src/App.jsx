import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
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

  // 1. Browser ka default scroll behavior band karein
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Custom Scroll Logic
  useEffect(() => {
    const sectionId = location.pathname.replace("/", "");
    
    // Agar path khali hai to home, warna sectionId
    const targetId = sectionId === "" ? "home" : sectionId;

    // Thora delay taake sections render ho jayein
    const timer = setTimeout(() => {
      const section = document.getElementById(targetId);

      if (section) {
        // "block: start" ensure karega ke section top par hi aye
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Agar section na mile to top par jao (fallback)
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300); // Maine delay 100 se 300 kardiya hai (Safe side ke liye)

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />
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
      <Route path="/*" element={<AppContent />} />
    </Routes>
  );
}

export default App;