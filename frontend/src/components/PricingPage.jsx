import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { Quote, Star, ArrowRight, Shield, Zap, Users, Globe } from "lucide-react";

const PricingPage = ({ plans, testimonials, subtitle, version }) => {
  return (
    <div className="px-8 py-16">
      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose ProMax?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the features that make us the preferred choice for thousands of teams worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="text-blue-400" size={40} />,
              title: "Enterprise Security",
              description: "Bank-level encryption and compliance with SOC2, GDPR, and more"
            },
            {
              icon: <Zap className="text-yellow-400" size={40} />,
              title: "Lightning Fast",
              description: "Optimized performance with 99.9% uptime guarantee"
            },
            {
              icon: <Users className="text-green-400" size={40} />,
              title: "Team Collaboration",
              description: "Real-time collaboration tools for seamless teamwork"
            },
            {
              icon: <Globe className="text-purple-400" size={40} />,
              title: "Global Scale",
              description: "Available in 50+ countries with local data centers"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle || "Choose the plan that fits your needs. All plans include our core features with no hidden fees."}
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-gray-400">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-14 h-8 bg-gray-700 rounded-full flex items-center cursor-pointer">
                <div className="w-6 h-6 bg-purple-500 rounded-full ml-1 transition-transform"></div>
              </div>
            </div>
            <span className="text-white">Annual</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
              Save 30%
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            All plans include 24/7 support, regular updates, and a 30-day money-back guarantee
          </p>
          <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 mx-auto">
            Compare all features <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Quote className="text-purple-400 mb-4" size={32} />
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
