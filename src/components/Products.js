'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, ArrowRight, Star, Eye, Heart } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: Package, color: 'from-gray-500 to-gray-600' },
    { id: 'automation', name: 'Automation', icon: Package, color: 'from-orange-500 to-red-500' },
    { id: 'robotics', name: 'Robotics', icon: Package, color: 'from-blue-500 to-cyan-500' },
    { id: 'sensors', name: 'Sensors', icon: Package, color: 'from-green-500 to-emerald-500' },
    { id: 'software', name: 'Software', icon: Package, color: 'from-purple-500 to-pink-500' }
  ];

  const products = [
    {
      id: 1,
      name: 'Smart Automation Controller',
      category: 'automation',
      description: 'Advanced industrial automation controller with AI-powered optimization.',
      price: '$2,499',
      rating: 4.8,
      reviews: 127,
      image: '/api/placeholder/300/200',
      specs: ['24/7 Operation', 'AI Integration', 'Remote Monitoring']
    },
    {
      id: 2,
      name: 'Industrial Robot Arm',
      category: 'robotics',
      description: 'High-precision robotic arm for manufacturing and assembly lines.',
      price: '$15,999',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/200',
      specs: ['6-Axis Movement', 'Payload: 50kg', 'Precision: ±0.02mm']
    },
    {
      id: 3,
      name: 'IoT Sensor Network',
      category: 'sensors',
      description: 'Comprehensive IoT sensor solution for industrial monitoring.',
      price: '$899',
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/300/200',
      specs: ['Real-time Data', 'Wireless Connectivity', 'Long Battery Life']
    },
    {
      id: 4,
      name: 'Predictive Analytics Platform',
      category: 'software',
      description: 'AI-driven predictive maintenance and analytics software.',
      price: '$1,299',
      rating: 4.6,
      reviews: 203,
      image: '/api/placeholder/300/200',
      specs: ['Machine Learning', 'Cloud Integration', 'Custom Dashboards']
    },
    {
      id: 5,
      name: 'Energy Management System',
      category: 'automation',
      description: 'Smart energy monitoring and optimization system.',
      price: '$3,799',
      rating: 4.8,
      reviews: 94,
      image: '/api/placeholder/300/200',
      specs: ['Real-time Monitoring', 'Energy Optimization', 'Cost Analysis']
    },
    {
      id: 6,
      name: 'Quality Control Scanner',
      category: 'robotics',
      description: 'Automated quality inspection system with computer vision.',
      price: '$8,999',
      rating: 4.9,
      reviews: 67,
      image: '/api/placeholder/300/200',
      specs: ['Computer Vision', 'High Accuracy', 'Fast Processing']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <section id="products" className="section-standard bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container-balanced">
          <motion.div 
          className="text-center mb-12"
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
            Comprehensive range of industrial equipment and custom fabrication solutions 
            designed to meet the most demanding industry requirements.
          </p>
        </motion.div>

        {/* Enhanced Search and Filter Section */}
        <motion.div 
          className="mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <motion.div
              className="relative flex-1 max-w-md"
              variants={itemVariants}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid-products"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
              className="card-elevated group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Product Image */}
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-colors duration-200">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-colors duration-200">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                      </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                    </div>

                {/* Product Title */}
                <h3 className="heading-sm text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-body-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Product Specs */}
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <button className="btn-primary text-sm px-4 py-2">
                    <span className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                      </span>
                  </button>
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
                  setSelectedCategory('all');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
                  </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;