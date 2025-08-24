'use client';

import { Award, Target, Eye, TrendingUp, Users, Shield, CheckCircle, Star, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Always call useScroll to maintain hook order, but conditionally use its values
  const scrollData = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  // Conditionally use scroll values only after client-side hydration
  const y = useTransform(scrollData.scrollYProgress, [0, 1], [100, -100]);
  const yReverse = useTransform(scrollData.scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollData.scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    })
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Elements with Safe Scroll Usage */}
      {isClient ? (
        <>
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"
            style={{ y, opacity }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
            style={{ y: yReverse, opacity }}
          />
        </>
      ) : (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        </>
      )}
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={(node) => { ref(node); scrollRef.current = node; }}>
        {/* Enhanced Header with Better Typography */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy-blue/10 border border-navy-blue/20 mb-10"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(10, 26, 60, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-5 h-5 text-navy-blue" />
              </motion.div>
              <span className="text-navy-blue font-inter font-bold text-sm tracking-[0.15em]">ABOUT OUR COMPANY</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-navy-blue fill-navy-blue" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-10 leading-tight"
          >
            Pioneering Excellence in
            <span className="block bg-gradient-orange bg-clip-text text-transparent relative">
              Industrial Engineering
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-orange rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-5xl mx-auto leading-relaxed font-inter"
          >
            Leading manufacturer of industrial equipment with over 25 years of experience, 
            <span className="block mt-3 text-xl font-medium">delivering innovative solutions that power industries worldwide.</span>
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Enhanced Left Content with Better Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  variants={itemVariants}
                  className="text-body text-gray-700 leading-relaxed font-inter mb-8"
                >
                  Krupa Engineering Enterprise is a leading manufacturer of industrial equipment and custom fabrication solutions, established in 1995. We specialize in the design, manufacture, and supply of high-quality equipment for various industries including oil & gas, pharmaceutical, chemical, power generation, and manufacturing.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-body text-gray-700 leading-relaxed font-inter mb-8"
                >
                  Our state-of-the-art manufacturing facility is equipped with modern machinery and staffed by experienced engineers and technicians. We maintain strict quality control standards and are ISO 9001:2015 certified, ensuring that every product meets international quality standards.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-body text-gray-700 leading-relaxed font-inter"
                >
                  With a commitment to innovation, quality, and customer satisfaction, we have successfully delivered projects across India and established long-term partnerships with leading companies in various sectors.
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Stats with Better Visual Design */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { number: "25+", label: "Years of Excellence", icon: Award, color: "orange", accent: "from-orange-500 to-orange-600" },
                { number: "500+", label: "Projects Delivered", icon: Target, color: "blue", accent: "from-blue-500 to-blue-600" },
                { number: "50+", label: "Happy Clients", icon: Users, color: "green", accent: "from-green-500 to-green-600" },
                { number: "99%", label: "Success Rate", icon: Shield, color: "purple", accent: "from-purple-500 to-purple-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  variants={statsVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="group"
                >
                  <motion.div 
                    className="card-enhanced text-center p-8 hover:shadow-card-hover relative overflow-hidden"
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl" />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center bg-gradient-to-br ${stat.accent} shadow-lg group-hover:shadow-2xl transition-all duration-400`}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </motion.div>
                      <motion.div 
                        className="text-4xl font-poppins font-bold text-navy-blue mb-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-gray-600 font-inter font-semibold text-lg">{stat.label}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Mission & Vision Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {/* Enhanced Mission Card */}
            <motion.div 
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <motion.div 
                className="card-enhanced gradient-border p-12 hover:shadow-card-hover relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 30px 80px rgba(255, 106, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-8 mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-orange rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Target className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                    <div>
                      <h3 className="heading-md font-poppins text-navy-blue mb-4">Our Mission</h3>
                      <motion.div 
                        className="w-24 h-1 bg-gradient-orange rounded-full mb-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <p className="text-body text-gray-700 leading-relaxed font-inter text-lg">
                    To provide innovative, high-quality industrial equipment solutions that exceed customer expectations while maintaining the highest standards of safety, reliability, and performance in every project we undertake.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Vision Card */}
            <motion.div 
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <motion.div 
                className="card-enhanced gradient-border-blue p-12 hover:shadow-card-hover relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 30px 80px rgba(37, 99, 235, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-8 mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Eye className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                    <div>
                      <h3 className="heading-md font-poppins text-navy-blue mb-4">Our Vision</h3>
                      <motion.div 
                        className="w-24 h-1 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <p className="text-body text-gray-700 leading-relaxed font-inter text-lg">
                    To be the most trusted and preferred partner for industrial equipment solutions, recognized globally for our innovation, quality, and unwavering commitment to customer success across all industries we serve.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Experience Card */}
            <motion.div 
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group"
            >
              <motion.div 
                className="bg-gradient-mesh rounded-3xl p-12 text-white shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 30px 80px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-6 mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      <Award className="w-16 h-16 text-orange drop-shadow-2xl" />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-6xl font-poppins font-bold text-white mb-3"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                      >
                        25+
                      </motion.div>
                      <p className="text-white/95 font-inter font-semibold text-xl">Years of Excellence</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/90 font-inter text-xl leading-relaxed">
                      in Industrial Equipment Manufacturing & Engineering Solutions
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Certification & Quality Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="heading-lg font-poppins text-navy-blue mb-16"
          >
            Quality & Certifications
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { 
                title: "ISO 9001:2015", 
                description: "Quality Management System certified for consistent excellence",
                icon: Award,
                color: "from-green-500 to-green-600",
                features: ["Quality Assurance", "Process Control", "Continuous Improvement"]
              },
              { 
                title: "ASME Compliance", 
                description: "Adherence to international standards for pressure equipment",
                icon: Shield,
                color: "from-blue-500 to-blue-600",
                features: ["Safety Standards", "International Compliance", "Pressure Equipment"]
              },
              { 
                title: "Expert Team", 
                description: "Skilled engineers and technicians with decades of experience",
                icon: Users,
                color: "from-orange-500 to-orange-600",
                features: ["Skilled Engineers", "Technical Expertise", "Industry Experience"]
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group"
              >
                <motion.div 
                  className="card-enhanced text-center p-10 hover:shadow-card-hover relative overflow-hidden"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-24 h-24 bg-gradient-to-br ${cert.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-400`}
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <cert.icon className="w-12 h-12 text-white drop-shadow-lg" />
                    </motion.div>
                    <h4 className="text-3xl font-poppins font-bold text-navy-blue mb-6">{cert.title}</h4>
                    <p className="text-gray-600 font-inter leading-relaxed text-lg mb-6">{cert.description}</p>
                    
                    {/* Enhanced Feature List */}
                    <div className="space-y-3">
                      {cert.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex items-center justify-center gap-3 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 + index * 0.2 + idx * 0.1, duration: 0.5 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="font-inter font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;