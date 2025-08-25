'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Industries", href: "#industries" },
        { name: "Gallery", href: "#gallery" },
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-balanced py-12">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <h3 className="heading-md text-white mb-3">
              Krupa Engineering Enterprise
            </h3>
            
            <p className="text-body-md text-gray-300 mb-4 leading-relaxed">
              Leading manufacturer of industrial equipment and custom fabrication solutions. 
              Delivering quality, innovation, and reliability since 1995.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+91 9825077239</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">krupa.eng.ent@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">
                  K-1/209/2 GIDC IND ESTATE, Ankleshwar, Bharuch 393002
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-3 mt-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              className="space-y-3"
              variants={itemVariants}
            >
              <h4 className="heading-sm text-white mb-3">{section.title}</h4>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-body-sm text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="pt-8 border-t border-gray-700"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-body-sm text-gray-400 text-center md:text-left">
              © {currentYear} Krupa Engineering Enterprise. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-body-sm text-gray-400">
              <button className="hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </button>
              <button className="hover:text-orange-400 transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
