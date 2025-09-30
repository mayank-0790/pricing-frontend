import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Star, Zap } from "lucide-react";

const Header = ({ version, stats, environment, title }) => {
  return (
    <>
      {/* Navigation */}
      <nav className="w-full px-8 py-4 flex justify-between items-center bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">ProMax</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition">Reviews</a>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>
        
        <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full border border-white/20">
          v{version}
        </span>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            {title || "Transform Your Workflow"}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {environment === 'blue' 
              ? "Experience the next generation of productivity tools. Streamline your projects, collaborate seamlessly, and achieve more than ever before."
              : "Discover our enhanced pricing structure with improved features and better value. Unlock premium capabilities designed for growing teams."
            }
          </p>
          
          {/* Environment Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
            environment === 'blue' 
              ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
              : 'bg-green-500/20 text-green-300 border border-green-400/30'
          }`}>
            <div className={`w-2 h-2 rounded-full ${environment === 'blue' ? 'bg-blue-400' : 'bg-green-400'} animate-pulse`}></div>
            {environment?.toUpperCase()} Environment Active
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="mx-auto mb-2 text-blue-400" size={32} />
              <div className="text-3xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="mx-auto mb-2 text-green-400" size={32} />
              <div className="text-3xl font-bold text-white">{stats.activeProjects.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Projects</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="mx-auto mb-2 text-yellow-400" size={32} />
              <div className="text-3xl font-bold text-white">{stats.satisfactionRate}%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="mx-auto mb-2 text-purple-400" size={32} />
              <div className="text-3xl font-bold text-white">{stats.uptime}</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Header;
