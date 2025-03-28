'use client';

import { useState } from 'react';

export default function ApiBasicsExample() {
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState('{\n  "name": "Example User",\n  "email": "user@example.com"\n}');
  const [error, setError] = useState<string | null>(null);

  async function makeRequest() {
    setLoading(true);
    setError(null);
    
    try {
      let options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      // Add request body for POST and PUT requests
      if (method === 'POST' || method === 'PUT') {
        try {
          const parsedData = JSON.parse(requestData);
          options.body = JSON.stringify(parsedData);
        } catch (e) {
          setError('Invalid JSON data. Please check your input.');
          setLoading(false);
          return;
        }
      }
      
      // Make the request
      const res = await fetch('/api/hello', options);
      const data = await res.json();
      
      // Set the response
      setResponse({
        status: res.status,
        statusText: res.statusText,
        data,
      });
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
          This example demonstrates the basic usage of API Routes with different HTTP methods.
          Try changing the method and making requests to see how the API responds.
        </p>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          HTTP Method
        </label>
        <div className="flex space-x-2">
          {(['GET', 'POST', 'PUT', 'DELETE'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                method === m
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      
      {(method === 'POST' || method === 'PUT') && (
        <div className="mb-4">
          <label htmlFor="requestData" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Request Body (JSON)
          </label>
          <textarea
            id="requestData"
            value={requestData}
            onChange={(e) => setRequestData(e.target.value)}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 font-mono text-sm"
          />
        </div>
      )}
      
      <button
        onClick={makeRequest}
        disabled={loading}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          loading
            ? 'bg-indigo-400 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        }`}
      >
        {loading ? 'Loading...' : `Send ${method} Request`}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded">
          {error}
        </div>
      )}
      
      {response && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Response</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Status: {response.status}</span>
              <span className="text-sm">{response.statusText}</span>
            </div>
            <pre className="bg-white dark:bg-gray-900 p-3 rounded text-xs overflow-x-auto">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
      
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-2">API Route Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`// app/api/hello/route.ts
export async function GET(request: Request) {
  return Response.json({
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  
  return Response.json({
    success: true,
    message: 'Data received successfully',
    data,
    timestamp: new Date().toISOString(),
  });
}

export async function PUT(request: Request) {
  const data = await request.json();
  
  return Response.json({
    success: true,
    message: 'Data received successfully',
    data,
    timestamp: new Date().toISOString(),
  });
}

export async function DELETE(request: Request) {
  return Response.json({
    success: true,
    message: 'Data deleted successfully',
    timestamp: new Date().toISOString(),
  });
}`}</code>
        </pre>
      </div>
    </div>
  );
}
