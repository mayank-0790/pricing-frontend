import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PricingPage from "./components/PricingPage";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import { getEffectiveConfig } from "./config/routingConfig";
import { bluePricingData } from "./data/bluePricing";
import { greenPricingData } from "./data/greenPricing";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "This platform has revolutionized how we manage our projects. The interface is intuitive and the features are exactly what we needed.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "StartupXYZ",
    content: "Amazing performance and reliability. Our team productivity increased by 40% since we started using this tool.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Studio",
    content: "The best investment we've made for our business. Clean design, powerful features, and excellent support.",
    avatar: "ER"
  }
];

// Blue-Green Routing Logic
class BlueGreenRouter {
  constructor(config) {
    this.config = config;
    this.startTime = Date.now();
  }

  // Log routing events
  log(level, message, data = {}) {
    if (!this.config.enableLogging) return;
    
    const logLevels = { debug: 0, info: 1, warn: 2, error: 3 };
    const configLevel = logLevels[this.config.logLevel] || 1;
    const messageLevel = logLevels[level] || 1;
    
    if (messageLevel >= configLevel) {
      console[level](`🔀 BlueGreen [${level.toUpperCase()}]:`, message, data);
    }
  }

  // Get client identifier for consistent routing
  getClientId() {
    let clientId = localStorage.getItem('client-id');
    if (!clientId) {
      clientId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('client-id', clientId);
    }
    return clientId;
  }

  // Check for sticky session
  getStickyVersion() {
    if (this.config.stickySession) {
      return localStorage.getItem('pricing-version');
    }
    return null;
  }

  // Set sticky session
  setStickyVersion(version) {
    if (this.config.stickySession) {
      localStorage.setItem('pricing-version', version);
    }
  }

  // Route based on percentage
  routeByPercentage() {
    const clientId = this.getClientId();
    const hash = this.hashString(clientId);
    const percentage = hash % 100;
    
    return percentage < this.config.blueTrafficPercentage ? 'blue' : 'green';
  }

  // Route based on IP simulation (using client ID)
  routeByIP() {
    const clientId = this.getClientId();
    const hash = this.hashString(clientId);
    return hash % 2 === 0 ? 'blue' : 'green';
  }

  // Route based on header simulation
  routeByHeader() {
    const versionHeader = new URLSearchParams(window.location.search).get('version');
    return versionHeader === 'green' ? 'green' : 'blue';
  }

  // Simple hash function
  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  // Route based on cookie preference
  routeByCookie() {
    const cookies = document.cookie.split(';');
    const versionCookie = cookies.find(cookie => cookie.trim().startsWith('preferred-version='));
    
    if (versionCookie) {
      const version = versionCookie.split('=')[1].trim();
      return ['blue', 'green'].includes(version) ? version : this.config.fallbackVersion;
    }
    
    return this.routeByPercentage(); // Fallback to percentage
  }

  // Main routing logic
  route() {
    const clientId = this.getClientId();
    
    // Check for forced version (testing override)
    if (this.config.forceVersion) {
      this.log('info', 'Using forced version', { version: this.config.forceVersion, clientId });
      return this.config.forceVersion;
    }

    // Check for sticky session first
    const stickyVersion = this.getStickyVersion();
    if (stickyVersion) {
      this.log('debug', 'Using sticky session', { version: stickyVersion, clientId });
      return stickyVersion;
    }

    let version;
    try {
      switch (this.config.strategy) {
        case 'ip':
          version = this.routeByIP();
          break;
        case 'header':
          version = this.routeByHeader();
          break;
        case 'cookie':
          version = this.routeByCookie();
          break;
        case 'percentage':
        default:
          version = this.routeByPercentage();
          break;
      }
    } catch (error) {
      this.log('error', 'Routing failed, using fallback', { error: error.message });
      version = this.config.fallbackVersion;
    }

    this.setStickyVersion(version);
    
    // Log routing decision
    this.log('info', 'Route decision made', {
      clientId: clientId.substring(0, 8),
      strategy: this.config.strategy,
      version,
      timestamp: new Date().toISOString()
    });
    
    return version;
  }
}

const App = () => {
  const [currentData, setCurrentData] = useState(null);
  const [version, setVersion] = useState('');
  const [routingInfo, setRoutingInfo] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentConfig, setCurrentConfig] = useState(null);

  const initializeApp = () => {
    setIsLoading(true);
    
    // Get effective configuration with environment overrides
    const config = getEffectiveConfig();
    setCurrentConfig(config);
    
    // Initialize router and determine version
    const router = new BlueGreenRouter(config);
    const routedVersion = router.route();
    
    // Simulate realistic API call delay
    const delay = 300;
    
    setTimeout(() => {
      const data = routedVersion === 'blue' ? bluePricingData : greenPricingData;
      setCurrentData(data);
      setVersion(routedVersion);
      setIsLoading(false);
      
      // Create routing info for display
      const clientId = router.getClientId();
      const logInfo = `Client: ${clientId.substring(0, 8)}... | Strategy: ${config.strategy} | Version: ${routedVersion.toUpperCase()} | Split: ${config.blueTrafficPercentage}%/${config.greenTrafficPercentage}%`;
      setRoutingInfo(logInfo);
      
      // Log successful routing
      router.log('info', 'Application initialized successfully', {
        version: routedVersion,
        loadTime: Date.now() - router.startTime + 'ms',
        dataPlans: data.plans.length
      });
    }, delay);
  };

  useEffect(() => {
    initializeApp();
  }, []);

  const handleConfigChange = (newConfig) => {
    // In a real app, this would update the backend configuration
    // For demo purposes, we'll just reload the app
    localStorage.removeItem('pricing-version'); // Clear sticky session
    window.location.reload();
  };

  if (isLoading || !currentData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="text-3xl font-bold animate-pulse mb-4">
          🔄 Loading Pricing Data...
        </div>
        <div className="text-lg text-gray-300">
          Routing to optimal pricing version
        </div>
      </div>
    );
  }

  const bgClass = version === 'blue' 
    ? 'from-blue-900 via-indigo-900 to-black' 
    : 'from-green-900 via-emerald-900 to-black';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgClass} text-white`}>
      {/* Version Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className={`px-4 py-2 rounded-full text-sm font-bold ${
          version === 'blue' 
            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
            : 'bg-green-500/20 text-green-300 border border-green-500/30'
        }`}>
          {version.toUpperCase()} Version
        </div>
      </div>

      {/* Routing Info */}
      <div className="fixed bottom-4 left-4 z-50 max-w-md">
        <div className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-xs text-gray-300 font-mono">
          {routingInfo}
        </div>
      </div>
      
      <Header 
        version={currentData.version} 
        stats={currentData.stats}
        environment={currentData.environment}
        title={currentData.title}
      />
      
      <PricingPage 
        plans={currentData.plans}
        testimonials={testimonials}
        subtitle={currentData.subtitle}
        version={version}
      />
      
      <Footer stats={currentData.stats} version={version} />
      
      {/* Admin Panel for Configuration */}
      {currentConfig && (
        <AdminPanel
          currentConfig={currentConfig}
          onConfigChange={handleConfigChange}
        />
      )}
    </div>
  );
};

export default App;