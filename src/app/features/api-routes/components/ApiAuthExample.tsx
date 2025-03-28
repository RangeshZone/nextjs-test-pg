'use client';

import { useState } from 'react';

export default function ApiAuthExample() {
  const [apiKey, setApiKey] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchProtectedData() {
    if (!apiKey || !userId) {
      setError('API Key and User ID are required');
      return;
    }
    
    setLoading(true);
    setError(null);
    setResponse(null);
    
    try {
      // Make the request to the protected API route
      const res = await fetch(`/api/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setResponse({
          status: res.status,
          data,
        });
      } else {
        setError(data.message || `Error: ${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setError(`Request failed: ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How This Works</p>
        <p>
          This example demonstrates how to implement basic authentication for API Routes
          using an API key in the Authorization header.
        </p>
        
        <p className="mt-2">
          <strong>Note:</strong> For this demo, any non-empty API key will work, and you can use any user ID from 1-5.
        </p>
      </div>

      <div className="max-w-4xl mx-auto my-5 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <p>
          This is an example only. In a production environment, implement a more secure and robust authentication system.
        </p>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            API Key
          </label>
          <input
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter any value as your API key"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter a user ID (1-5)"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          />
        </div>
        
        <button
          onClick={fetchProtectedData}
          disabled={loading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
        >
          {loading ? 'Loading...' : 'Fetch Protected Data'}
        </button>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded">
          {error}
        </div>
      )}
      
      {/* Response */}
      {response && (
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Response</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Status: {response.status}</span>
            </div>
            <pre className="bg-white dark:bg-gray-900 p-3 rounded text-xs overflow-x-auto">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
      
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-2">API Authentication Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`// Client-side code
async function fetchProtectedData() {
  const res = await fetch(\`/api/users/\${userId}\`, {
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
    },
  });
  
  const data = await res.json();
  
  if (res.ok) {
    setResponse({
      status: res.status,
      data,
    });
  } else {
    setError(data.message || \`Error: \${res.status}\`);
  }
}

// Server-side middleware (conceptual)
function withAuth(handler) {
  return async (req, res) => {
    // Get the authorization header
    const authHeader = req.headers.authorization;
    
    // Check if the header exists and has the correct format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing or invalid API key',
      });
    }
    
    // Extract the API key
    const apiKey = authHeader.split(' ')[1];
    
    // Validate the API key (simplified for demo)
    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid API key',
      });
    }
    
    // If authentication passes, call the handler
    return handler(req, res);
  };
}`}</code>
        </pre>
      </div>
    </div>
  );
}
