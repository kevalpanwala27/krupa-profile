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
    <section id="clients" className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-balanced">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading-lg text-gray-900 mb-4">
            Trusted by Industry <span className="text-gradient-primary">Leaders</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to serve some of the biggest names in industry. Our commitment to quality, 
            innovation, and customer satisfaction has earned us the trust of leading companies worldwide.
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

        {/* Clients Grid */}
        <motion.div
          className="grid-balanced grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              className="card-elevated group"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Client Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="heading-sm text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {client.name}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
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
              <p className="text-body-sm text-gray-600 mb-4 leading-relaxed">
                &ldquo;{client.testimonial}&rdquo;
              </p>

              {/* Project Count */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Building2 className="w-4 h-4" />
                  <span>{client.projects} projects</span>
                </div>
                <TrendingUp className="w-4 h-4 text-green-500" />
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
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="heading-md text-gray-900 mb-3">
              Ready to Join Our Client Family?
            </h3>
            <p className="text-body-md text-gray-600 mb-6">
              Experience the same level of excellence that has made us the preferred choice 
              for industry leaders worldwide.
            </p>
            <button className="btn-primary">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;