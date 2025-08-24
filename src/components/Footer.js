'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4"
            >
              Krupa Engineering Enterprise
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              Leading manufacturer of industrial equipment and custom fabrication solutions. 
              Delivering quality, innovation, and reliability since 1995.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+91 9825077239</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">krupa.eng.ent@gmail.com</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  K-1/209/2 GIDC IND ESTATE, Nr. G. Dalabhai Transpot, 
                  GIDC Ankleshwar, Bharuch 393002
                </span>
              </motion.div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
                className="text-lg font-semibold mb-4 text-orange-400"
              >
                {section.title}
              </motion.h4>
              
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-sm"
            >
              © {currentYear} Krupa Engineering Enterprise. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center text-gray-400 text-sm"
          >
            <p>
              ISO 9001:2015 Certified • ASME Code Compliant • 
              Member of Indian Engineering Association
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
