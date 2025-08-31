'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

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

  const contactPerson = {
    name: "Sahil Jadav",
    position: "Contact Person",
    phone: "+91 9825077239",
    email: "krupa.eng.ent@gmail.com"
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

  const cardVariants = {
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

  return (
    <section id="contact" className="section-standard bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container-balanced relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Let&apos;s Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Something Amazing
            </span>
            <span className="block text-2xl md:text-3xl text-slate-600 font-normal mt-4">
              Together
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to transform your business? Get in touch with our team of experts and let&apos;s discuss 
            how we can help you achieve your goals with our specialized engineering services.
          </motion.p>
        </motion.div>

        {/* Contact Information Grid */}
          <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactInfo.map((info, index) => (
                  <motion.div
              key={info.title}
              className="group relative"
                    variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl p-6 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-slate-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-teal-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                            {info.title}
                </h3>
                
                          {info.link ? (
                            <a
                              href={info.link}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300 block mb-2"
                            >
                              {info.value}
                            </a>
                          ) : (
                  <p className="text-slate-700 font-medium mb-2">
                    {info.value}
                  </p>
                )}
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
          </motion.div>

        {/* Contact Person Section */}
          <motion.div
          className="mb-20"
          variants={containerVariants}
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
                <motion.div
                className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
                variants={itemVariants}
              >
                <Users className="w-10 h-10 text-white" />
                </motion.div>
              
              <motion.h3
                className="text-3xl font-bold mb-4"
                variants={itemVariants}
              >
                {contactPerson.name}
              </motion.h3>
              
              <motion.p
                className="text-xl text-slate-300 mb-6"
                variants={itemVariants}
              >
                {contactPerson.position}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={itemVariants}
              >
                <a
                  href={`tel:${contactPerson.phone}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>{contactPerson.phone}</span>
                </a>
                
                <a
                  href={`mailto:${contactPerson.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>{contactPerson.email}</span>
                </a>
              </motion.div>
            </div>
            </div>
          </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 border border-slate-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Start Your Project?
            </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your engineering requirements and create innovative solutions together. 
                Our team is ready to help you achieve your goals.
              </p>
              <motion.a
                href={`tel:${contactPerson.phone}`}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;