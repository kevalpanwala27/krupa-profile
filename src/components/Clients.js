'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Star, Award, ArrowRight } from 'lucide-react';
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
    <section id="clients" className="section-standard bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container-balanced relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Industry Leaders
            </span>
            <span className="block text-2xl md:text-3xl text-slate-300 font-normal mt-4">
              Across India
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We have built long-term partnerships with leading companies across multiple industries. 
            Our commitment to quality, reliability, and innovation has made us the preferred choice 
            for critical engineering solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
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
                  
                  {/* Rating and Projects */}
                  <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-slate-400">
                      {client.projects} projects
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
            <div className="flex animate-marquee space-x-8">
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
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project requirements and see how we can help you achieve 
                your engineering goals with our proven expertise and quality solutions.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
