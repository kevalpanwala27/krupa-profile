'use client';

import { 
  Fuel, 
  Pill, 
  FlaskRound, 
  Zap, 
  Factory, 
  Utensils,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: "Oil & Gas",
      icon: Fuel,
      description: "Comprehensive solutions for upstream, midstream, and downstream operations including drilling equipment, pipelines, and refining systems.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      features: ["Drilling Equipment", "Pipeline Systems", "Refining Solutions", "Safety Systems"],
      projects: 150,
      experience: "25+ years"
    },
    {
      id: 2,
      name: "Pharmaceutical",
      icon: Pill,
      description: "GMP-compliant equipment for pharmaceutical manufacturing including reactors, crystallizers, and purification systems.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      features: ["GMP Equipment", "Reactor Systems", "Purification Units", "Clean Room Solutions"],
      projects: 85,
      experience: "20+ years"
    },
    {
      id: 3,
      name: "Chemical",
      icon: FlaskRound,
      description: "Advanced chemical processing equipment for various industries including reactors, heat exchangers, and separation systems.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      features: ["Chemical Reactors", "Heat Exchangers", "Separation Systems", "Process Control"],
      projects: 200,
      experience: "30+ years"
    },
    {
      id: 4,
      name: "Power Generation",
      icon: Zap,
      description: "Reliable equipment for thermal, nuclear, and renewable energy power plants including boilers, turbines, and cooling systems.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      features: ["Boiler Systems", "Turbine Equipment", "Cooling Systems", "Control Panels"],
      projects: 120,
      experience: "28+ years"
    },
    {
      id: 5,
      name: "Manufacturing",
      icon: Factory,
      description: "Custom manufacturing solutions for automotive, aerospace, and general manufacturing industries.",
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-50 to-gray-100",
      features: ["Automotive Solutions", "Aerospace Equipment", "Assembly Lines", "Quality Control"],
      projects: 180,
      experience: "22+ years"
    },
    {
      id: 6,
      name: "Food & Beverage",
      icon: Utensils,
      description: "Hygienic food processing equipment including mixers, cookers, and packaging systems for food safety compliance.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      features: ["Food Processing", "Hygienic Design", "Packaging Systems", "Quality Assurance"],
      projects: 95,
      experience: "18+ years"
    }
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
    <section id="industries" className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
            Industries We <span className="text-gradient-primary">Serve</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            We provide specialized solutions across diverse industries, leveraging our expertise 
            in equipment design and manufacturing to deliver innovative solutions that meet unique sector requirements.
          </p>
          
          <p className="text-body-md text-gray-600 mb-6">
            Our products and services are designed to meet the demanding requirements of major industries 
            across India, ensuring quality, reliability, and performance in every application.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
              className="card-elevated group relative overflow-hidden"
              variants={cardVariants}
                custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
                  <div className="relative z-10">
                {/* Icon */}
                <div className={`icon-container bg-gradient-to-br ${industry.color} mx-auto mb-3`}>
                  <industry.icon className="w-5 h-5 text-white" />
                    </div>

                {/* Title */}
                <h3 className="heading-sm text-gray-900 mb-2 text-center group-hover:text-gray-700 transition-colors duration-200">
                        {industry.name}
                      </h3>

                {/* Description */}
                <p className="text-body-sm text-gray-600 mb-3 text-center leading-relaxed">
                        {industry.description}
                      </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                      </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{industry.projects}</span> projects
                    </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{industry.experience}</span> experience
                  </div>
                </div>

                {/* Hover Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </div>
                </div>
              </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="card-elevated max-w-2xl mx-auto">
            <div className="icon-container mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="heading-md text-gray-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-body-md text-gray-600 mb-6">
              Don&apos;t see your industry listed? We specialize in custom engineering solutions 
              for unique requirements across all sectors.
            </p>
            <button className="btn-primary">
              Discuss Your Needs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;