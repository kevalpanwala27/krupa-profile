'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, Settings, CheckCircle, Award, Star, Trophy, Target, Globe, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified with rigorous quality control processes ensuring every product meets international standards.",
      color: "from-blue-500 to-blue-600",
      features: ["ISO Certified", "Quality Control", "Testing Labs", "Compliance"]
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Commitment to project timelines with efficient project management and transparent communication throughout.",
      color: "from-green-500 to-green-600",
      features: ["Project Management", "Timeline Tracking", "Communication", "Milestones"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced engineers and technicians with deep industry knowledge and continuous training programs.",
      color: "from-purple-500 to-purple-600",
      features: ["Expert Engineers", "Technical Skills", "Training Programs", "Experience"]
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored engineering solutions designed specifically for your unique requirements and industry standards.",
      color: "from-orange-500 to-orange-600",
      features: ["Custom Design", "Industry Specific", "Flexible Solutions", "Innovation"]
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Advanced CAD/CAM systems and precision machinery ensuring exact specifications and superior quality.",
      color: "from-red-500 to-red-600",
      features: ["CAD/CAM Systems", "Precision Tools", "Exact Specifications", "Superior Quality"]
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international standards including ASME, API, and other industry-specific certifications.",
      color: "from-indigo-500 to-indigo-600",
      features: ["ASME Compliance", "API Standards", "International Cert", "Industry Codes"]
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Trophy },
    { number: "99%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Clock }
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
    <section id="why-us" className="section-standard bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container-balanced">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            Why <span className="text-gradient-primary">Choose Us</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            We don&apos;t just build equipment; we build partnerships. Our commitment to excellence, 
            quality services, and customer satisfaction sets us apart in the industry.
          </p>
          
          <p className="text-body-md text-gray-600 mb-6">
            Our workshop at GIDC Ankleshwar is fully equipped with all modern equipment, tools, 
            and infrastructure backed by our efficient team of engineers, supervisors and workers.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid-balanced grid-cols-2 md:grid-cols-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-container mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className="card-elevated group"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className={`icon-container bg-gradient-to-br ${reason.color} mx-auto mb-3`}>
                <reason.icon className="w-5 h-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="heading-sm text-gray-900 mb-2 text-center group-hover:text-gray-700 transition-colors duration-200">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-body-sm text-gray-600 mb-3 text-center leading-relaxed">
                {reason.description}
              </p>

              {/* Features */}
              <div className="space-y-1.5">
                {reason.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
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
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="heading-md text-gray-900 mb-3">
              Experience the Difference
            </h3>
            <p className="text-body-md text-gray-600 mb-6">
              Join hundreds of satisfied clients who have chosen Krupa Engineering 
              for their critical equipment needs.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;