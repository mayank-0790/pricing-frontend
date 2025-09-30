import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Heart,
  ArrowUp
} from "lucide-react";

const Footer = ({ stats, version }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">ProMax</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering teams with cutting-edge productivity tools. 
              Transform your workflow and achieve more than ever before.
            </p>
            <div className="flex space-x-4">
              <Twitter className="text-gray-400 hover:text-blue-400 cursor-pointer transition" size={20} />
              <Linkedin className="text-gray-400 hover:text-blue-600 cursor-pointer transition" size={20} />
              <Github className="text-gray-400 hover:text-white cursor-pointer transition" size={20} />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">System Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                <span>hello@promax.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Happy Users</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-2xl font-bold text-white">{stats.activeProjects.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Active Projects</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-2xl font-bold text-white">{stats.satisfactionRate}%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-2xl font-bold text-white">{stats.uptime}</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ProMax. All rights reserved. | 
            <span className={`ml-2 font-semibold ${version === 'blue' ? 'text-blue-400' : 'text-green-400'}`}>
              {version?.toUpperCase()} Deployment
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;