'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Star, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Clients = () => {
  const clients = [
    {
      name: "Galaxy Surfactants Ltd",
      logo: "/images/clients/galaxy-global.png",
      industry: "Chemicals",
      testimonial: "Trusted partner delivering reliable equipment and service.",
      rating: 5
    },
    {
      name: "Kansai Nerolac Paint Limited",
      logo: "/images/clients/nerolac.png",
      industry: "Paints & Coatings",
      testimonial: "High-quality solutions tailored to our industry needs.",
      rating: 5
    },
    {
      name: "pidilite litokol private limited",
      logo: "/images/clients/pidilite.png",
      industry: "Adhesives & Building Materials",
      testimonial: "Consistent quality and dependable timelines.",
      rating: 5
    },
    {
      name: "ICA pidilite pvt ltd",
      logo: "/images/clients/ica-pidilite.png",
      industry: "Coatings",
      testimonial: "Professional team with strong technical expertise.",
      rating: 5
    },
    {
      name: "Air Liquide India Holding pvt ltd",
      logo: "/images/clients/air-liquide.png",
      industry: "Industrial Gases",
      testimonial: "Reliable equipment and excellent support.",
      rating: 5
    },
    {
      name: "Cohizon Life sciences Ltd",
      logo: "",
      industry: "Life Sciences",
      testimonial: "Responsive service and quality workmanship.",
      rating: 5
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
    { number: `${new Date().getFullYear() - 1999}+`, label: "Years Experience", icon: Award }
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
    <section id="clients" className="section-standard scroll-offset bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-visible md:overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
            variants={itemVariants}
          >
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Industry Leaders
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-slate-300 font-normal mt-2 sm:mt-4">
              Across India
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            We have built long-term partnerships with leading companies across multiple industries. 
            Our commitment to quality, reliability, and innovation has made us the preferred choice 
            for critical engineering solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Clients Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ contain: 'layout' }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              className="group relative"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                {/* Client Logo */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center p-4 group-hover:bg-white/20 transition-all duration-300">
                    {client.logo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <Building2 className="w-10 h-10 text-orange-400" />
                    )}
                  </div>
                </div>
                
                {/* Client Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {client.name}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                    <span className="text-sm text-orange-400 font-medium">{client.industry}</span>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                    {client.testimonial}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-2xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            Our Valued Partners
          </motion.h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-6 sm:space-x-8">
              {marqueeClients.map((client) => (
                <div
                  key={client.name}
                  className="flex-shrink-0 w-32 h-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300"
                >
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={80}
                      height={40}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <Building2 className="w-8 h-8 text-orange-400" />
                  )}
                </div>
            ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let&apos;s discuss your project requirements and see how we can help you achieve 
                your engineering goals with our proven expertise and quality solutions.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2 group min-h-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
