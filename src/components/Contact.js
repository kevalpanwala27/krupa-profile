'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
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

  return (
    <section id="contact" className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-balanced">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg text-gray-900 mb-6">
            Let&apos;s Build Something <span className="text-gradient-primary">Amazing</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts and let&apos;s discuss 
            how we can help you achieve your goals.
          </p>
        </motion.div>

        {/* Enhanced Contact Information Grid */}
        <motion.div
          className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="card-elevated text-center group relative overflow-hidden"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white group-hover:rotate-3 transition-transform duration-300" />
                </div>
                <h3 className="heading-sm text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-body-md text-gray-700 hover:text-orange-600 transition-colors duration-200 block mb-3 font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-body-md text-gray-700 mb-3 font-medium">{info.value}</p>
                )}
                <p className="text-body-sm text-gray-500 leading-relaxed">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;