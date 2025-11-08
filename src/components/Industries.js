'use client';

import { motion } from 'framer-motion';
import { Factory, Fuel, FlaskConical, Pill, Paintbrush, Cog, Leaf, Zap, ArrowRight } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Fuel,
      title: "Oil & Gas",
      description: "Critical equipment for upstream, midstream, and downstream operations including valves, flanges, and safety systems.",
      color: "from-blue-500 to-cyan-500",
      features: ["Pipeline Equipment", "Safety Systems", "Valve Solutions"]
    },
    {
      icon: FlaskConical,
      title: "Chemical & Petrochemical",
      description: "Specialized equipment for chemical processing, reactors, heat exchangers, and material handling systems.",
      color: "from-green-500 to-emerald-500",
      features: ["Reactors", "Heat Exchangers", "Material Handling"]
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      description: "GMP-compliant equipment for drug manufacturing, clean rooms, and sterile processing environments.",
      color: "from-purple-500 to-pink-500",
      features: ["Clean Room Equipment", "Sterile Processing", "GMP Compliance"]
    },
    {
      icon: Paintbrush,
      title: "Paints & Coatings",
      description: "Industrial equipment for paint manufacturing, mixing, and application systems with precision control.",
      color: "from-orange-500 to-red-500",
      features: ["Mixing Systems", "Application Equipment", "Precision Control"]
    },
    {
      icon: Cog,
      title: "Heavy Engineering",
      description: "Custom machinery and equipment for manufacturing, assembly lines, and industrial automation.",
      color: "from-indigo-500 to-blue-500",
      features: ["Custom Machinery", "Assembly Lines", "Industrial Automation"]
    },
    {
      icon: Leaf,
      title: "Agrochemicals",
      description: "Specialized equipment for fertilizer production, pesticide manufacturing, and agricultural processing.",
      color: "from-teal-500 to-green-500",
      features: ["Fertilizer Equipment", "Pesticide Systems", "Agricultural Processing"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production equipment, quality control systems, and industrial automation solutions for modern factories.",
      color: "from-slate-500 to-gray-500",
      features: ["Production Equipment", "Quality Control", "Industrial Automation"]
    },
    {
      icon: Zap,
      title: "Power & Energy",
      description: "Equipment for power generation, transmission, and renewable energy systems with high reliability.",
      color: "from-yellow-500 to-orange-500",
      features: ["Power Generation", "Transmission Systems", "Renewable Energy"]
    }
  ];

  const stats = [
    { number: "15+", label: "Industries Served" },
    { number: "500+", label: "Custom Solutions" },
    { number: "99%", label: "Uptime Reliability" },
    { number: "24/7", label: "Support Available" }
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
    <section id="industries" className="section-standard scroll-offset bg-gradient-to-br from-white via-slate-50 to-white relative overflow-visible md:overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
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
            Serving Multiple
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Industries
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-slate-600 font-normal mt-2 sm:mt-4">
              With Engineering Excellence
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Our expertise spans across diverse industrial sectors, providing specialized equipment and solutions 
            that meet the unique challenges and requirements of each industry.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
              <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ contain: 'layout' }}
        >
          {industries.map((industry, index) => (
                      <motion.div 
              key={industry.title}
              className="group relative"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-slate-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                    </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {industry.title}
                      </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">
                        {industry.description}
                      </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-500">{feature}</span>
                    </div>
                  ))}
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2">
                Not Seeing Your Industry?
                </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                We specialize in custom engineering solutions. Even if your industry isn&apos;t listed above, 
                we can design and manufacture equipment tailored to your specific needs.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center gap-2 group min-h-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
