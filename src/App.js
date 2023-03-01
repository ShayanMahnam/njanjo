import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Books from './components/Books';

import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBackground id="tsparticles" />
      <Header />
      <Hero />
      <About />
      <Books />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
