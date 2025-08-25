'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Globe, Target, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Rapid Delivery',
      description: 'Fast-paced development cycles ensure your projects reach market quickly.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized solutions and 24/7 support.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Every solution is tailored to your specific business needs and goals.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes guarantee excellence.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your project success.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '100%', label: 'Client Retention', icon: Target }
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

  return (
    <section id="about" className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
            About <span className="text-gradient-primary">Krupa Engineering</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            Leading manufacturer of industrial equipment and custom fabrication solutions. 
            Delivering quality, innovation, and reliability since 1995.
          </p>
        </motion.div>

        {/* Enhanced Stats Section */}
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

        {/* Enhanced Features Grid */}
        <motion.div
          className="grid-cards mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="card-elevated group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`icon-container bg-gradient-to-br ${feature.color} mx-auto mb-3`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="heading-sm text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-body-sm text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Company Story Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="heading-md text-gray-900 mb-4">
              Our Journey to Excellence
            </h3>
            <p className="text-body-md text-gray-600 mb-6 leading-relaxed">
              Founded in 1995, Krupa Engineering has grown from a small workshop to a 
              leading manufacturer of industrial equipment. We&apos;ve consistently delivered 
              innovative solutions that drive industry progress.
            </p>
            <p className="text-body-md text-gray-600 mb-6 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us 
              the trusted partner for hundreds of companies worldwide. We don&apos;t just build 
              equipment; we build lasting relationships.
            </p>
            <button className="btn-primary">
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center">
                <Rocket className="w-24 h-24 text-orange-500" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-2xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;