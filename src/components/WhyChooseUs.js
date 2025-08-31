'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and testing ensure every product meets the highest industry standards.",
      color: "from-blue-500 to-cyan-500",
      features: ["ISO Standards", "Quality Testing", "Certified Products"]
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We complete projects in record time while maintaining the highest standards of quality and precision.",
      color: "from-green-500 to-emerald-500",
      features: ["Fast Turnaround", "On-Time Delivery", "Project Management"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of experienced engineers, supervisors, and skilled workers ensures excellence in every project.",
      color: "from-orange-500 to-red-500",
      features: ["Experienced Engineers", "Skilled Workers", "Technical Expertise"]
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Trusted by leading companies across diverse industries for our reliability and innovative solutions.",
      color: "from-purple-500 to-pink-500",
      features: ["Industry Awards", "Client Trust", "Proven Track Record"]
    },
    {
      icon: CheckCircle,
      title: "Customer Focus",
      description: "Building long-term partnerships through exceptional service, support, and customer satisfaction.",
      color: "from-indigo-500 to-blue-500",
      features: ["24/7 Support", "After-Sales Service", "Customer Success"]
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Constantly evolving our processes and technologies to deliver cutting-edge engineering solutions.",
      color: "from-teal-500 to-green-500",
      features: ["R&D Investment", "Technology Upgrades", "Process Improvement"]
    }
  ];

  const highlights = [
    {
      number: "25+",
      label: "Years of Excellence",
      description: "Decades of experience in engineering and manufacturing"
    },
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across industries"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Consistently exceeding customer expectations"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
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
    <section id="why-us" className="section-standard bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            The Krupa
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Advantage
            </span>
            <span className="block text-2xl md:text-3xl text-slate-600 font-normal mt-4">
              Engineering Excellence Since 1995
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are committed to quality services with our fully equipped workshop in GIDC Ankleshwar. 
            Our dedication to excellence has made us the preferred choice for leading industries across India.
          </motion.p>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((highlight, index) => (
              <motion.div
              key={highlight.label}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-slate-900 mb-2">{highlight.number}</div>
              <div className="text-slate-600 font-medium mb-2">{highlight.label}</div>
              <div className="text-sm text-slate-500">{highlight.description}</div>
                    </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Company Story */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Our Commitment to Excellence
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our workshop & office at GIDC Ankleshwar is fully equipped with all modern equipment, tools, 
                and other infrastructure backed by our efficient team of engineers, supervisors and workers.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We aim at perfection in every job we undertake and complete in record time. Our work is 
                appreciated by those companies and with their continuous patronage we are growing further 
                to play a supporting role for the major industries in India.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              className="space-y-4"
              variants={itemVariants}
            >
              {[
                "Fully equipped modern workshop with latest technology",
                "Experienced team of engineers and skilled workers",
                "Commitment to quality and timely delivery",
                "Continuous innovation and process improvement"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
                <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl overflow-hidden">
              {/* Placeholder for company/workshop image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-slate-500 font-medium">Quality Workshop</p>
                  <p className="text-slate-400 text-sm">Add your workshop image here</p>
                </div>
                  </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-pink-500/50 rounded-bl-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((reason, index) => (
          <motion.div 
              key={reason.title}
              className="group relative"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-slate-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">
                  {reason.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {reason.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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
          className="text-center mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Experience the Krupa Difference
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have chosen Krupa Engineering for their critical equipment needs.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;