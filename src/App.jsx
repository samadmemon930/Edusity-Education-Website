import './App.css';
import About from './Components/About Section/About';
import Home from './Components/Home Section/Home';
import Navbar from "./Components/Navbar/Navbar";
import Program from './Components/Program Section/Program';
import Campus from './Components/Campus Section/Campus';
import Testimonal from './Components/Testimonal Section/Testimonal';
import Contact from './Components/Contact Section/Contact';
import Footer from './Components/Footer Section/Footer';
import VideoPlayer from './Components/VideoPlayerSection/VideoPlayer';
import { useState } from 'react';



function App() {


  const [playState,setPlayState] = useState(false)

  return (
    <>
      <Navbar/>
      <Home/>
      <Program/>
      <About setPlayState = {setPlayState} />
      <Campus/>
      <Testimonal/>
      <Contact/>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
    </>
  );
}

export default App;

