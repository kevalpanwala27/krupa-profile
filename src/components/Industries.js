'use client';

import { industries } from '../data/products';
import { 
  Fuel, 
  Pill, 
  FlaskRound, 
  Zap, 
  Factory, 
  Utensils,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const iconMap = {
    Oil: Fuel,
    Pill: Pill,
    Flask: FlaskRound,
    Zap: Zap,
    Factory: Factory,
    Utensils: Utensils
  };

  const colorMap = {
    'from-blue-600 to-blue-800': 'from-blue-600 via-blue-700 to-blue-800',
    'from-green-600 to-green-800': 'from-green-600 via-green-700 to-green-800', 
    'from-purple-600 to-purple-800': 'from-purple-600 via-purple-700 to-purple-800',
    'from-yellow-600 to-yellow-800': 'from-orange-600 via-orange-700 to-orange-800',
    'from-gray-600 to-gray-800': 'from-gray-600 via-gray-700 to-gray-800',
    'from-orange-600 to-orange-800': 'from-orange-600 via-orange-700 to-orange-800'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="industries" className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Background Elements */}
      <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] bg-gradient-radial from-purple-400/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] right-[8%] w-[400px] h-[400px] bg-gradient-radial from-blue-400/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange/3 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.015]" />

      {/* Floating Tech Elements */}
      <div className="absolute top-[25%] right-[15%] w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-500/5 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-[35%] left-[20%] w-16 h-16 bg-gradient-to-br from-orange/10 to-yellow-500/5 rounded-full animate-float blur-sm" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </motion.div>
              <span className="text-blue-600 font-inter font-bold text-sm tracking-[0.15em]">INDUSTRY EXPERTISE</span>
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-8 leading-none"
          >
            Industries We
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent relative">
              Empower
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter"
          >
            Delivering specialized engineering solutions across diverse industrial sectors, 
            driving innovation and efficiency in every project we undertake.
          </motion.p>
        </motion.div>

        {/* Enhanced Industries Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];
            const gradientClass = colorMap[industry.color] || industry.color;
            
            return (
              <motion.div
                key={industry.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group cursor-pointer"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <div className={`relative bg-gradient-to-br ${gradientClass} p-8 rounded-3xl text-white h-full transform transition-all duration-500 overflow-hidden shadow-card hover:shadow-2xl`}>
                  {/* Enhanced Background Patterns */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
                  
                  {/* Enhanced Floating Elements */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-white/5 rounded-full animate-float opacity-60" />
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/8 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    {/* Enhanced Header */}
                    <div className="flex items-center justify-between mb-8">
                      <motion.div 
                        className="w-24 h-24 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400 shadow-lg group-hover:shadow-2xl"
                        animate={{
                          rotate: hoveredIndex === index ? 12 : 0,
                          scale: hoveredIndex === index ? 1.15 : 1
                        }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                      >
                        {IconComponent && <IconComponent className="w-12 h-12 text-white drop-shadow-2xl" />}
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                      <motion.div 
                        className="text-8xl font-poppins font-black text-white/10 group-hover:text-white/20 transition-colors duration-400"
                        animate={{
                          scale: hoveredIndex === index ? 1.2 : 1,
                          rotate: hoveredIndex === index ? 5 : 0
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-poppins font-bold mb-4 group-hover:text-orange-200 transition-colors duration-400">
                        {industry.name}
                      </h3>
                      <p className="text-white/90 font-inter leading-relaxed text-lg">
                        {industry.description}
                      </p>
                    </div>

                    {/* Enhanced CTA */}
                    <motion.div 
                      className="flex items-center text-white/80 group-hover:text-white transition-colors duration-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0.6,
                        x: hoveredIndex === index ? 0 : -20
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300">
                        <span className="font-inter font-semibold">Explore Solutions</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-400" />
                      </div>
                    </motion.div>

                    {/* Quality Badge */}
                    <div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white/90 text-xs font-inter font-bold tracking-wider">CERTIFIED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="bg-gradient-mesh rounded-3xl p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-orange/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-8">
                  <Star className="w-5 h-5 text-orange fill-orange" />
                  <span className="text-white/90 font-inter font-bold text-sm tracking-[0.15em]">PROVEN EXCELLENCE</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-orange fill-orange" />
                    ))}
                  </div>
                </div>
                <h3 className="heading-lg font-poppins mb-6 text-shadow-lg">
                  Why Industries Choose Us
                </h3>
                <p className="text-body-lg text-white/90 font-inter max-w-2xl mx-auto">
                  Delivering exceptional results across all sectors with unmatched expertise
                </p>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  { value: "99%", label: "Client Satisfaction", icon: "✓", delay: 0 },
                  { value: "24/7", label: "Technical Support", icon: "⚡", delay: 0.1 },
                  { value: "ISO", label: "Quality Certified", icon: "🏆", delay: 0.2 },
                  { value: "500+", label: "Projects Delivered", icon: "📊", delay: 0.3 }
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center group"
                    whileHover={{ y: -6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mb-4">
                      <motion.div 
                        className="text-6xl md:text-7xl font-poppins font-black bg-gradient-to-br from-orange via-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 text-shadow-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: inView ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: stat.delay, type: "spring", stiffness: 200 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-2xl mb-2">{stat.icon}</div>
                    </div>
                    <p className="text-white/90 font-inter font-semibold text-lg leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;