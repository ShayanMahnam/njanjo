import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBackground id="tsparticles" />
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
