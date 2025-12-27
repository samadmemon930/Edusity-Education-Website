import './App.css';
import About from './Components/About Section/About';
import Home from './Components/Home Section/Home';
import Navbar from "./Components/Navbar/Navbar";
import Program from './Components/Program Section/Program';
import Campus from './Components/Campus Section/Campus';
import Testimonal from './Components/Testimonal Section/Testimonal';
import Contact from './Components/Contact Section/Contact';
import Footer from './Components/Footer Section/Footer';



function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Program/>
      <About/>
      <Campus/>
      <Testimonal/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;

