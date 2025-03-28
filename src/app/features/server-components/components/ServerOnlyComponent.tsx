/**
 * Server-Only Component Example
 * 
 * This component demonstrates a pure server component that:
 * 1. Uses server-only APIs
 * 2. Renders completely on the server
 * 3. Sends only HTML to the client
 */

// This component is a Server Component by default (no 'use client' directive)
export default async function ServerOnlyComponent() {
  // Get server-side timestamp
  const serverTimestamp = new Date().toISOString();
  
  // Simulate a server-side delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Server Component Example</h4>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This component is rendered entirely on the server. The HTML is sent to the client,
          but no JavaScript for this component is included in the bundle.
        </p>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Server Timestamp:</p>
          <p className="font-mono text-sm">{serverTimestamp}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Server Environment:</p>
          <p className="font-mono text-sm">{process.env.NODE_ENV}</p>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
        <p>
          <strong>Note:</strong> This timestamp was generated on the server and will only update
          when the page is refreshed or revalidated on the server.
        </p>
      </div>
    </div>
  );
}
