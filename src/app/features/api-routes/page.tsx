import Link from 'next/link';
import ApiBasicsExample from './components/ApiBasicsExample';
import ApiDataFetchingExample from './components/ApiDataFetchingExample';
import ApiFormHandlingExample from './components/ApiFormHandlingExample';
import ApiAuthExample from './components/ApiAuthExample';

/**
 * API Routes Feature Demo Page
 * 
 * This page demonstrates Next.js API Routes (Route Handlers in App Router).
 * Key characteristics of API Routes:
 * - Serverless functions that run on the backend
 * - Perfect for building APIs, handling form submissions, or integrating with external services
 * - Isolated from the frontend code but part of the same codebase
 * - Support for various HTTP methods (GET, POST, PUT, DELETE, etc.)
 */
export default function ApiRoutesPage() {
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
          <h1 className="text-3xl font-bold mb-2">API Routes</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This page demonstrates Next.js API Routes (Route Handlers in App Router) and how they work.
          </p>
          
          {/* Documentation box */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">How API Routes Work</h2>
            <p className="mb-2">
              API Routes in Next.js allow you to create serverless API endpoints as part of your Next.js application.
              In the App Router, these are called Route Handlers and are defined in the app directory.
            </p>
            <p className="mb-2">
              With API Routes:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>You can create serverless functions that run on the backend</li>
              <li>You can handle various HTTP methods (GET, POST, PUT, DELETE, etc.)</li>
              <li>You can access databases, external APIs, and server-only resources</li>
              <li>You can keep sensitive operations and credentials on the server</li>
              <li>You can build full-stack applications without a separate backend</li>
            </ul>
          </div>
          
          {/* When to use API Routes box */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-8 border-l-4 border-indigo-500">
            <h2 className="text-lg font-semibold mb-2">When to Use API Routes</h2>
            <p className="mb-3">
              API Routes are ideal for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Backend APIs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creating REST or GraphQL APIs for your frontend or third-party clients.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Form Handling</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Processing form submissions and saving data to a database.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Authentication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implementing authentication flows and protecting routes.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">External Services</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Integrating with third-party APIs while keeping API keys secure.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Webhooks</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receiving and processing webhook events from external services.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Proxy Requests</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Proxying requests to other APIs to avoid CORS issues or add authentication.
                </p>
              </div>
            </div>
          </div>
          
          {/* Implementation details box */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">Implementation Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Creating a Route Handler</h3>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>{`// app/api/hello/route.ts
export async function GET(request: Request) {
  return Response.json({ message: 'Hello, world!' });
}

export async function POST(request: Request) {
  const data = await request.json();
  // Process the data
  return Response.json({ success: true, data });
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Dynamic Routes</h3>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>{`// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  // Fetch user with the given id
  return Response.json({ id, name: 'John Doe' });
}`}</code>
                </pre>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                <h3 className="font-medium mb-1">Limitation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  API Routes run on the server only and cannot be imported into client components.
                  They are accessed via HTTP requests like any other API endpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto space-y-16">
        {/* API Basics Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">API Basics</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example demonstrates the basic usage of API Routes with different HTTP methods.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <ApiBasicsExample />
          </div>
        </section>
        
        {/* API Data Fetching Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Data Fetching from API</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example shows how to fetch data from an API route and display it in a component.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <ApiDataFetchingExample />
          </div>
        </section>
        
        {/* API Form Handling Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Form Handling with API Routes</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example demonstrates how to handle form submissions using API Routes.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <ApiFormHandlingExample />
          </div>
        </section>
        
        {/* API Authentication Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">API Authentication</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example shows how to implement basic authentication for API Routes.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <ApiAuthExample />
          </div>
        </section>
      </main>
    </div>
  );
}
