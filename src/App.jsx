import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BrandWall from './components/BrandWall';
import Work from './components/Work';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyMe from './components/WhyMe';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Fake loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', updateMouse);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', updateMouse);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-[#f0f0f0] overflow-hidden selection:bg-[#C5A059] selection:text-black relative">
      <Cursor />
      <AnimatePresence mode='wait'>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />

          {/* Background Ambience */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <motion.div
              animate={{
                x: mousePosition.x * 0.05,
                y: mousePosition.y * 0.05,
              }}
              transition={{ type: "spring", damping: 30, stiffness: 50 }}
              className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gold rounded-full mix-blend-screen opacity-[0.03] blur-[120px]"
            />
            <motion.div
              animate={{
                x: mousePosition.x * -0.05,
                y: mousePosition.y * -0.05,
              }}
              transition={{ type: "spring", damping: 30, stiffness: 50 }}
              className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-white rounded-full mix-blend-screen opacity-[0.02] blur-[100px]"
            />
          </div>

          <main className="relative z-10 w-full">
            <Hero />
            <BrandWall />
            <About />
            <Services />
            <Process />
            <Work />
            <Founders />
            <Testimonials />
            <FAQ />
            <WhyMe />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
