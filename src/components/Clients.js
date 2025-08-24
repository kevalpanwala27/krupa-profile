'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { clients } from '../data/products';
import { Star, Award, Heart, Building2, TrendingUp } from 'lucide-react';

const Clients = () => {
  const { ref: inViewRef, inView: isInView } = useInView({ 
    once: true, 
    margin: "-100px",
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12
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
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: "easeOut",
        type: "spring",
        stiffness: 150
      }
    })
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <section id="clients" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-gradient-radial from-blue-400/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-gradient-radial from-green-500/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange/4 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.012]" />

      {/* Floating Elements */}
      <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-gradient-to-br from-blue-400/10 to-blue-500/5 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-[25%] left-[15%] w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }} />

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
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </motion.div>
              <span className="text-blue-600 font-inter font-bold text-sm tracking-[0.15em]">TRUSTED BY THE BEST</span>
              <Building2 className="w-4 h-4 text-blue-600" />
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-8 leading-none"
          >
            Our Trusted
            <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent relative">
              Partners
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter"
          >
            We are proud to serve leading companies across various industries, 
            building lasting partnerships through exceptional service and quality.
          </motion.p>
        </motion.div>

        {/* Enhanced Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
              className="group"
            >
              <div className="card-enhanced p-8 text-center hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-orange/30 bg-gradient-to-br from-white to-gray-50">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/3 via-transparent to-blue-400/3 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Client Logo/Avatar */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-400 relative overflow-hidden"
                      whileHover={{ rotate: 5 }}
                    >
                      <motion.div
                        className="text-4xl font-poppins font-black text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {client.name.charAt(0)}
                      </motion.div>
                      {/* Logo Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    {/* Trust Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-poppins font-bold text-navy-blue group-hover:text-orange transition-colors duration-300">
                      {client.name}
                    </h3>
                    
                    {/* Quality Indicators */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        >
                          <Star className="w-3 h-3 text-orange fill-orange" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Partnership Duration */}
                    <div className="text-xs text-gray-500 font-inter font-medium">
                      Trusted Partner Since 2019
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600 font-inter font-semibold text-sm tracking-wide">PROVEN RESULTS</span>
            </div>
            <h3 className="heading-lg font-poppins text-navy-blue">
              Numbers That Matter
            </h3>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "500+", label: "Projects Completed", icon: "📊", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10" },
              { value: "50+", label: "Happy Clients", icon: "😊", color: "from-green-500 to-green-600", bgColor: "bg-green-500/10" },
              { value: "25+", label: "Years Experience", icon: "⭐", color: "from-orange-500 to-orange-600", bgColor: "bg-orange/10" },
              { value: "99%", label: "Client Retention", icon: "💯", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/10" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statsVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.08, y: -6 }}
                className="text-center group"
              >
                <div className="card-enhanced p-8 hover:shadow-2xl transition-all duration-500">
                  <div className="relative mb-6">
                    <motion.div 
                      className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{ rotate: 10 }}
                    >
                      <div className="text-3xl">{stat.icon}</div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className={`text-5xl font-poppins font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600 font-inter font-semibold leading-tight">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Testimonial Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-mesh rounded-3xl p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/15 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-6"
                >
                  <Award className="w-16 h-16 text-orange" />
                </motion.div>
                <h3 className="heading-lg font-poppins mb-4 text-shadow-lg">
                  What Our Clients Say
                </h3>
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-inter leading-relaxed text-white/95 mb-8 italic">
                  &ldquo;Krupa Engineering Enterprise consistently delivers exceptional quality and reliability. 
                  Their expertise in industrial equipment manufacturing is unmatched.&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">CEO</span>
                  </div>
                  <div className="text-left">
                    <div className="font-poppins font-bold text-lg">Leading Industrial Client</div>
                    <div className="text-white/80 font-inter">Manufacturing Sector</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;