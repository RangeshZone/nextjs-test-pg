import Link from 'next/link';

/**
 * Root Layout for the Nested Layouts Feature
 * 
 * This layout provides the outer structure for all pages within the layouts feature.
 * It demonstrates how Next.js allows layouts to be nested and shared across routes.
 * 
 * Key characteristics:
 * - Layouts wrap child pages and other layouts
 * - They persist across route changes within their segment
 * - They maintain state across navigations
 * - They avoid re-rendering when only the child content changes
 */
export default function LayoutsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header with navigation back to main page */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link 
                href="/" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← Back to Features
              </Link>
              <h1 className="text-2xl font-bold mt-1">Nested Layouts Demo</h1>
            </div>
          </div>
        </div>
      </header>
      
      {/* Documentation section */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">How Nested Layouts Work</h2>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Nested layouts in Next.js allow you to create UI that is shared across multiple pages.
              Each layout wraps the content of its children, and layouts can be nested to any depth.
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Key benefits of nested layouts:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Shared UI persists across route changes</li>
              <li>State is preserved within a layout even when child pages change</li>
              <li>Only the changing parts of the page are re-rendered</li>
              <li>Layouts can fetch their own data independently of child components</li>
              <li>Nested layouts create a hierarchy that matches your URL structure</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Main content area that renders child routes */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            This footer is part of the root layout and appears on all pages in the layouts feature.
          </p>
        </div>
      </footer>
    </div>
  );
}
