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
    <section id="contact" className="section-standard scroll-offset bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-visible md:overflow-hidden">
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
      </div>
    </section>
  );
};

export default Contact;