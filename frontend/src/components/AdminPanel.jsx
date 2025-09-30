import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Users, RefreshCw } from 'lucide-react';

const AdminPanel = ({ onConfigChange, currentConfig, routingStats }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState(currentConfig);

  const handleConfigUpdate = () => {
    onConfigChange(config);
    setIsOpen(false);
  };

  const strategies = [
    { value: 'percentage', label: 'Percentage Split' },
    { value: 'ip', label: 'IP-based Routing' },
    { value: 'header', label: 'Header-based Routing' },
    { value: 'cookie', label: 'Cookie-based Routing' }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all"
      >
        <Settings size={20} />
      </button>

      {/* Admin Panel Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gray-900 rounded-xl p-6 max-w-md w-full max-h-96 overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold text-white">Blue-Green Config</h3>
            </div>

            {/* Strategy Selection */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">Routing Strategy</label>
              <select
                value={config.strategy}
                onChange={(e) => setConfig({...config, strategy: e.target.value})}
                className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-3 py-2"
              >
                {strategies.map(strategy => (
                  <option key={strategy.value} value={strategy.value}>
                    {strategy.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Percentage Split */}
            {config.strategy === 'percentage' && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm mb-2">
                    Blue Traffic: {config.blueTrafficPercentage}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={config.blueTrafficPercentage}
                    onChange={(e) => setConfig({
                      ...config,
                      blueTrafficPercentage: parseInt(e.target.value),
                      greenTrafficPercentage: 100 - parseInt(e.target.value)
                    })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Blue: {config.blueTrafficPercentage}%</span>
                    <span>Green: {config.greenTrafficPercentage}%</span>
                  </div>
                </div>
              </>
            )}

            {/* Sticky Sessions */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={config.stickySession}
                  onChange={(e) => setConfig({...config, stickySession: e.target.checked})}
                  className="rounded"
                />
                Enable Sticky Sessions
              </label>
            </div>

            {/* Logging */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={config.enableLogging}
                  onChange={(e) => setConfig({...config, enableLogging: e.target.checked})}
                  className="rounded"
                />
                Enable Logging
              </label>
            </div>

            {/* Current Stats */}
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-green-400" size={16} />
                <span className="text-gray-300 text-sm">Current Session</span>
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Strategy: {currentConfig.strategy}</div>
                <div>Split: {currentConfig.blueTrafficPercentage}% / {currentConfig.greenTrafficPercentage}%</div>
                <div>Sticky: {currentConfig.stickySession ? 'Enabled' : 'Disabled'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleConfigUpdate}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw size={16} />
                Apply & Reload
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AdminPanel;