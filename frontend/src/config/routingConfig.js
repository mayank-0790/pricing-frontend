// Blue-Green Deployment Configuration
export const routingConfig = {
  // Routing Strategy Options:
  // "percentage" - Route based on percentage split
  // "ip" - Route based on client IP simulation
  // "header" - Route based on URL parameter ?version=blue/green
  // "cookie" - Route based on existing cookie preference
  strategy: "percentage",
  
  // Traffic Split Configuration (must add up to 100)
  blueTrafficPercentage: 70,
  greenTrafficPercentage: 30,
  
  // Sticky Sessions - keep users on same version
  stickySession: true,
  
  // Logging Configuration
  enableLogging: true,
  logLevel: "info", // "debug", "info", "warn", "error"
  
  // Fallback Configuration
  fallbackVersion: "blue", // Default if routing fails
  
  // Testing Override (for development)
  forceVersion: null, // Set to "blue" or "green" to force a version
};

// Environment-specific overrides
export const environmentOverrides = {
  development: {
    enableLogging: true,
    logLevel: "debug",
  },
  staging: {
    blueTrafficPercentage: 50,
    greenTrafficPercentage: 50,
  },
  production: {
    enableLogging: false,
    logLevel: "error",
  }
};

// Get current environment (simplified for frontend)
export const getCurrentEnvironment = () => {
  if (window.location.hostname === 'localhost') return 'development';
  if (window.location.hostname.includes('staging')) return 'staging';
  return 'production';
};

// Merge configuration with environment overrides
export const getEffectiveConfig = () => {
  const env = getCurrentEnvironment();
  const overrides = environmentOverrides[env] || {};
  
  return {
    ...routingConfig,
    ...overrides,
  };
};