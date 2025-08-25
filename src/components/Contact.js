'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Headphones, Globe, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9825077239",
      link: "tel:+919825077239",
      description: "Call us anytime for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "krupa.eng.ent@gmail.com",
      link: "mailto:krupa.eng.ent@gmail.com",
      description: "Send us your detailed requirements"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "K-1/209/2 GIDC IND ESTATE, Nr. G. Dalabhai Transpot, GIDC Ankleshwar, Bharuch 393002",
      link: null,
      description: "Visit our state-of-the-art facility"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Monday - Friday: 8:00 AM - 6:00 PM",
      link: null,
      description: "Always available for urgent requirements"
    }
  ];

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const cardVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="contact" className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-balanced">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            Let&apos;s Build Something <span className="text-gradient-primary">Amazing</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts and let&apos;s discuss 
            how we can help you achieve your goals.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="card-elevated text-center group"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-container mx-auto mb-3">
                <info.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="heading-sm text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-body-md text-gray-600 hover:text-orange-600 transition-colors duration-200 block mb-2"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-body-md text-gray-600 mb-2">{info.value}</p>
              )}
              <p className="text-body-sm text-gray-500">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Map Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Form */}
          <motion.div
            className="card-elevated"
            variants={formVariants}
          >
            <div className="mb-6">
              <h3 className="heading-md text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-body-md text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitted}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Map Placeholder */}
            <div className="card-elevated">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400" />
              </div>
              <div className="mt-4">
                <h4 className="heading-sm text-gray-900 mb-2">Our Location</h4>
                <p className="text-body-md text-gray-600">Visit our state-of-the-art facility in Ankleshwar, Gujarat. We&apos;re conveniently located in the GIDC Industrial Estate.</p>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="card-elevated">
              <h4 className="heading-sm text-gray-900 mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                {[
                  { icon: Headphones, text: "24/7 Customer Support" },
                  { icon: Globe, text: "Global Service Network" },
                  { icon: Star, text: "Proven Track Record" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="icon-container-secondary">
                      <item.icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-body-md text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;