import Link from 'next/link';
import { Suspense } from 'react';
import FormWithServerAction from './components/FormWithServerAction';
import ServerMutationExample from './components/ServerMutationExample';
import OptimisticUpdateExample from './components/OptimisticUpdateExample';
import FormValidationExample from './components/FormValidationExample';

/**
 * Server Actions Feature Demo Page
 * 
 * This page demonstrates React Server Actions in Next.js.
 * Key characteristics of Server Actions:
 * - Allows you to run async functions on the server from client components
 * - Eliminates the need for custom API endpoints
 * - Provides progressive enhancement with native form support
 * - Enables direct database/backend access from form submissions
 */
export default function ServerActionsPage() {
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
          <h1 className="text-3xl font-bold mb-2">Server Actions</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This page demonstrates React Server Actions and how they work in Next.js.
          </p>
          
          {/* Documentation box */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">How Server Actions Work</h2>
            <p className="mb-2">
              Server Actions are asynchronous functions that execute on the server but can be invoked from client components.
              They provide a way to mutate data or perform server-side operations without creating custom API endpoints.
            </p>
            <p className="mb-2">
              With Server Actions:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>You can directly mutate your database from form submissions</li>
              <li>You get progressive enhancement with native form support</li>
              <li>You can keep sensitive operations and credentials on the server</li>
              <li>You can revalidate cache or redirect users after mutations</li>
              <li>You can handle form validation on the server</li>
            </ul>
          </div>
          
          {/* When to use Server Actions box */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-8 border-l-4 border-indigo-500">
            <h2 className="text-lg font-semibold mb-2">When to Use Server Actions</h2>
            <p className="mb-3">
              Server Actions are ideal for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Form Submissions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Processing form data directly on the server without custom API routes.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Data Mutations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creating, updating, or deleting data in your database or external services.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Authentication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Handling login, signup, and other secure operations with server-side validation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">File Uploads</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Processing and storing uploaded files on the server.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Progressive Enhancement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building forms that work even without JavaScript enabled in the browser.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                <h3 className="font-medium mb-1">Secure Operations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Performing operations that require API keys or sensitive credentials.
                </p>
              </div>
            </div>
          </div>
          
          {/* Implementation details box */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-2">Implementation Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Defining a Server Action</h3>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>{`// In a Server Component or separate file
'use server';

export async function myServerAction(formData: FormData) {
  // Server-side code here
  // Access database, external APIs, etc.
  // Return data to the client if needed
}`}</code>
                </pre>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Using with Forms</h3>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                  <code>{`// In a Client Component
'use client';

import { myServerAction } from './actions';

export default function MyForm() {
  return (
    <form action={myServerAction}>
      <input name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}`}</code>
                </pre>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                <h3 className="font-medium mb-1">Limitation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Server Actions must be defined in files with the &apos;use server&apos; directive at the top,
                  or as individual functions marked with &apos;use server&apos;. They can&apos;t use browser-only APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto space-y-16">
        {/* Basic Form with Server Action */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Form with Server Action</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example demonstrates a simple form that uses a Server Action to process the submission.
            The form works with and without JavaScript enabled.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <Suspense fallback={<div className="p-4 text-center">Loading form...</div>}>
              <FormWithServerAction />
            </Suspense>
          </div>
        </section>
        
        {/* Server Mutation Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Server Mutation Example</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example shows how to use Server Actions to mutate data and revalidate the cache.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <Suspense fallback={<div className="p-4 text-center">Loading example...</div>}>
              <ServerMutationExample />
            </Suspense>
          </div>
        </section>
        
        {/* Optimistic Updates */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Optimistic Updates</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example demonstrates how to implement optimistic updates with Server Actions
            using the useOptimistic hook from React.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <Suspense fallback={<div className="p-4 text-center">Loading example...</div>}>
              <OptimisticUpdateExample />
            </Suspense>
          </div>
        </section>
        
        {/* Form Validation */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Form Validation with Server Actions</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This example shows how to implement server-side form validation with Server Actions.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <Suspense fallback={<div className="p-4 text-center">Loading example...</div>}>
              <FormValidationExample />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
