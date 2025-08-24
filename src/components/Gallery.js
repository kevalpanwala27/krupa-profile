'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Camera, Filter, Eye, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref: inViewRef, inView: isInView } = useInView({ 
    once: true, 
    margin: "-100px",
    threshold: 0.1
  });

  const galleryImages = [
    {
      id: 1,
      src: "/images/workshop1.jpg",
      alt: "Manufacturing Workshop",
      category: "Workshop",
      title: "State-of-the-art Manufacturing Facility",
      description: "Our modern manufacturing workshop equipped with cutting-edge machinery"
    },
    {
      id: 2,
      src: "/images/machine1.jpg",
      alt: "Industrial Machinery",
      category: "Machinery",
      title: "Advanced Manufacturing Equipment",
      description: "Precision machinery for high-quality industrial equipment production"
    },
    {
      id: 3,
      src: "/images/product1.jpg",
      alt: "Heat Exchanger",
      category: "Products",
      title: "Custom Heat Exchanger",
      description: "High-efficiency heat exchanger designed for industrial applications"
    },
    {
      id: 4,
      src: "/images/workshop2.jpg",
      alt: "Assembly Area",
      category: "Workshop",
      title: "Product Assembly Line",
      description: "Systematic assembly process ensuring quality and precision"
    },
    {
      id: 5,
      src: "/images/machine2.jpg",
      alt: "CNC Machine",
      category: "Machinery",
      title: "Precision CNC Machining",
      description: "Computer-controlled machining for exact specifications"
    },
    {
      id: 6,
      src: "/images/product2.jpg",
      alt: "Pressure Vessel",
      category: "Products",
      title: "High-Pressure Vessel",
      description: "ASME-compliant pressure vessel for critical applications"
    },
    {
      id: 7,
      src: "/images/workshop3.jpg",
      alt: "Quality Control",
      category: "Workshop",
      title: "Quality Control Station",
      description: "Rigorous quality testing and inspection processes"
    },
    {
      id: 8,
      src: "/images/machine3.jpg",
      alt: "Welding Equipment",
      category: "Machinery",
      title: "Advanced Welding Technology",
      description: "State-of-the-art welding equipment for superior joints"
    }
  ];

  const categories = ["All", "Workshop", "Machinery", "Products"];
  
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-[10%] right-[8%] w-[400px] h-[400px] bg-gradient-radial from-purple-400/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] bg-gradient-radial from-blue-500/6 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-orange/4 to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dots-pattern opacity-[0.008]" />

      {/* Floating Elements */}
      <div className="absolute top-[20%] left-[20%] w-16 h-16 bg-gradient-to-br from-purple-400/8 to-purple-500/4 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-[30%] right-[25%] w-20 h-20 bg-gradient-to-br from-blue-500/8 to-blue-600/4 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }} />

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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-500/20 mb-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Camera className="w-5 h-5 text-purple-600" />
              </motion.div>
              <span className="text-purple-600 font-inter font-bold text-sm tracking-[0.15em]">VISUAL SHOWCASE</span>
              <Eye className="w-4 h-4 text-purple-600" />
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="heading-xl font-poppins text-navy-blue mb-8 leading-none"
          >
            Our Visual
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent relative">
              Journey
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter"
          >
            Take a comprehensive tour of our state-of-the-art manufacturing facility, 
            advanced machinery, and exceptional products in action.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-4 rounded-2xl font-poppins font-semibold text-lg transition-all duration-400 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${
                activeFilter === category
                  ? 'bg-gradient-orange text-white shadow-button'
                  : 'bg-white text-navy-blue hover:bg-gray-50 border border-gray-200 hover:border-orange/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Gallery Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeFilter}-${image.id}`}
              custom={index}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -8 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="card-enhanced overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                {/* Enhanced Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  
                  {/* Content */}
                  <div className="text-center relative z-10">
                    <motion.div 
                      className="text-6xl font-poppins font-black text-gray-500 mb-4 group-hover:text-gray-600 transition-colors duration-300"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {image.category.charAt(0)}
                    </motion.div>
                    <div className="text-lg text-gray-600 font-inter font-semibold mb-2">{image.category}</div>
                    <div className="text-sm text-gray-500 font-inter">{image.title}</div>
                  </div>
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-navy-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                      >
                        <ImageIcon className="w-12 h-12 mx-auto mb-4" />
                      </motion.div>
                      <div className="text-xl font-poppins font-bold mb-2">{image.title}</div>
                      <div className="text-sm opacity-90 font-inter">Click to view</div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-glass rounded-full">
                    <span className="text-white/90 text-xs font-inter font-bold tracking-wider">{image.category}</span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                {/* Enhanced Close Button */}
                <motion.button
                  onClick={closeLightbox}
                  className="absolute -top-16 right-0 text-white/80 hover:text-white transition-colors duration-300 z-10 p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={40} />
                </motion.button>

                {/* Enhanced Navigation Buttons */}
                <motion.button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20"
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={32} />
                </motion.button>

                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20"
                  whileHover={{ scale: 1.1, x: 4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={32} />
                </motion.button>

                {/* Enhanced Image Content */}
                <motion.div 
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    
                    <div className="text-center relative z-10">
                      <div className="text-8xl font-poppins font-black text-gray-500 mb-6">
                        {selectedImage.category.charAt(0)}
                      </div>
                      <div className="text-4xl text-gray-600 font-poppins font-bold mb-4">{selectedImage.category}</div>
                      <div className="text-2xl text-gray-700 font-inter">{selectedImage.title}</div>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-3xl font-poppins font-bold text-navy-blue mb-4">
                          {selectedImage.title}
                        </h3>
                        <p className="text-gray-600 font-inter text-lg leading-relaxed mb-4">
                          {selectedImage.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="px-4 py-2 bg-orange/10 rounded-full">
                            <span className="text-orange font-inter font-bold text-sm">{selectedImage.category}</span>
                          </div>
                          <div className="text-gray-500 font-inter text-sm">Premium Quality</div>
                        </div>
                      </div>
                      <div className="ml-6">
                        <Camera className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Image Counter */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white/90 text-center">
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <span className="font-inter font-semibold">
                      {currentIndex + 1} of {filteredImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;