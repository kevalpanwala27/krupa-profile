'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Tag, Layers } from 'lucide-react';
import { products } from '../data/products';
import Image from 'next/image';
import { useState } from 'react';
import VarietiesModal from './VarietiesModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewVarieties = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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

  return (
    <section id="products" className="section-standard scroll-offset bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-visible md:overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container-balanced relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-2"
            variants={itemVariants}
          >
            Industrial Equipment
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Manufacturing
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-slate-600 font-normal mt-2 sm:mt-4">
              Excellence
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            We manufacture a comprehensive range of specialized industrial equipment and components 
            designed to meet the most demanding industry requirements with precision and reliability.
          </motion.p>
        </motion.div>

        

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ contain: 'layout' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative cursor-pointer touch-manipulation"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.995, y: -6 }}
              transition={{ duration: 0.3 }}
              role="button"
              tabIndex={0}
              aria-label={`${product.name} - ${product.hasVarieties ? 'View varieties' : 'View details'}`}
              onClick={() => handleViewVarieties(product)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleViewVarieties(product);
                }
              }}
              style={{ willChange: 'transform' }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              {/* Accent gradient ring */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.35), rgba(239,68,68,0.35))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: 1 }} />
              
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-slate-200 transition-all duration-300 h-full focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[280px] sm:min-h-0">
                {/* Product Image */}
                <div className="relative w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <product.icon className="w-16 h-16 text-slate-400" />
                    </div>
                  )}
                  
                  {/* Desktop view hint overlay */}
                  <div className="hidden md:flex absolute inset-0 items-end justify-end p-3 z-10 pointer-events-none">
                    <div className="opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
                      <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 border border-slate-200 shadow-sm">
                        View {product.hasVarieties ? 'Varieties' : 'Details'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category/Varieties Badges - contained within card frame */}
                <div className="absolute top-3 left-3 right-3 z-20 pointer-events-none flex flex-wrap items-center gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-800 bg-white/85 backdrop-blur-md border border-white/60 shadow-sm">
                    <Tag className="w-3.5 h-3.5 text-slate-500" />
                    <span className="truncate max-w-[50%] sm:max-w-[10rem]">{product.category}</span>
                  </div>
                  {product.hasVarieties && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-md ring-1 ring-white/20">
                      <Layers className="w-3.5 h-3.5 text-white" />
                      <span>Varieties</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  {/* Specifications */}
                  {product.specs && product.specs.length > 0 && (
                    <div className="space-y-1.5 sm:space-y-2">
                      {product.specs.slice(0, 2).map((spec, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-slate-500 line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Card is fully clickable; no explicit button needed */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2">
                Need Custom Equipment?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                We specialize in custom engineering solutions. Let&apos;s discuss your specific requirements.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2 group min-h-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Varieties Modal */}
      <VarietiesModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;
