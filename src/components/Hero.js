'use client';

import { ChevronDown, Sparkles, Zap, Settings, ArrowRight, Play, Star } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Enhanced motion values for smoother interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Pre-calculated positions for tech grid particles to avoid hydration issues
  const techGridPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 30; i++) {
      // Use deterministic values based on index instead of Math.random()
      const seed = i * 12345; // Simple seed for deterministic randomness
      const top = ((seed * 7) % 100) + (i * 3.33) % 20;
      const left = ((seed * 11) % 100) + (i * 2.5) % 15;
      const delay = (seed % 8) + (i * 0.5);
      const duration = 8 + (seed % 8);
      
      positions.push({
        top: Math.min(top, 95),
        left: Math.min(left, 95),
        delay: delay,
        duration: duration
      });
    }
    return positions;
  }, []);

  // Pre-calculated positions for ambient particles to avoid hydration issues
  const ambientParticlePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 60; i++) {
      // Use deterministic values based on index instead of Math.random()
      const seed = i * 67890; // Different seed for ambient particles
      const x = ((seed * 13) % 1920) + (i * 17) % 100;
      const y = ((seed * 19) % 1080) + (i * 23) % 100;
      const delay = (seed % 8) + (i * 0.3);
      const duration = 15 + (seed % 15);
      const yOffset = 50 + (seed % 100);
      
      positions.push({
        x: Math.min(x, 1920),
        y: Math.min(y, 1080),
        delay: delay,
        duration: duration,
        yOffset: yOffset
      });
    }
    return positions;
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY]);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 150,
        damping: 25
      }
    })
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Don't render particles until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-mesh">
        {/* Static background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy-blue/85 to-steel-gray/60" />
        
        {/* Static floating shapes */}
        <div className="absolute top-[8%] right-[12%] w-44 h-44 bg-gradient-to-br from-orange/25 to-orange-600/15 rounded-full blur-2xl" />
        <div className="absolute bottom-[12%] left-[10%] w-36 h-36 bg-gradient-to-br from-blue-400/25 to-purple-600/15 rounded-full blur-2xl" />
        <div className="absolute top-[30%] left-[6%] w-24 h-24 bg-orange/20 transform rotate-45 blur-md" />
        <div className="absolute bottom-[25%] right-[8%] w-28 h-28 border-2 border-orange/40 rounded-full" />

        {/* Main content placeholder */}
        <div className="container mx-auto text-center text-white relative z-10 px-6 lg:px-8 max-w-7xl">
          <div className="mb-10">
            <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-glass border border-white/25 backdrop-blur-glass shadow-glass">
              <Sparkles className="w-6 h-6 text-orange drop-shadow-lg" />
              <span className="text-white/95 font-inter font-semibold text-base sm:text-lg tracking-wider">
                PIONEERING INDUSTRIAL EXCELLENCE SINCE 1995
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange fill-orange" />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h1 className="heading-xl font-poppins leading-none mb-8">
              <span className="inline-block mr-10 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent text-shadow-xl">
                Krupa
              </span>
              <span className="inline-block mr-10 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent text-shadow-xl">
                Engineering
              </span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)] font-bold mt-6 bg-gradient-orange bg-clip-text text-transparent relative">
                Enterprise
              </span>
            </h1>
          </div>

          <div className="mb-20">
            <p className="text-body-lg text-white/90 max-w-5xl mx-auto leading-relaxed font-inter">
              Crafting precision-engineered solutions that power industries worldwide. 
              <span className="block mt-3 text-xl">Where innovation meets reliability in every component we create.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
            <button className="group relative px-14 py-7 rounded-2xl font-poppins font-bold text-xl overflow-hidden bg-gradient-orange text-white shadow-button min-w-[300px]">
              <div className="relative flex items-center justify-center gap-4">
                <Zap className="w-7 h-7" />
                <span>Explore Products</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </button>
            
            <button className="group px-14 py-7 rounded-2xl font-poppins font-bold text-xl border-2 border-white/40 text-white bg-glass min-w-[300px]">
              <div className="flex items-center justify-center gap-4">
                <Settings className="w-7 h-7" />
                <span>Get Custom Quote</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-mesh">
      {/* Enhanced Background Elements with Better Performance */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy-blue/85 to-steel-gray/60" />
      
      {/* Enhanced Floating Geometric Shapes with Better Positioning */}
      <motion.div 
        className="absolute top-[8%] right-[12%] w-44 h-44 bg-gradient-to-br from-orange/25 to-orange-600/15 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      />
      <motion.div 
        className="absolute bottom-[12%] left-[10%] w-36 h-36 bg-gradient-to-br from-blue-400/25 to-purple-600/15 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div 
        className="absolute top-[30%] left-[6%] w-24 h-24 bg-orange/20 transform rotate-45 blur-md"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />
      <motion.div 
        className="absolute bottom-[25%] right-[8%] w-28 h-28 border-2 border-orange/40 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enhanced Mouse-following gradient with Spring Physics */}
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-orange/10 via-orange/5 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Enhanced Tech Grid Background with Pre-calculated Positions */}
      <div className="absolute inset-0 opacity-[0.04]">
        {techGridPositions.map((pos, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-orange rounded-full"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange via-orange-500 to-orange-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      {/* Main Content with Enhanced Spacing and Typography */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center text-white relative z-10 px-6 lg:px-8 max-w-7xl"
      >
        {/* Enhanced Subtitle Badge with Better Animation */}
        <motion.div variants={itemVariants} className="mb-10">
          <motion.div 
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-glass border border-white/25 backdrop-blur-glass shadow-glass"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 106, 0, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-orange drop-shadow-lg" />
            </motion.div>
            <span className="text-white/95 font-inter font-semibold text-base sm:text-lg tracking-wider">
              PIONEERING INDUSTRIAL EXCELLENCE SINCE 1995
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange fill-orange" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Main Headline with Better Typography */}
        <div className="mb-16">
          <motion.h1 className="heading-xl font-poppins leading-none mb-8">
            {"Krupa Engineering".split(" ").map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-10 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent text-shadow-xl"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              custom={2}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="block text-[clamp(2.5rem,8vw,6rem)] font-bold mt-6 bg-gradient-orange bg-clip-text text-transparent animate-text-shimmer relative"
              style={{ backgroundSize: '200% 100%' }}
            >
              Enterprise
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-orange rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.span>
          </motion.h1>
        </div>

        {/* Enhanced Description with Better Typography */}
        <motion.div 
          variants={itemVariants}
          className="mb-20"
        >
          <p className="text-body-lg text-white/90 max-w-5xl mx-auto leading-relaxed font-inter">
            Crafting precision-engineered solutions that power industries worldwide. 
            <span className="block mt-3 text-xl">Where innovation meets reliability in every component we create.</span>
          </p>
        </motion.div>

        {/* Enhanced CTA Buttons with Better Interactions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24"
        >
          <motion.button
            onClick={scrollToProducts}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="group relative px-14 py-7 rounded-2xl font-poppins font-bold text-xl overflow-hidden bg-gradient-orange text-white shadow-button min-w-[300px] focus:outline-none focus:ring-4 focus:ring-orange/30"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(255, 106, 0, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={false}
            />
            <div className="relative flex items-center justify-center gap-4">
              <motion.div
                animate={{ 
                  rotate: isHovering ? [0, 15, -15, 0] : 0,
                  scale: isHovering ? 1.1 : 1
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-7 h-7" />
              </motion.div>
              <span>Explore Products</span>
              <motion.div
                animate={{ x: isHovering ? 8 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.button>
          
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="group px-14 py-7 rounded-2xl font-poppins font-bold text-xl border-2 border-white/40 text-white bg-glass hover:bg-white/15 hover:border-orange/60 transition-all duration-300 min-w-[300px] focus:outline-none focus:ring-4 focus:ring-white/30"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div 
                className="group-hover:rotate-90 transition-transform duration-500"
                animate={{ scale: isHovering ? 1.1 : 1 }}
              >
                <Settings className="w-7 h-7" />
              </motion.div>
              <span>Get Custom Quote</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator with Better Animation */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.button 
            className="flex flex-col items-center gap-4 text-white/90 cursor-pointer group focus:outline-none focus:ring-4 focus:ring-white/30 rounded-full p-2"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-inter uppercase tracking-[0.2em] group-hover:text-orange transition-colors duration-300 font-semibold">
              Discover More
            </span>
            <div className="w-[3px] h-16 bg-gradient-to-b from-white/70 via-orange/50 to-transparent rounded-full" />
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={32} className="group-hover:text-orange transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Ambient Particles with Pre-calculated Positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ambientParticlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: pos.x,
              y: pos.y,
            }}
            animate={{
              y: [null, pos.y - pos.yOffset],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;