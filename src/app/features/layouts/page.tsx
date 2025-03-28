import Link from 'next/link';

/**
 * Layouts Feature Main Page
 * 
 * This page serves as an introduction to the nested layouts feature
 * and provides navigation to the different sections that demonstrate
 * how nested layouts work in Next.js.
 */
export default function LayoutsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Nested Layouts</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
          This feature demonstrates how to use nested layouts in Next.js to create shared UI elements
          across multiple pages while maintaining state and minimizing re-renders.
        </p>
        
        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-8 border-l-4 border-purple-500">
          <h2 className="text-lg font-semibold mb-2">When to Use Nested Layouts</h2>
          <p className="mb-3 text-gray-600 dark:text-gray-400">
            Nested layouts are ideal for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h3 className="font-medium mb-1">Complex Navigation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Applications with multiple levels of navigation, such as dashboards with sub-sections.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h3 className="font-medium mb-1">Persistent UI Elements</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                When certain UI elements need to stay on screen as users navigate between related pages.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h3 className="font-medium mb-1">Shared Context</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                When a group of pages share the same data context or state management.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h3 className="font-medium mb-1">Section-specific Styling</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                When different sections of your app need their own visual treatment or layout rules.
              </p>
            </div>
          </div>
          
          <h3 className="font-medium mt-4 mb-2">Real-world Use Cases:</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 dark:text-gray-400">
            <li><strong>Admin dashboards</strong> with different sections for users, content, and settings</li>
            <li><strong>E-commerce sites</strong> with category-specific layouts</li>
            <li><strong>Documentation websites</strong> with section-specific navigation</li>
            <li><strong>Social media platforms</strong> with profile areas, feeds, and messaging</li>
            <li><strong>Multi-step forms or wizards</strong> that maintain state across steps</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Demo Sections</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Explore the different sections below to see nested layouts in action. Notice how the UI
        elements persist as you navigate between pages within each section.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dashboard Section Card */}
        <Link
          href="/features/layouts/dashboard"
          className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A dashboard layout with a sidebar navigation and multiple sub-pages.
          </p>
          <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
        </Link>
        
        {/* Settings Section Card */}
        <Link
          href="/features/layouts/settings"
          className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Settings</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A settings area with tabs for different configuration sections.
          </p>
          <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
        </Link>
        
        {/* Profile Section Card */}
        <Link
          href="/features/layouts/profile"
          className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A user profile with different sections for personal info, activity, and preferences.
          </p>
          <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
        </Link>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="font-medium mb-2">Implementation Notes</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          In Next.js, layouts are created by adding a <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">layout.tsx</code> file 
          to a directory. The layout wraps all pages and nested layouts in that directory and its subdirectories.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This demo uses multiple levels of layouts to demonstrate the nesting capability:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-600 dark:text-gray-400 mt-2">
          <li>Root layout (app/layout.tsx) - Applies to the entire application</li>
          <li>Layouts feature layout (features/layouts/layout.tsx) - Applies to all pages in the layouts feature</li>
          <li>Section-specific layouts - Apply to specific sections like dashboard, settings, and profile</li>
        </ul>
      </div>
    </div>
  );
}
