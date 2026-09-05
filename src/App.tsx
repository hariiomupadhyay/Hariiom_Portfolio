import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import FloatingDots from './components/FloatingDot';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import CapabilityStrip from './components/CapabilityStrip';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Philosophy from './components/Philosophy';

import CursorSpotlight from './components/CursorSpotlight';

import HowIWork from './components/HowIWork';

import FAQ from './components/FAQ';
import Contact from './components/Contact';

import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[color:var(--color-bg)] text-[color:var(--color-text-primary)] min-h-screen selection:bg-[color:var(--color-accent-strong)]/30 selection:text-[color:var(--color-accent-soft)] font-sans antialiased overflow-x-hidden relative transition-colors duration-300">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="grain-overlay" />
      <FloatingDots />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main>
         
          <Hero isReady={!isLoading} />
          <CapabilityStrip />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Philosophy />
          
          <CursorSpotlight />
          
          <HowIWork />
       
          <FAQ />
          <Contact />
     
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;