'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { whyChooseUs } from '../data/products';
import { Shield, Clock, Users, Settings, CheckCircle, Award, Zap, Star, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
  const { ref: inViewRef, inView: isInView } = useInView({ 
    once: true, 
    margin: "-100px",
    threshold: 0.1 
  });

  const iconMap = {
    Shield: Shield,
    Clock: Clock,
    Users: Users,
    Settings: Settings
  };

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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="why-us" className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-radial from-green-400/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[15%] left-[8%] w-[350px] h-[350px] bg-gradient-radial from-blue-500/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange/4 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.01]" />

      {/* Floating Elements */}
      <div className="absolute top-[25%] left-[15%] w-20 h-20 bg-gradient-to-br from-green-400/8 to-green-500/4 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-[30%] right-[20%] w-16 h-16 bg-gradient-to-br from-blue-500/8 to-purple-500/4 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />

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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 border border-green-500/20 mb-8">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Trophy className="w-5 h-5 text-green-600" />
              </motion.div>
              <span className="text-green-600 font-inter font-bold text-sm tracking-[0.15em]">WHY CHOOSE US</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-green-600 fill-green-600" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-8 leading-none"
          >
            Your Trusted Partner in
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent relative">
              Excellence
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter"
          >
            Discover what makes Krupa Engineering Enterprise your most trusted partner 
            for industrial equipment solutions across diverse sectors.
          </motion.p>
        </motion.div>

        {/* Enhanced Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -8 }}
                className="text-center group"
              >
                <div className="card-enhanced p-8 text-center hover:shadow-2xl transition-all duration-500 group border-t-4 border-orange">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon Container */}
                    <motion.div 
                      className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-400`}
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    <h3 className="heading-md font-poppins text-navy-blue mb-4 group-hover:text-orange transition-colors duration-400">
                      {feature.title}
                    </h3>
                    
                    <p className="text-body text-gray-600 leading-relaxed font-inter">
                      {feature.description}
                    </p>

                    {/* Quality Badge */}
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 group-hover:bg-orange/10 rounded-full transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 text-sm font-inter font-semibold">VERIFIED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Additional Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Enhanced Left Side - Benefits List */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-inter font-semibold text-sm tracking-wide">COMPETITIVE ADVANTAGES</span>
              </div>
              <h3 className="heading-lg font-poppins text-navy-blue mb-4">
                What Sets Us Apart
              </h3>
              <p className="text-body text-gray-600 font-inter leading-relaxed">
                Our commitment to excellence drives every aspect of our operations
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { text: "ISO 9001:2015 Quality Management System", icon: "🏆" },
                { text: "ASME Boiler & Pressure Vessel Code compliance", icon: "⚡" },
                { text: "In-house design and engineering capabilities", icon: "🔧" },
                { text: "Comprehensive testing and quality control", icon: "🔍" },
                { text: "Timely project delivery and support", icon: "⏰" },
                { text: "Competitive pricing and value engineering", icon: "💰" },
                { text: "24/7 technical support and maintenance", icon: "📞" },
                { text: "Custom solutions for unique requirements", icon: "⭐" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-gray-100 hover:border-orange/20"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-lg">{benefit.icon}</div>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-700 font-inter leading-relaxed group-hover:text-navy-blue transition-colors duration-300 font-medium">
                      {benefit.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Right Side - Stats Card */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Main Stats Card */}
            <div className="bg-gradient-mesh rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Background Patterns */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-4"
                  >
                    <Trophy className="w-16 h-16 text-orange" />
                  </motion.div>
                  <h4 className="heading-md font-poppins mb-4 text-shadow-lg">
                    Our Track Record
                  </h4>
                  <p className="text-white/90 font-inter">
                    Numbers that speak for our excellence
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "25+", label: "Years Experience", color: "from-orange to-orange-600" },
                    { value: "500+", label: "Projects", color: "from-blue-400 to-blue-600" },
                    { value: "50+", label: "Clients", color: "from-green-400 to-green-600" },
                    { value: "99%", label: "Satisfaction", color: "from-purple-400 to-purple-600" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center group"
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className={`text-5xl font-poppins font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-white/90 text-sm font-inter font-semibold leading-tight">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              variants={itemVariants}
              className="card-enhanced p-8 text-center bg-gradient-to-br from-white to-gray-50"
            >
              <div className="mb-6">
                <Zap className="w-12 h-12 text-orange mx-auto mb-4" />
                <h4 className="text-2xl font-poppins font-bold text-navy-blue mb-3">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 font-inter leading-relaxed mb-6">
                  Join hundreds of satisfied customers who trust us with their critical projects
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Get Started Today</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;