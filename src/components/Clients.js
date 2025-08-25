'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Star, Award, Globe, TrendingUp } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: "Reliance Industries",
      logo: "/images/clients/reliance.png",
      industry: "Oil & Gas",
      testimonial: "Exceptional quality and on-time delivery. Krupa Engineering has been our trusted partner for over 10 years.",
      rating: 5,
      projects: 25
    },
    {
      name: "Larsen & Toubro",
      logo: "/images/clients/lnt.png",
      industry: "Engineering",
      testimonial: "Professional team with deep technical expertise. They consistently exceed our expectations.",
      rating: 5,
      projects: 18
    },
    {
      name: "Bharat Petroleum",
      logo: "/images/clients/bpcl.png",
      industry: "Petroleum",
      testimonial: "Reliable partner for critical equipment. Their attention to detail is outstanding.",
      rating: 5,
      projects: 32
    },
    {
      name: "Cipla Limited",
      logo: "/images/clients/cipla.png",
      industry: "Pharmaceutical",
      testimonial: "High-quality pharmaceutical equipment. Krupa Engineering understands our industry requirements perfectly.",
      rating: 5,
      projects: 15
    },
    {
      name: "Tata Chemicals",
      logo: "/images/clients/tata.png",
      industry: "Chemical",
      testimonial: "Excellent technical support and after-sales service. Highly recommended for chemical industry equipment.",
      rating: 5,
      projects: 28
    },
    {
      name: "NTPC Limited",
      logo: "/images/clients/ntpc.png",
      industry: "Power Generation",
      testimonial: "Dependable partner for power plant equipment. Their engineering solutions are world-class.",
      rating: 5,
      projects: 22
    }
  ];

  // Marquee client logos for continuous scrolling
  const marqueeClients = [
    "PI Industries", "Aarti Industries Limited", "Kurl-on", "ICA Pidilite", "ONGC",
    "Kansai Nerolac Paints Limited", "Sakata INX", "UPL OpenAg™", "Air Liquide",
    "Agrico Organics Limited", "ISGEC Hitachi Zosen Limited", "INOXCVA INOX India Ltd.",
    "Dodsal", "Galaxy Global Supplier to Global Brands", "Deepak Nitrite", "Unique",
    "Weber Saint-Gobain", "INOX Air Products", "Deepak Fertilizers and Petrochemicals Corpn Ltd",
    "Sajjan India Limited", "Dai-ichi Specialty Chemicals", "BR Agrotech Limited Growing Together",
    "Mapei", "Nitta Gelatin India Limited", "Pidilite"
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Projects Completed", icon: Building2 },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "25+", label: "Years Experience", icon: Award }
  ];

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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <section id="clients" className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container-balanced relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full mb-6">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Trusted Partners</span>
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Trusted by Industry <span className="text-gradient-primary">Leaders</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re proud to serve some of the biggest names in industry. Our commitment to quality, 
            innovation, and customer satisfaction has earned us the trust of leading companies worldwide.
          </p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid-balanced grid-cols-2 md:grid-cols-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:border-orange-200 transition-all duration-300">
                <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white group-hover:rotate-3 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Continuous Scrolling Marquee */}
        <motion.div
          className="mb-20 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            {/* Marquee Container with enhanced styling */}
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First set of logos */}
              {marqueeClients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                      <Building2 className="w-10 h-10 text-orange-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 max-w-[140px] leading-tight">
                      {client}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {marqueeClients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                      <Building2 className="w-10 h-10 text-orange-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 max-w-[140px] leading-tight">
                      {client}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Clients Grid */}
        <motion.div
          className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clients.map((client) => (
            <motion.div 
              key={client.name}
              className="card-elevated group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Client Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex-1">
                    <h3 className="heading-sm text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                      {client.name}
                    </h3>
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-semibold rounded-full border border-orange-200">
                      {client.industry}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                  
                {/* Testimonial */}
                <p className="text-body-sm text-gray-600 mb-5 leading-relaxed italic">
                  &ldquo;{client.testimonial}&rdquo;
                </p>

                {/* Project Count */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{client.projects} projects</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="card-elevated max-w-3xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="icon-container mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4">
                Ready to Join Our Client Family?
              </h3>
              <p className="text-body-lg text-gray-600 mb-8 leading-relaxed">
                Experience the same level of excellence that has made us the preferred choice 
                for industry leaders worldwide.
              </p>
              <button className="btn-primary text-base px-8 py-3">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;