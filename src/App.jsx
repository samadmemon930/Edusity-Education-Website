import "./App.css";
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

function App() {
  const [playState, setPlayState] = useState(false);

  // 🔥 HASH BASED SCROLL (Vercel + Refresh SAFE)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "home";
    const section = document.getElementById(hash);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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

export default App;
