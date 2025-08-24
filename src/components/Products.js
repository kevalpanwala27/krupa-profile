'use client';

import { products } from '../data/products';
import { Package, Ruler, HardHat, Zap, Wrench, Shield, ArrowRight, Sparkles, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useMemo, useEffect, useRef } from 'react';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  // Pre-calculated floating element positions to avoid hydration issues
  const floatingElementPositions = useMemo(() => {
    return [
      {
        top: '20%',
        left: '15%',
        size: 'w-20 h-20',
        color: 'bg-orange/5',
        delay: 0,
        duration: 8
      },
      {
        bottom: '30%',
        right: '20%',
        size: 'w-16 h-16',
        color: 'bg-blue-400/5',
        delay: 2,
        duration: 10
      }
    ];
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  const productIcons = {
    1: Package, // Heat Exchangers
    2: Shield,  // Pressure Vessels
    3: Package, // Storage Tanks
    4: Zap,     // Reactors
    5: Package, // Distillation Columns
    6: Wrench   // Custom Fabrication
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: Package, count: products.length },
    { id: 'heat', name: 'Heat Transfer', icon: Zap, count: 2 },
    { id: 'pressure', name: 'Pressure Equipment', icon: Shield, count: 2 },
    { id: 'storage', name: 'Storage Solutions', icon: Package, count: 1 },
    { id: 'custom', name: 'Custom Fabrication', icon: Wrench, count: 1 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => {
        if (selectedCategory === 'heat') return [1, 4].includes(product.id);
        if (selectedCategory === 'pressure') return [2].includes(product.id);
        if (selectedCategory === 'storage') return [3, 5].includes(product.id);
        if (selectedCategory === 'custom') return [6].includes(product.id);
        return true;
      });

  return (
    <section id="products" className="section-padding relative overflow-hidden bg-white">
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white" />
      
      {/* Safe scroll usage with client-side check */}
      {isClient ? (
        <>
          <motion.div 
            className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-orange/5 to-transparent rounded-full blur-3xl"
            style={{ y, opacity }}
          />
          <motion.div 
            className="absolute bottom-[20%] left-[8%] w-[350px] h-[350px] bg-gradient-radial from-blue-400/5 to-transparent rounded-full blur-3xl"
            style={{ y: yReverse, opacity }}
          />
        </>
      ) : (
        <>
          <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-orange/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] left-[8%] w-[350px] h-[350px] bg-gradient-radial from-blue-400/5 to-transparent rounded-full blur-3xl" />
        </>
      )}
      
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.02]" />

      {/* Enhanced Floating Elements with Pre-calculated Positions */}
      {floatingElementPositions.map((element, index) => (
        <motion.div 
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full animate-float blur-sm`}
          style={{
            top: element.top,
            left: element.left,
            bottom: element.bottom,
            right: element.right,
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: element.duration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: element.delay
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={(node) => { ref(node); scrollRef.current = node; }}>
        {/* Enhanced Header with Better Typography */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-orange/10 to-orange/5 border border-orange/20 mb-10"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(255, 106, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-orange" />
              </motion.div>
              <span className="text-orange font-inter font-bold text-base tracking-[0.15em]">PRECISION ENGINEERING</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange fill-orange" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-10 leading-none"
          >
            Products & 
            <span className="block bg-gradient-orange bg-clip-text text-transparent relative">
              Solutions
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-orange rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-5xl mx-auto leading-relaxed font-inter"
          >
            Engineered for excellence, crafted for reliability. Our comprehensive range of 
            <span className="block mt-3 text-xl font-medium">industrial equipment sets the benchmark for innovation and quality in every industry we serve.</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-inter font-semibold transition-all duration-300 border-2 ${
                  selectedCategory === category.id
                    ? 'bg-orange text-white border-orange shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-orange/50 hover:bg-orange/5'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className={`w-5 h-5 ${
                  selectedCategory === category.id ? 'text-white' : 'text-orange'
                }`} />
                <span>{category.name}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Products Grid with Better Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28"
        >
          {filteredProducts.map((product, index) => {
            const IconComponent = productIcons[product.id] || Package;
            return (
              <motion.div
                key={product.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                onHoverStart={() => setHoveredCard(product.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <motion.div 
                  className="card-enhanced overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-card-hover group relative"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 30px 80px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                  
                  {/* Enhanced Product Image/Icon Area */}
                  <div className="relative h-72 bg-gradient-mesh flex items-center justify-center overflow-hidden">
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    
                    {/* Enhanced Floating Elements with Pre-calculated Positions */}
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange/20 to-orange/10 rounded-full"
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full"
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.div 
                      className="absolute top-1/2 right-6 w-4 h-4 bg-orange/30 rounded-full"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    
                    {/* Enhanced Main Icon */}
                    <motion.div
                      className="relative z-10"
                      animate={{
                        scale: hoveredCard === product.id ? 1.2 : 1,
                        rotate: hoveredCard === product.id ? 12 : 0,
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl"
                          animate={{
                            boxShadow: hoveredCard === product.id ? 
                              "0 25px 50px rgba(255, 106, 0, 0.4)" : 
                              "0 15px 30px rgba(0, 0, 0, 0.15)"
                          }}
                        >
                          <IconComponent className="w-20 h-20 text-white drop-shadow-2xl" />
                        </motion.div>
                        {/* Enhanced Icon Glow Effect */}
                        <div className="absolute inset-0 w-32 h-32 bg-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>

                    {/* Enhanced Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/70 via-navy-blue/40 to-transparent" />
                    
                    {/* Enhanced Product Category Badge */}
                    <motion.div 
                      className="absolute top-6 left-6 px-4 py-2 bg-glass rounded-full backdrop-blur-sm"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <span className="text-white/95 text-xs font-inter font-bold tracking-wider">PREMIUM</span>
                    </motion.div>

                    {/* Enhanced Product ID Badge */}
                    <motion.div 
                      className="absolute top-6 right-6 w-8 h-8 bg-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <span className="text-orange text-xs font-bold">{product.id}</span>
                    </motion.div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-10">
                    <div className="mb-8">
                      <motion.h3 
                        className="heading-md font-poppins text-navy-blue mb-6 group-hover:text-orange transition-colors duration-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        {product.title}
                      </motion.h3>
                      <motion.p 
                        className="text-body text-gray-600 leading-relaxed font-inter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      >
                        {product.description}
                      </motion.p>
                    </div>

                    {/* Enhanced Specifications with Better Visual Design */}
                    <div className="space-y-5 mb-10">
                      <motion.div 
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-orange/5 rounded-2xl hover:bg-orange/10 transition-all duration-300 border border-gray-100 hover:border-orange/200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center mt-0.5">
                          <Ruler className="w-5 h-5 text-orange" />
                        </div>
                        <div className="flex-1">
                          <span className="font-bold text-navy-blue text-sm block mb-2">Size Range</span>
                          <span className="text-gray-600 text-sm font-medium">{product.sizes}</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-500/5 rounded-2xl hover:bg-blue-500/10 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mt-0.5">
                          <HardHat className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <span className="font-bold text-navy-blue text-sm block mb-2">Material of Construction</span>
                          <span className="text-gray-600 text-sm font-medium">{product.moc}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced CTA Button with Better Interactions */}
                    <motion.button 
                      className="btn-primary w-full text-center relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    >
                      <span className="relative flex items-center justify-center gap-3">
                        <span>Learn More</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Additional Services with Better Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-20">
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(37, 99, 235, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-inter font-bold text-base tracking-wide">COMPREHENSIVE SERVICES</span>
            </motion.div>
            <h3 className="heading-lg font-poppins text-navy-blue">
              Complete Solutions
              <span className="block text-gray-600 text-2xl font-normal mt-3">From Design to Delivery</span>
            </h3>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { 
                icon: Wrench, 
                title: "Custom Design", 
                description: "Bespoke engineering solutions tailored to your exact specifications and operational requirements with cutting-edge CAD technology.", 
                color: "orange",
                accent: "from-orange-500 to-orange-600",
                features: ["3D Modeling", "CAD Design", "Custom Specifications"]
              },
              { 
                icon: Shield, 
                title: "Expert Installation", 
                description: "Professional installation and commissioning services ensuring optimal performance from day one with comprehensive testing.", 
                color: "blue",
                accent: "from-blue-500 to-blue-600",
                features: ["Professional Installation", "Commissioning", "Testing & Validation"]
              },
              { 
                icon: Zap, 
                title: "Maintenance Support", 
                description: "Comprehensive maintenance programs and 24/7 technical support to maximize uptime and extend equipment lifespan.", 
                color: "green",
                accent: "from-green-500 to-green-600",
                features: ["24/7 Support", "Preventive Maintenance", "Performance Optimization"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group relative"
              >
                <motion.div 
                  className="card-enhanced p-12 text-center hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-28 h-28 bg-gradient-to-br ${service.accent} rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl group-hover:shadow-2xl transition-all duration-400`}
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-14 h-14 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    <h4 className="text-3xl font-poppins font-bold text-navy-blue mb-6 group-hover:text-orange transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-body text-gray-600 leading-relaxed font-inter mb-8">{service.description}</p>
                    
                    {/* Enhanced Feature List */}
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          className="flex items-center justify-center gap-3 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + index * 0.2 + idx * 0.1, duration: 0.5 }}
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

export default Products;