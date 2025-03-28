/**
 * Dashboard Overview Page
 * 
 * This is the main dashboard page that appears when navigating to /features/layouts/dashboard.
 * It demonstrates how it's wrapped by both the main layouts feature layout and the dashboard-specific layout.
 */
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the main dashboard page. Notice how it's wrapped by the dashboard layout,
        which provides the sidebar navigation and header.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-2">Users</h3>
          <p className="text-3xl font-bold">1,254</p>
          <p className="text-sm text-green-600 dark:text-green-400">+12% from last week</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-2">Revenue</h3>
          <p className="text-3xl font-bold">$9,876</p>
          <p className="text-sm text-green-600 dark:text-green-400">+5% from last week</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-2">Conversion</h3>
          <p className="text-3xl font-bold">24%</p>
          <p className="text-sm text-red-600 dark:text-red-400">-2% from last week</p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center p-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                <span className="text-gray-500 dark:text-gray-400">{item}</span>
              </div>
              <div>
                <p className="font-medium">Activity {item}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item % 2 === 0 ? 'User action completed' : 'System event occurred'}
                </p>
              </div>
              <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                {item} hour{item !== 1 ? 's' : ''} ago
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
        <h3 className="font-medium mb-2">Nested Layout Demonstration</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This page is nested within two layouts:
        </p>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>The main layouts feature layout (with the header and footer)</li>
          <li>The dashboard-specific layout (with the sidebar and dashboard header)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Try navigating to the Analytics or Reports pages using the sidebar. Notice how the sidebar
          and dashboard header persist, while only this main content area changes.
        </p>
      </div>
    </div>
  );
}
