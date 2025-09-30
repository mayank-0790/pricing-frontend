import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Sparkles } from "lucide-react";

const colors = {
  Basic: "from-blue-500 to-indigo-600",
  Pro: "from-purple-500 to-pink-600",
  Enterprise: "from-green-500 to-emerald-600",
};

const tagColors = {
  Basic: "bg-blue-500",
  Pro: "bg-purple-500", 
  Enterprise: "bg-green-500",
};

const tagLabels = {
  Basic: "Best Value",
  Pro: "Most Popular",
  Enterprise: "Enterprise",
};

const PricingCard = ({ plan }) => {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl shadow-2xl text-white bg-gradient-to-br ${
        colors[plan.name] || "from-gray-700 to-gray-900"
      } ${plan.popular ? 'ring-4 ring-yellow-400/50 scale-105' : ''}`}
      whileHover={{ scale: plan.popular ? 1.08 : 1.05, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Plan Tags - Only show for Basic and Pro plans to avoid overlap */}
      {(plan.name === "Basic" || plan.name === "Pro" || plan.name === "Starter" || plan.name === "Professional") && (
        <motion.div
          className="absolute -top-3 right-4"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={`${tagColors[plan.name]} text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg`}>
            {tagLabels[plan.name]}
          </div>
        </motion.div>
      )}

      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
            <Crown size={16} />
            Most Popular
            <Sparkles size={16} />
          </div>
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-extrabold">${plan.price}</span>
          <span className="text-lg font-medium text-white/80 ml-2">/month</span>
        </div>
        {plan.popular && (
          <p className="text-yellow-300 font-semibold mt-2">Save 30% annually</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3 text-white/90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <CheckCircle size={20} className="text-green-300 flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
            : 'bg-white text-black hover:bg-gray-100'
        }`}
      >
        {plan.name === "Enterprise" ? "Contact Sales →" : "Start Free Trial →"}
      </motion.button>

      {plan.name !== "Enterprise" && (
        <p className="text-center text-xs text-white/60 mt-3">
          No credit card required
        </p>
      )}
    </motion.div>
  );
};

export default PricingCard;
