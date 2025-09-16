'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award, Clock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const progressBarRef = useRef(null);

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

  const scrollToAbout = () => {
    if (typeof document !== 'undefined') {
      const element = document.querySelector('#about');
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
    <section id="home" className="relative min-h-screen pt-16 sm:pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Progress Bar */}
      {isClient && (
        <motion.div
          ref={progressBarRef}
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 origin-left z-50"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0.1 }}
        />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-balanced">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Main Headline */}
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Engineering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400">
                  Excellence
                </span>
                <span className="block text-4xl lg:text-5xl text-slate-300 font-normal">
                  Since 1999
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-xl text-slate-300 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                We are one of the leading engineering service providers for special types of equipment designing, 
                manufacturing, fabrication, and mechanical maintenance. Committed to quality services with our 
                fully equipped workshop in GIDC Ankleshwar.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.button
                  onClick={scrollToProducts}
                  className="btn-primary text-lg px-8 py-4 group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <motion.button
                  onClick={scrollToAbout}
                  className="btn-secondary text-lg px-8 py-4 group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
                variants={itemVariants}
              >
                {[
                  { number: '500+', label: 'Projects Delivered', icon: TrendingUp },
                  { number: '50+', label: 'Industries Served', icon: Users },
                  { number: '99%', label: 'Client Satisfaction', icon: Award },
                  { number: `${new Date().getFullYear() - 1999}+`, label: 'Years Experience', icon: Clock }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              className="relative hidden lg:block"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Main Visual Container */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl border border-slate-600/30 overflow-hidden">
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-orange-500/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-orange-400" />
                    </div>
                  </motion.div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-orange-500/50 rounded-tr-2xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;