'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Committed to delivering the highest quality engineering solutions with rigorous testing and quality control processes.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of experienced engineers, supervisors, and skilled workers ensures excellence in every project.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Trusted by leading companies across diverse industries for our reliability and innovative solutions.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We complete projects in record time while maintaining the highest standards of quality and precision.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Customer Focus",
      description: "Building long-term partnerships through exceptional service, support, and customer satisfaction.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Growing further to play a supporting role for major industries across India with innovative solutions.",
      color: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: `${new Date().getFullYear() - 1999}+`, label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Industries Served" },
    { number: "99%", label: "Client Satisfaction" }
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
    <section id="about" className="section-standard bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
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
            Engineering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Excellence
            </span>
            <span className="block text-2xl md:text-3xl text-slate-600 font-normal mt-4">
              Since 1999
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are one of the leading engineering service providers for special types of equipment designing, 
            manufacturing, fabrication, and mechanical maintenance. Committed to quality services with our 
            fully equipped workshop in GIDC Ankleshwar.
          </motion.p>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Story
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

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
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
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-slate-500 font-medium">Company Workshop</p>
                  <p className="text-slate-400 text-sm">Add your workshop image here</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-orange-500/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl"></div>
                </div>
              </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="group relative"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-slate-200 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                    </p>
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your engineering requirements and create innovative solutions together.
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

export default About;
