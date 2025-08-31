'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentYear(new Date().getFullYear().toString());
    }
  }, []);

  // Only render the year when it's available on the client
  const yearDisplay = currentYear || '2024';

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Industries", href: "#industries" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Heat Exchangers", href: "#products" },
        { name: "Pressure Vessels", href: "#products" },
        { name: "Storage Tanks", href: "#products" },
        { name: "Reactors", href: "#products" },
        { name: "Distillation Columns", href: "#products" },
        { name: "Custom Fabrication", href: "#products" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Oil & Gas", href: "#industries" },
        { name: "Pharmaceutical", href: "#industries" },
        { name: "Chemical", href: "#industries" },
        { name: "Power Generation", href: "#industries" },
        { name: "Manufacturing", href: "#industries" },
        { name: "Food & Beverage", href: "#industries" }
      ]
    }
  ];

  const scrollToSection = (href) => {
    if (typeof document !== 'undefined') {
      const element = document.querySelector(href);
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
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container-balanced py-16 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <h3 className="text-2xl font-bold">Krupa Engineering</h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              We are one of the leading engineering service providers for special types of equipment 
              designing, manufacturing, fabrication, and mechanical maintenance. Committed to quality 
              services with our fully equipped workshop in GIDC Ankleshwar.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-slate-300">+91 9825077239</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-slate-300">krupa.eng.ent@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  K-1/209/2 GIDC IND ESTATE, Nr. G. Dalabhai Transpot, GIDC Ankleshwar, Bharuch 393002
                </span>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-lg font-bold text-white mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-slate-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-400 text-sm text-center md:text-left">
                © {yearDisplay} Krupa Engineering Enterprise. All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-slate-300 group-hover:text-orange-400 transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
