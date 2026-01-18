import React, { useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BrandWall from './components/BrandWall';
import Work from './components/Work';
import DigitalPerformance from './components/DigitalPerformance';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyMe from './components/WhyMe';
import Cursor from './components/Cursor';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  /* OPTIMIZATION: Use MotionValues for mouse position to avoid re-rendering the entire App tree on every mouse move */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMouse = (e) => {
      // Update MotionValues directly - triggers NO React re-renders
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    window.addEventListener('mousemove', updateMouse);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
    };
  }, [mouseX, mouseY]);

  // Transforms for the background blobs
  const blob1X = useTransform(mouseXSpring, (x) => x * 0.05);
  const blob1Y = useTransform(mouseYSpring, (y) => y * 0.05);

  const blob2X = useTransform(mouseXSpring, (x) => x * -0.05);
  const blob2Y = useTransform(mouseYSpring, (y) => y * -0.05);

  return (
    <div className="bg-black min-h-screen text-[#f0f0f0] selection:bg-[#C5A059] selection:text-black relative">
      {/* <SEO /> */}
      <Cursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />

        {/* Background Ambience */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <motion.div
            style={{
              x: blob1X,
              y: blob1Y,
            }}
            // Remove animate prop as we use style
            className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gold rounded-full mix-blend-screen opacity-[0.03] blur-[120px]"
          />
          <motion.div
            style={{
              x: blob2X,
              y: blob2Y,
            }}
            // Remove animate prop as we use style
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
          <DigitalPerformance />
          <Founders />
          <Testimonials />
          <FAQ />
          <WhyMe />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
