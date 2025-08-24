'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Headphones, Globe, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: inViewRef, inView: isInView } = useInView({ 
    once: true, 
    margin: "-100px",
    threshold: 0.1
  });

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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-[15%] left-[8%] w-[400px] h-[400px] bg-gradient-radial from-blue-400/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-gradient-radial from-green-500/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange/4 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.01]" />

      {/* Floating Elements */}
      <div className="absolute top-[25%] right-[20%] w-16 h-16 bg-gradient-to-br from-blue-400/8 to-blue-500/4 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-[30%] left-[15%] w-20 h-20 bg-gradient-to-br from-green-500/8 to-green-600/4 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={inViewRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 border border-blue-500/20 mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span className="text-blue-600 font-inter font-bold text-sm tracking-[0.15em]">GET IN TOUCH</span>
              <Headphones className="w-4 h-4 text-blue-600" />
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-8 leading-none"
          >
            Let&apos;s Start Your
            <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent relative">
              Project Today
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter"
          >
            Ready to discuss your industrial equipment requirements? Contact our team of experts 
            for personalized solutions, competitive quotes, and exceptional service.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Left Side - Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Globe className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-inter font-semibold text-sm tracking-wide">REACH US ANYTIME</span>
              </div>
              <h3 className="heading-lg font-poppins text-navy-blue mb-4">
                Connect With Our Experts
              </h3>
              <p className="text-body text-gray-600 font-inter leading-relaxed">
                Our dedicated team is ready to transform your industrial challenges into 
                innovative solutions with personalized service and expert guidance.
              </p>
            </motion.div>

            {/* Enhanced Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="group"
                  >
                    <div className="card-enhanced p-8 hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-orange/30">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange/3 via-transparent to-blue-400/3 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                      
                      <div className="flex items-start space-x-6 relative z-10">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-all duration-400"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-poppins font-bold text-navy-blue mb-3 group-hover:text-orange transition-colors duration-300">
                            {info.title}
                          </h4>
                          <p className="text-gray-500 font-inter text-sm mb-3">{info.description}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-700 hover:text-orange transition-colors duration-300 font-inter font-medium text-lg"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-700 font-inter font-medium text-lg">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-mesh rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Background Elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-12 h-12 text-orange" />
                  </motion.div>
                  <h4 className="text-2xl font-poppins font-bold">Why Contact Us?</h4>
                </div>
                <ul className="space-y-3 text-white/90 font-inter">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                    <span>Free consultation and detailed project assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                    <span>Comprehensive technical specifications and drawings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                    <span>Competitive pricing with transparent quotations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                    <span>Detailed project timeline and delivery schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                    <span>24/7 technical support and after-sales service</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="card-enhanced p-10 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-500">
              <div className="mb-8">
                <h3 className="heading-md font-poppins text-navy-blue mb-4">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  Fill out the form below and our experts will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: 2 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h4 className="text-3xl font-poppins font-bold text-green-600 mb-4">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 font-inter text-lg">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all duration-300 font-inter bg-white hover:border-orange/30"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all duration-300 font-inter bg-white hover:border-orange/30"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all duration-300 font-inter bg-white hover:border-orange/30"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all duration-300 font-inter bg-white hover:border-orange/30"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all duration-300 resize-none font-inter bg-white hover:border-orange/30"
                      placeholder="Tell us about your project requirements, specifications, timeline, and any other details..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-lg py-5"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Google Maps Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <MapPin className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-inter font-semibold text-sm tracking-wide">VISIT OUR FACILITY</span>
            </div>
            <h3 className="heading-lg font-poppins text-navy-blue mb-4">
              Find Us on the Map
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed max-w-2xl mx-auto">
              Located in the heart of Gujarat&apos;s industrial district, our facility is easily accessible for client visits and project discussions.
            </p>
          </div>
          
          <div className="card-enhanced p-12 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="w-full h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-20 h-20 text-gray-500 mx-auto mb-6" />
                </motion.div>
                <p className="text-gray-600 text-2xl font-poppins font-bold mb-4">
                  Interactive Map Integration
                </p>
                <p className="text-gray-500 font-inter mb-4">
                  K-1/209/2 GIDC IND ESTATE, Ankleshwar, Bharuch 393002
                </p>
                <div className="text-sm text-gray-500 font-inter">
                  Gujarat, India • Industrial Zone
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;