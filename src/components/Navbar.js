'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 80);
        if (typeof document !== 'undefined') {
          const sections = ['home', 'about', 'products', 'industries', 'clients', 'contact'];
          const current = sections.find(section => {
            const element = document.querySelector(`#${section}`);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 150 && rect.bottom >= 150;
            }
            return false;
          });
          if (current) setActiveSection(current);
        }
      }
    };
    
    const handleScrollClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('scroll', handleScrollClose, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScrollClose);
      };
    }
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';
    } else {
      body.style.overflow = '';
      body.style.touchAction = '';
    }
    return () => {
      body.style.overflow = '';
      body.style.touchAction = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    if (!isClient || typeof document === 'undefined' || typeof window === 'undefined') return;
    const element = document.querySelector(href);
    if (!element) return;
    setIsOpen(false);
    setTimeout(() => {
      const rect = element.getBoundingClientRect();
      const offset = 72; // approx navbar height
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 100);
  };

  const handleMobileNavigation = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(href);
    }, 150);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      scale: 0.98,
      y: -10,
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -15, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/98 backdrop-blur-xl border-b border-gray-700/40 shadow-xl' 
          : 'bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/20'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-balanced">
        <div className="flex items-center justify-between h-16">
          {/* Professional Logo - Left Side */}
          <motion.div
            className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection('#home')}
            >
              <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-white leading-tight">
                  Krupa Engineering
              </h1>
              <p className="text-xs text-gray-300 font-medium leading-tight">Innovation & Excellence</p>
              </div>
          </motion.div>

          {/* Professional Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 group-hover:bg-white/5 ${
                      activeSection === item.name.toLowerCase().replace(' ', '-')
                        ? 'text-orange-400 bg-orange-500/15 border border-orange-500/25'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    
                    {/* Subtle Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
                    {/* Active Indicator */}
                    {activeSection === item.name.toLowerCase().replace(' ', '-') && (
                  <motion.div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"
                      layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional CTA Button - Right Side */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            variants={itemVariants}
            custom={navItems.length}
            initial="hidden"
            animate="visible"
          >
            <button 
              className="btn-primary text-sm px-5 py-2.5"
              onClick={() => scrollToSection('#contact')}
            >
              <span className="flex items-center gap-2">
                Get Started

              </span>
            </button>
          </motion.div>

          {/* Professional Mobile Menu Button - Right Side */}
          <motion.button
            className="lg:hidden relative z-50 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-200 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
              <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
              </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Professional Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-700/30 rounded-b-xl shadow-xl"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="py-4 space-y-1">
                  {navItems.map((item, index) => (
                  <motion.div
                      key={item.name}
                    variants={mobileItemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                  >
                    <button
                      onClick={() => handleMobileNavigation(item.href)}
                      onTouchEnd={() => handleMobileNavigation(item.href)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 text-left touch-manipulation ${
                        activeSection === item.name.toLowerCase().replace(' ', '-')
                          ? 'text-orange-400 bg-orange-500/15 border border-orange-500/25'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white active:bg-white/10'
                      }`}
                    >
                        {item.name}
                      {activeSection === item.name.toLowerCase().replace(' ', '-') && (
                        <div className="ml-auto w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      )}
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div 
                  variants={mobileItemVariants}
                  custom={navItems.length}
                  initial="hidden"
                  animate="visible"
                  className="pt-3"
                >
                  <button 
                    className="w-full btn-primary text-sm px-4 py-3 touch-manipulation"
                    onClick={() => handleMobileNavigation('#contact')}
                    onTouchEnd={() => handleMobileNavigation('#contact')}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
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
