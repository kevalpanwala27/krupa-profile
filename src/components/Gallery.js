'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Filter, Eye, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

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
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="gallery" className="section-standard bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container-balanced">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            See Our Work in <span className="text-gradient-primary">Action</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities, advanced machinery, and finished products 
            that showcase our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-600'
              }`}
              variants={itemVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid-balanced grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="card-elevated group cursor-pointer overflow-hidden"
              variants={imageVariants}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-500" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-md">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="heading-sm text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  {image.title}
                </h3>
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="heading-md text-gray-900 mb-3">No Images Found</h3>
            <p className="text-body-md text-gray-600 mb-6">
              Try selecting a different category or check back later for new additions.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="btn-secondary"
            >
              View All Images
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Image */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <ImageIcon className="w-32 h-32 text-gray-400" />
              </div>

              {/* Image Info */}
              <div className="p-6">
                <h3 className="heading-md text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-body-md text-gray-600 mb-3">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1} of {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;