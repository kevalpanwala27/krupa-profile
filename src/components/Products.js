'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { categories, products } from '../data/products';
import Image from 'next/image';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

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

  return (
    <section id="products" className="section-standard bg-white">
      <div className="container-balanced">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <h2 className="heading-lg text-gray-900 mb-4">
            Our <span className="text-gradient-primary">Products</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            We manufacture a comprehensive range of specialized industrial equipment and components 
            designed to meet the most demanding industry requirements.
          </p>
          
          {/* Product Categories */}
          <motion.div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name === 'All' ? null : category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedCategory === category.name || (category.name === 'All' && !selectedCategory)
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-orange-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="card-elevated group cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl flex items-center justify-center mb-4 group-hover:from-orange-50 group-hover:to-red-50 transition-all duration-300 overflow-hidden">
                  {/* Show product image if available, otherwise show icon */}
                  {product.image ? (
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <product.icon className="w-16 h-16 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="heading-sm text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-body-sm text-gray-600 mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn&apos;t find any products matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
