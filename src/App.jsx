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

  // 🔥 Scroll to section on route change
 useEffect(() => {
  const sectionId = location.pathname.replace("/", "") || "home";

  const scrollToSection = () => {
    const section = document.getElementById(sectionId);

    if (section) {
      // Scroll immediately using smooth behavior
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Use requestAnimationFrame to scroll as soon as DOM is ready
  requestAnimationFrame(scrollToSection);

  // Optional: in case images/fonts take time, also scroll on window load
  window.addEventListener("load", scrollToSection);

  return () => window.removeEventListener("load", scrollToSection);
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
      {/* Catch all routes */}
      <Route path="/*" element={<AppContent />} />
    </Routes>
  );
}

export default App;
