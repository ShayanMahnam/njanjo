import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Books from './components/Books';
import Videos from './components/Videos';
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBackground id="tsparticles" />
      <Header />
      <Zoom>
        <Hero />
      </Zoom>
      <Reveal>
        <About />
        <Books />
      </Reveal>
      <Reveal>
        <Videos />
      </Reveal>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
