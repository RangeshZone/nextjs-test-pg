/**
 * Basic Server Component Example
 * 
 * This is a server component that demonstrates:
 * 1. Server-side rendering with no client JavaScript
 * 2. Access to server-only resources (Node.js APIs)
 * 3. Async/await pattern in server components
 */

// Import a Node.js module that only works on the server
import { readFile } from 'fs/promises';
import path from 'path';

// This component is a Server Component by default (no 'use client' directive)
export default async function ServerComponentExample() {
  // Server-side operations that can't run in the browser
  const serverInfo = {
    nodeVersion: process.version,
    platform: process.platform,
    serverTime: new Date().toISOString(),
    memoryUsage: Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100,
  };
  
  // Access the file system (server-only operation)
  let packageInfo;
  try {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJsonContent = await readFile(packageJsonPath, 'utf8');
    packageInfo = JSON.parse(packageJsonContent);
  } catch {
    packageInfo = { error: 'Could not read package.json' };
  }
  
  // Simulate some server processing delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-2">Server Environment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="text-sm font-medium mb-1">Node.js Version</p>
            <p className="font-mono text-gray-600 dark:text-gray-300">{serverInfo.nodeVersion}</p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="text-sm font-medium mb-1">Platform</p>
            <p className="font-mono text-gray-600 dark:text-gray-300">{serverInfo.platform}</p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="text-sm font-medium mb-1">Server Time</p>
            <p className="font-mono text-gray-600 dark:text-gray-300">{serverInfo.serverTime}</p>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <p className="text-sm font-medium mb-1">Memory Usage</p>
            <p className="font-mono text-gray-600 dark:text-gray-300">{serverInfo.memoryUsage} MB</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Package.json Information</h3>
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-sm font-medium mb-1">Project Name</p>
          <p className="font-mono text-gray-600 dark:text-gray-300">{packageInfo.name}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded mt-2">
          <p className="text-sm font-medium mb-1">Dependencies</p>
          <div className="font-mono text-xs text-gray-600 dark:text-gray-300 max-h-32 overflow-y-auto">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(packageInfo.dependencies, null, 2)}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded text-sm text-gray-600 dark:text-gray-400 mt-2">
        <p className="font-medium mb-1">Server Component Note</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This component demonstrates how server components can access server-side APIs
          and process information that aren&apos;t available in the browser. No JavaScript for this component
          is sent to the client, resulting in faster page loads and better performance.
        </p>
      </div>
    </div>
  );
}
