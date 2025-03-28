'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Client-side Rendering (CSR) Demo Page
 * 
 * This page demonstrates client-side rendering in Next.js.
 * Key characteristics of CSR:
 * - The 'use client' directive at the top marks this as a client component
 * - All React hooks (useState, useEffect) run in the browser
 * - Interactive elements work without server roundtrips
 * - Initial page load may show a loading state before hydration
 */
export default function CSRDemo() {
  // Client-side state for counter
  const [count, setCount] = useState(0);
  
  // Client-side state for current time
  const [currentTime, setCurrentTime] = useState('');
  
  // Client-side state for a list of items
  const [items, setItems] = useState<string[]>([]);
  
  // Client-side state for new item input
  const [newItem, setNewItem] = useState('');

  // Client-side effect that runs after component mounts
  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    // Initial time set
    setCurrentTime(new Date().toLocaleTimeString());
    
    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Client-side handler for adding a new item
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Client-side handler for removing an item
  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

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
          <h1 className="text-3xl font-bold mb-2">Client-side Rendering (CSR)</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This page demonstrates client-side rendering with React components that run in the browser.
          </p>
          
          {/* Documentation box */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">How CSR Works</h2>
            <p className="mb-2">
              Client-side rendering in Next.js is enabled by adding the <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">'use client'</code> directive 
              at the top of your component file. This tells Next.js that this component and all its children should be rendered on the client.
            </p>
            <p className="mb-2">
              With CSR:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Components are hydrated in the browser</li>
              <li>State is managed on the client</li>
              <li>User interactions are handled without server roundtrips</li>
              <li>Effects run after the component mounts in the browser</li>
            </ul>
          </div>
          
          {/* When to use Client Components box */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
            <h2 className="text-lg font-semibold mb-2">When to Use Client Components</h2>
            <p className="mb-3">
              Use client components when your feature needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Interactive UI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Forms, buttons, dropdowns, and any elements that respond to user input.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Browser APIs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Access to browser-specific APIs like localStorage, geolocation, or window events.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Event Listeners</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Components that need to listen to browser events like scroll, resize, or keyboard inputs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Custom Hooks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  When using React hooks like useState, useEffect, useReducer, or custom hooks.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Third-party Libraries</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Integration with libraries that manipulate the DOM or require client-side execution.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Real-time Updates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Features requiring WebSockets, polling, or other real-time data synchronization.
                </p>
              </div>
            </div>
            
            <h3 className="font-medium mt-4 mb-2">Real-world Use Cases:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Interactive dashboards</strong> with charts, graphs, and filtering options</li>
              <li><strong>Shopping carts</strong> that update in real-time as users add/remove items</li>
              <li><strong>Media players</strong> that need to interact with audio/video APIs</li>
              <li><strong>Drawing tools</strong> or editors that require canvas manipulation</li>
              <li><strong>Form wizards</strong> with validation and conditional fields</li>
              <li><strong>Interactive maps</strong> with zoom, pan, and click events</li>
            </ul>
            
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded border-l-4 border-yellow-500">
              <h3 className="font-medium mb-1">Performance Consideration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Client components increase the JavaScript bundle size sent to the browser. For optimal performance, 
                use client components only when necessary and keep server components as your default choice when building with Next.js.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Counter Example */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This counter uses <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">useState</code> to manage state on the client.
            </p>
            <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <button 
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <div className="px-6 py-2 bg-white dark:bg-gray-900 font-bold">
                {count}
              </div>
              <button 
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>
          </div>

          {/* Clock Example */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Live Clock Example</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This clock uses <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">useEffect</code> to update the time every second.
            </p>
            <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-mono font-bold">
                {currentTime}
              </div>
            </div>
          </div>

          {/* Todo List Example */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Interactive Todo List</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This todo list demonstrates more complex state management with arrays and user input.
            </p>
            
            <div className="flex mb-4">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a new item"
                className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
              />
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              {items.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  No items yet. Add some above!
                </p>
              ) : (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between items-center">
                      <span>{item}</span>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-center text-gray-500 dark:text-gray-400">
          This component is entirely client-rendered. Check the network tab to see that no server requests are made when interacting with the components.
        </p>
      </footer>
    </div>
  );
}
