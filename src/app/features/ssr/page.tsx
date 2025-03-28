import Link from 'next/link';
import { Suspense } from 'react';

/**
 * Server-side Rendering (SSR) Demo Page
 * 
 * This page demonstrates server-side rendering in Next.js.
 * Key characteristics of SSR:
 * - No 'use client' directive, making this a server component by default (Next.js 13+ with App Router)
 * - Data fetching happens on the server before the page is sent to the client
 * - HTML is fully rendered on the server, improving SEO and initial load performance
 * - Less JavaScript is sent to the client, improving performance
 */

// Simulate a data fetching function that runs on the server
async function fetchServerData() {
  // In a real app, this would be a database or API call
  // We're using a timeout to simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    serverTime: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    nodeVersion: process.version,
    randomData: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100)
    }))
  };
}

// This component fetches data on the server
async function ServerDataDisplay() {
  // This data fetching happens on the server
  const data = await fetchServerData();
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Server-fetched Data</h3>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Server Time</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">{data.serverTime}</p>
        </div>
        
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Environment</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">{data.environment}</p>
        </div>
        
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Node.js Version</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">{data.nodeVersion}</p>
        </div>
        
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Random Data</p>
          <ul className="space-y-1">
            {data.randomData.map(item => (
              <li key={item.id} className="font-mono text-sm text-gray-600 dark:text-gray-300">
                {item.name}: {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Note:</strong> This data was fetched and rendered entirely on the server. 
          The client received the fully rendered HTML without executing any data fetching JavaScript.
        </p>
      </div>
    </div>
  );
}

// Weather API component - fetches real data from a public API
async function WeatherDisplay() {
  // Fetch weather data from a public API
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&current=temperature_2m,weather_code&timezone=America%2FLos_Angeles', { next: { revalidate: 3600 } });
  const data = await response.json();
  
  // Map weather code to a human-readable description
  const getWeatherDescription = (code: number) => {
    if (code <= 3) return "Clear or partly cloudy";
    if (code <= 49) return "Foggy";
    if (code <= 69) return "Rainy";
    if (code <= 79) return "Snowy";
    if (code <= 99) return "Thunderstorm";
    return "Unknown";
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Real-time Weather Data</h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Current weather in San Francisco, CA (fetched server-side):
      </p>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Temperature</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">
            {data.current.temperature_2m}{data.current_units.temperature_2m}
          </p>
        </div>
        
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Conditions</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">
            {getWeatherDescription(data.current.weather_code)}
          </p>
        </div>
        
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Last Updated</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">
            {new Date(data.current.time).toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Note:</strong> This weather data is fetched from a real API on the server.
          The API call is made during server rendering, not in the browser.
        </p>
      </div>
    </div>
  );
}

export default function SSRDemo() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 mb-4 inline-block hover:underline"
          >
            ← Back to Features
          </Link>
          <h1 className="text-3xl font-bold mb-2">Server-side Rendering (SSR)</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This page demonstrates server-side rendering with data fetching on the server.
          </p>
          
          {/* Documentation box */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">How SSR Works</h2>
            <p className="mb-2">
              Server-side rendering in Next.js is the default behavior for pages and components (Next.js 13+ with App Router). 
              Any component without the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">'use client'</code> directive 
              is treated as a server component.
            </p>
            <p className="mb-2">
              With SSR:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Pages are pre-rendered on the server</li>
              <li>Data fetching happens before the HTML is sent to the client</li>
              <li>Less JavaScript is sent to the browser, improving performance</li>
              <li>Better SEO as search engines see fully rendered content</li>
              <li>Improved performance for users, especially on slower devices</li>
            </ul>
          </div>
          
          {/* When to use Server Components box */}
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-8 border-l-4 border-green-500">
            <h2 className="text-lg font-semibold mb-2">When to Use Server Components</h2>
            <p className="mb-3">
              Use server components when your feature needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Data Fetching</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Components that need to fetch data from databases or APIs without exposing credentials.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">SEO Optimization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content that needs to be indexed by search engines and social media crawlers.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Large Dependencies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Components using large libraries that would be costly to send to the client.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Static Content</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Non-interactive UI that doesn't need client-side JavaScript to function.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Sensitive Operations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Logic that needs to be kept private and not exposed in client-side code.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Initial Load Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pages where fast initial load and Time to First Byte (TTFB) are critical.
                </p>
              </div>
            </div>
            
            <h3 className="font-medium mt-4 mb-2">Real-world Use Cases:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>E-commerce product pages</strong> with detailed product information</li>
              <li><strong>Blog posts and articles</strong> that need good SEO</li>
              <li><strong>Documentation sites</strong> with mostly static content</li>
              <li><strong>Landing pages</strong> that need to load quickly</li>
              <li><strong>Data dashboards</strong> with initial server-rendered views</li>
              <li><strong>User profiles</strong> with personalized but non-interactive content</li>
            </ul>
            
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded border-l-4 border-yellow-500">
              <h3 className="font-medium mb-1">Limitation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Server components cannot use browser-only APIs or React hooks like useState or useEffect. 
                For interactive features, you'll need to use client components alongside server components.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Server Data Example */}
          <div className="md:col-span-2 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Server Data Fetching Example</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This example demonstrates data being fetched on the server during rendering.
              The data is fetched before the page is sent to the client, resulting in fully
              rendered HTML with no client-side data fetching.
            </p>
            
            <Suspense fallback={<div className="p-12 text-center">Loading server data...</div>}>
              <ServerDataDisplay />
            </Suspense>
          </div>

          {/* Weather API Example */}
          <div className="md:col-span-2 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Real API Integration Example</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This example shows how to fetch data from a real external API during server rendering.
              The API call happens on the server, and the client receives the fully rendered result.
            </p>
            
            <Suspense fallback={<div className="p-12 text-center">Loading weather data...</div>}>
              <WeatherDisplay />
            </Suspense>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center text-gray-500 dark:text-gray-400">
          This page is server-rendered. View the page source to see the fully rendered HTML that was sent from the server.
        </p>
      </footer>
    </div>
  );
}
