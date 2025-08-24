'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'products', 'industries', 'why-us', 'clients', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: 'ℹ️' },
    { name: 'Products', href: '#products', icon: '📦' },
    { name: 'Industries', href: '#industries', icon: '🏭' },
    { name: 'Why Us', href: '#why-us', icon: '⭐' },
    { name: 'Clients', href: '#clients', icon: '👥' },
    { name: 'Gallery', href: '#gallery', icon: '🖼️' },
    { name: 'Contact', href: '#contact', icon: '📞' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      scale: 0.95,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    })
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-navy-blue/95 backdrop-blur-glass border-b border-white/15 shadow-glass' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Logo with Better Animation */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative group"
          >
            <motion.div 
              className="flex items-center gap-4 text-white cursor-pointer"
              onClick={() => scrollToSection('#home')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sparkles className="w-10 h-10 text-orange drop-shadow-lg" />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 animate-pulse"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-10 h-10 text-orange/50" />
                </motion.div>
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-poppins font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  Krupa Engineering
                </div>
                <div className="text-sm text-orange/90 font-inter font-medium tracking-wide">Enterprise</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Desktop Navigation with Better Visual Feedback */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-2 bg-white/8 backdrop-blur-glass rounded-2xl border border-white/15 px-3 py-3 shadow-glass">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: "rgba(255, 106, 0, 0.15)",
                    borderColor: "rgba(255, 106, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 text-white/90 hover:text-white font-inter font-semibold rounded-xl transition-all duration-300 group border border-transparent ${
                    activeSection === item.name.toLowerCase() 
                      ? 'bg-orange/20 text-orange border-orange/30' 
                      : 'hover:bg-white/10'
                  }`}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    {item.name}
                  </span>
                  <motion.div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange/20 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-6 h-1 bg-orange rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-4 rounded-2xl bg-white/8 backdrop-blur-glass border border-white/15 text-white shadow-glass focus:outline-none focus:ring-4 focus:ring-white/30"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 106, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation with Better Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-navy-blue/98 backdrop-blur-glass border-t border-white/15 rounded-b-3xl mx-4 mb-6 shadow-2xl">
                <div className="px-8 py-10 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => scrollToSection(item.href)}
                      className={`group flex items-center w-full text-left py-5 px-6 font-inter font-semibold rounded-2xl transition-all duration-300 border border-transparent ${
                        activeSection === item.name.toLowerCase()
                          ? 'bg-orange/20 text-orange border-orange/30'
                          : 'text-white/90 hover:text-white hover:bg-white/8'
                      }`}
                      whileHover={{ x: 12, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      <div className={`w-3 h-3 rounded-full mr-5 transition-colors duration-300 ${
                        activeSection === item.name.toLowerCase()
                          ? 'bg-orange'
                          : 'bg-orange/60 group-hover:bg-orange'
                      }`} />
                      <span className="text-lg flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        {item.name}
                      </span>
                      {activeSection === item.name.toLowerCase() && (
                        <motion.div
                          className="ml-auto"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                        >
                          <ChevronDown className="w-5 h-5 text-orange" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
                
                {/* Enhanced Mobile Menu Footer */}
                <motion.div 
                  className="px-8 py-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-white/70 text-sm font-inter mb-2">Ready to get started?</div>
                    <motion.button
                      onClick={() => {
                        scrollToSection('#contact');
                        setIsOpen(false);
                      }}
                      className="px-6 py-3 bg-gradient-orange text-white font-semibold rounded-xl shadow-button hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
