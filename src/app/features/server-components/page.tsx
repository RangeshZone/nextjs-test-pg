import Link from 'next/link';
import { Suspense } from 'react';
import ServerComponentExample from './components/ServerComponentExample';
import ServerDataFetching from './components/ServerDataFetching';
import ServerClientInterop from './components/ServerClientInterop';
import ComparisonDemo from './components/ComparisonDemo';

/**
 * Server Components Feature Demo Page
 * 
 * This page demonstrates React Server Components in Next.js.
 * Key characteristics of Server Components:
 * - No 'use client' directive, making this a server component by default
 * - Rendered entirely on the server
 * - Can access server-only resources like databases, file systems, etc.
 * - Can be used alongside client components for interactive features
 */
export default function ServerComponentsPage() {
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
          <h1 className="text-3xl font-bold mb-2">Server Components</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This page demonstrates React Server Components and how they work in Next.js.
          </p>
          
          {/* Documentation box */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">How Server Components Work</h2>
            <p className="mb-2">
              Server Components are a new paradigm in React that allows components to be rendered entirely on the server.
              In Next.js, all components are Server Components by default (unless marked with <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">&apos;use client&apos;</code>).
            </p>
            <p className="mb-2">
              With Server Components:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Components are rendered on the server and the HTML is sent to the client</li>
              <li>No JavaScript is sent to the client for the component itself</li>
              <li>You can access server-only resources like databases, file systems, and APIs directly</li>
              <li>You can keep sensitive information like API keys on the server</li>
              <li>You can import modules that only work on the server</li>
            </ul>
          </div>
          
          {/* When to use Server Components box */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-8 border-l-4 border-indigo-500">
            <h2 className="text-lg font-semibold mb-2">When to Use Server Components</h2>
            <p className="mb-3">
              Server Components are ideal for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Data Fetching</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Components that need to fetch data from databases or APIs without exposing credentials.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Static Content</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  UI elements that don&apos;t need interactivity, like headers, footers, or product details.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Large Dependencies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Components using large libraries that would be costly to send to the client.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">SEO-critical Content</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Content that needs to be indexed by search engines and visible in the initial HTML.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Server-only Operations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Components that need to access server-only resources like file systems or secure APIs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Performance-critical Pages</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pages where minimizing JavaScript bundle size and time-to-interactive is crucial.
                </p>
              </div>
            </div>
            
            <h3 className="font-medium mt-4 mb-2">Real-world Use Cases:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Product listings</strong> with data fetched from a CMS or database</li>
              <li><strong>Blog posts</strong> with content rendered from markdown files</li>
              <li><strong>Documentation sites</strong> with server-rendered content</li>
              <li><strong>E-commerce product details</strong> with pricing and inventory information</li>
              <li><strong>Dashboard data displays</strong> with metrics from backend systems</li>
            </ul>
            
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded border-l-4 border-yellow-500">
              <h3 className="font-medium mb-1">Limitation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Server Components cannot use browser-only APIs, React hooks like useState or useEffect, 
                or event handlers like onClick. For interactive features, you&apos;ll need to use Client Components.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Basic Server Component Example */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Basic Server Component</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This is a basic server component that runs entirely on the server. It has access to server-side
              resources and doesn&apos;t send any JavaScript to the client.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <Suspense fallback={<div className="p-4 text-center">Loading server component...</div>}>
                <ServerComponentExample />
              </Suspense>
            </div>
          </div>
          
          {/* Server Data Fetching Example */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Server Data Fetching</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This server component fetches data directly on the server without exposing API keys or
              fetch logic to the client.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <Suspense fallback={<div className="p-4 text-center">Loading data from server...</div>}>
                <ServerDataFetching />
              </Suspense>
            </div>
          </div>
          
          {/* Server and Client Component Interoperability */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Server and Client Component Interoperability</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This example demonstrates how server and client components can work together. The server component
              fetches and prepares data, while the client component provides interactivity.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <Suspense fallback={<div className="p-4 text-center">Loading interop example...</div>}>
                <ServerClientInterop />
              </Suspense>
            </div>
          </div>
          
          {/* Comparison Demo */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Server vs. Client Components Comparison</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This example shows a side-by-side comparison of server and client components, highlighting
              the differences in behavior and capabilities.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <Suspense fallback={<div className="p-4 text-center">Loading comparison...</div>}>
                <ComparisonDemo />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center text-gray-500 dark:text-gray-400">
          View the page source to see that the server components are fully rendered as HTML with no JavaScript.
        </p>
      </footer>
    </div>
  );
}
