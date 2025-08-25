'use client';

import { Zap, Settings, ArrowRight, Play, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const progressBarRef = useRef(null);

  // Enhanced motion values for smoother interactions
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
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollToProducts = () => {
    if (typeof document !== 'undefined') {
      const element = document.querySelector('#products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-transparent to-white/3 opacity-60"></div>
      
      {/* Refined Gradient Orbs - Much more subtle */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Refined Floating Elements - Much smaller and subtle */}
        {techGridPositions.map((particle, index) => (
          <motion.div
            key={`tech-${index}`}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {ambientParticlePositions.map((particle, index) => (
          <motion.div
            key={`ambient-${index}`}
            className="absolute w-0.5 h-0.5 bg-blue-400/15 rounded-full"
            style={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              y: [particle.y, particle.y - particle.yOffset],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

      {/* Centered Main Content */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="container-balanced">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Centered Main Heading */}
            <motion.h1
              className="heading-xl text-white mb-6 text-center max-w-4xl mx-auto leading-tight"
              variants={itemVariants}
            >
              Transforming Industries Through
              <span className="text-gradient-primary block mt-2">Innovative Engineering</span>
            </motion.h1>

            {/* Centered Subtitle */}
            <motion.p
              className="text-body-md text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed text-center"
              variants={itemVariants}
            >
              We deliver cutting-edge solutions that revolutionize how businesses operate. 
              From advanced automation to sustainable technologies, we&apos;re your partner in 
              building the future.
            </motion.p>

            {/* Centered CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 mx-auto"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary text-sm px-5 py-2.5"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={scrollToProducts}
              >
                <span className="flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                className="btn-secondary text-sm px-5 py-2.5"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Centered Stats Section */}
            <motion.div
              className="grid-balanced grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto pt-4 border-t border-white/8"
              variants={itemVariants}
            >
              {[
                { number: '500+', label: 'Projects Delivered', icon: Star },
                { number: '50+', label: 'Industries Served', icon: Settings },
                { number: '99%', label: 'Client Satisfaction', icon: Zap },
                { number: '24/7', label: 'Support Available', icon: Shield }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon-container-secondary mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-0.5 h-2 bg-white/40 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      {isClient && (
        <motion.div
          ref={progressBarRef}
          className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 origin-left z-50"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </section>
  );
};

export default Hero;