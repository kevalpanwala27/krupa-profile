'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, CheckCircle, Layers, Tag } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

const VarietiesModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  // Close on Escape for better UX
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`${product.name} details`}>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-orange-100">{product.hasVarieties ? 'Available Varieties' : 'Product Details'}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {product.category && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-orange-900 bg-white/90 text-opacity-90 border border-white/40">
                          <Tag className="w-3.5 h-3.5" /> {product.category}
                        </span>
                      )}
                      {product.hasVarieties && product.varieties && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-white/20">
                          <Layers className="w-3.5 h-3.5" /> {product.varieties.length} Varieties
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
              {/* Subtle decorative background */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#fb923c,transparent_25%),radial-gradient(circle_at_80%_0%,#ef4444,transparent_25%),radial-gradient(circle_at_50%_100%,#60a5fa,transparent_25%)]" />
              <div className="relative">
              {product.hasVarieties ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {product.varieties.map((variety, index) => (
                    <motion.div
                      key={variety.name}
                      className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Variety Image (optional) */}
                      <div className="relative w-full h-44 bg-slate-100 rounded-xl mb-5 overflow-hidden">
                        {variety.image ? (
                          <Image
                            src={variety.image}
                            alt={variety.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                            <Package className="w-10 h-10" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Variety Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">
                            {variety.name}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {variety.description}
                          </p>
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">
                          Specifications
                        </h4>
                        <div className="space-y-1">
                          {variety.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-500" />
                              <span className="text-sm text-slate-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Product Image */}
                  <div className="relative w-full h-72 bg-slate-100 rounded-2xl overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        <Package className="w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                      {product.category && (
                        <p className="text-sm text-slate-500 mt-1">{product.category}</p>
                      )}
                    </div>

                    {product.description && (
                      <p className="text-slate-700 leading-relaxed">{product.description}</p>
                    )}

                    {product.specs && product.specs.length > 0 && (
                      <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="text-sm font-semibold text-slate-800">Key Specifications</h4>
                        <div className="space-y-2">
                          {product.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-500" />
                              <span className="text-sm text-slate-700">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-6">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-300 transition-colors duration-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Scroll to contact section
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    onClose();
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VarietiesModal;
