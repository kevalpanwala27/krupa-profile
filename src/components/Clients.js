'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Star, Award, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const Clients = () => {
  const clients = [
    {
      name: "PI Industries",
      logo: "/images/clients/pi-industries.png",
      industry: "Agrochemicals",
      testimonial: "Exceptional quality and on-time delivery. Krupa Engineering has been our trusted partner for critical equipment.",
      rating: 5,
      projects: 28
    },
    {
      name: "Aarti Industries Limited",
      logo: "/images/clients/aarti-industries.png",
      industry: "Chemical",
      testimonial: "Professional team with deep technical expertise. They consistently exceed our expectations in quality.",
      rating: 5,
      projects: 22
    },
    {
      name: "ONGC",
      logo: "/images/clients/ongc.png",
      industry: "Oil & Gas",
      testimonial: "Reliable partner for critical equipment. Their attention to detail and safety standards are outstanding.",
      rating: 5,
      projects: 35
    },
    {
      name: "Kansai Nerolac Paints Limited",
      logo: "/images/clients/nerolac.png",
      industry: "Paints & Coatings",
      testimonial: "High-quality industrial equipment. Krupa Engineering understands our industry requirements perfectly.",
      rating: 5,
      projects: 18
    },
    {
      name: "Deepak Nitrite",
      logo: "/images/clients/deepak-nitrite.png",
      industry: "Chemical",
      testimonial: "Excellent technical support and after-sales service. Highly recommended for chemical industry equipment.",
      rating: 5,
      projects: 25
    },
    {
      name: "ISGEC Hitachi Zosen Limited",
      logo: "/images/clients/isgec.png",
      industry: "Engineering",
      testimonial: "Dependable partner for heavy engineering equipment. Their engineering solutions are world-class.",
      rating: 5,
      projects: 20
    }
  ];

  // Marquee client logos for continuous scrolling - All 26 clients from PDF with logo paths
  const marqueeClients = [
    { name: "PI Industries", logo: "/images/clients/pi-industries.png" },
    { name: "Aarti Industries Limited", logo: "/images/clients/aarti-industries.png" },
    { name: "Kurl-on", logo: "/images/clients/kurl-on.png" },
    { name: "ICA Pidilite", logo: "/images/clients/ica-pidilite.png" },
    { name: "ONGC", logo: "/images/clients/ongc.png" },
    { name: "Kansai Nerolac Paints Limited", logo: "/images/clients/nerolac.png" },
    { name: "Sakata INX", logo: "/images/clients/sakata-inx.png" },
    { name: "UPL OpenAg™", logo: "/images/clients/upl-openag.png" },
    { name: "Air Liquide", logo: "/images/clients/air-liquide.png" },
    { name: "ISGEC Hitachi Zosen Limited", logo: "/images/clients/isgec.png" },
    { name: "INOXCVA INOX India Ltd.", logo: "/images/clients/inoxcva.png" },
    { name: "Dodsal", logo: "/images/clients/dodsal.png" },
    { name: "Galaxy Global Supplier to Global Brands", logo: "/images/clients/galaxy-global.png" },
    { name: "Deepak Nitrite", logo: "/images/clients/deepak-nitrite.png" },
    { name: "Unique", logo: "/images/clients/unique.png" },
    { name: "Weber Saint-Gobain", logo: "/images/clients/weber-saint-gobain.png" },
    { name: "INOX Air Products", logo: "/images/clients/inox-air-products.png" },
    { name: "Deepak Fertilizers and Petrochemicals Corpn Ltd", logo: "/images/clients/deepak-fertilizers.png" },
    { name: "Sajjan India Limited", logo: "/images/clients/sajjan-india.png" },
    { name: "Dai-ichi Specialty Chemicals", logo: "/images/clients/dai-ichi.png" },
    { name: "BR Agrotech Limited Growing Together", logo: "/images/clients/br-agrotech.png" },
    { name: "Mapei", logo: "/images/clients/mapei.png" },
    { name: "Nitta Gelatin India Limited", logo: "/images/clients/nitta-gelatin.png" },
    { name: "Pidilite", logo: "/images/clients/pidilite.png" }
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
    <section id="clients" className="section-standard bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,0,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-red-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="container-balanced relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg text-gray-900 mb-6">
            Trusted by Industry <span className="text-gradient-primary">Leaders</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re proud to serve some of the biggest names across diverse industries including Oil & Gas, 
            Chemical, Pharmaceutical, Paints, Engineering, and more. Our commitment to quality, innovation, 
            and customer satisfaction has earned us the trust of leading companies nationwide.
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
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 overflow-hidden">
                      {/* Show company logo if available, otherwise show Building2 icon */}
                      {client.logo ? (
                        <Image 
                          src={client.logo} 
                          alt={client.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Building2 className="w-10 h-10 text-orange-600" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 max-w-[140px] leading-tight">
                      {client.name}
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
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 overflow-hidden">
                      {/* Show company logo if available, otherwise show Building2 icon */}
                      {client.logo ? (
                        <Image 
                          src={client.logo} 
                          alt={client.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <Building2 className="w-10 h-10 text-orange-600" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 max-w-[140px] leading-tight">
                      {client.name}
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
                  
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center ml-4 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 overflow-hidden">
                    {/* Show company logo if available, otherwise show Building2 icon */}
                    {client.logo ? (
                      <Image 
                        src={client.logo} 
                        alt={client.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Building2 className="w-8 h-8 text-orange-600" />
                    )}
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-body-sm text-gray-600 leading-relaxed italic">
                    &ldquo;{client.testimonial}&rdquo;
                  </p>
                </div>
                
                {/* Project Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="w-4 h-4" />
                    <span>{client.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>{client.projects} Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="card-elevated max-w-2xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <div className="icon-container mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-md text-gray-900 mb-4">
                Ready to Join Our Client Family?
              </h3>
              <p className="text-body-lg text-gray-600 mb-8 leading-relaxed">
                Experience the same level of excellence that has made us the preferred choice 
                for industry leaders across India. Let&apos;s build something amazing together.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
