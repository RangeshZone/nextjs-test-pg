'use client';

import { useState, useEffect } from 'react';

/**
 * Client-Only Component Example
 * 
 * This component demonstrates a pure client component that:
 * 1. Uses React hooks for state management
 * 2. Accesses browser-only APIs
 * 3. Handles user interactions
 */

export default function ClientOnlyComponent() {
  // Client-side state
  const [count, setCount] = useState(0);
  const [clientTime, setClientTime] = useState('');
  const [browserInfo, setBrowserInfo] = useState<Record<string, string>>({});
  
  // Client-side effect to update time
  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setClientTime(new Date().toLocaleTimeString());
    }, 1000);
    
    // Initial time set
    setClientTime(new Date().toLocaleTimeString());
    
    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);
  
  // Client-side effect to get browser information
  useEffect(() => {
    setBrowserInfo({
      'User Agent': navigator.userAgent,
      'Language': navigator.language,
      'Window Size': `${window.innerWidth}x${window.innerHeight}`,
      'Platform': navigator.platform,
    });
  }, []);
  
  return (
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
      <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">Client Component Example</h4>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This component runs in the browser. It uses React hooks for state management
          and can access browser APIs and handle user interactions.
        </p>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Client Time (Live):</p>
          <p className="font-mono text-sm">{clientTime}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">Interactive Counter:</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCount(count - 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="font-mono text-sm w-8 text-center">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Browser Information:</p>
          <div className="font-mono text-xs space-y-1 max-h-24 overflow-y-auto">
            {Object.entries(browserInfo).map(([key, value]) => (
              <div key={key} className="flex">
                <span className="text-gray-500 dark:text-gray-400 w-24 flex-shrink-0">{key}:</span>
                <span className="text-gray-800 dark:text-gray-200 truncate">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-green-600 dark:text-green-400">
        <p>
          <strong>Note:</strong> This component includes JavaScript that runs in the browser.
          Try clicking the counter buttons or watching the time update live.
        </p>
      </div>
    </div>
  );
}
