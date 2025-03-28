/**
 * Dashboard Reports Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the dashboard-specific layout while showing different content.
 */
export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the reports page within the dashboard section. Notice how the dashboard layout
        (sidebar and header) persists when navigating between different dashboard pages.
      </p>
      
      <div className="space-y-6">
        {/* Report items */}
        {[
          { id: 1, name: 'Monthly Performance Report', date: 'March 2025', status: 'Completed' },
          { id: 2, name: 'Quarterly Financial Summary', date: 'Q1 2025', status: 'In Progress' },
          { id: 3, name: 'User Engagement Analysis', date: 'February 2025', status: 'Completed' },
          { id: 4, name: 'Marketing Campaign Results', date: 'January 2025', status: 'Completed' },
          { id: 5, name: 'Annual Growth Projection', date: '2025', status: 'Pending' },
        ].map((report) => (
          <div 
            key={report.id} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-medium text-lg">{report.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Period: {report.date}</p>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  report.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                    : report.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                }`}>
                  {report.status}
                </span>
                <button className="ml-4 text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  View Report
                </button>
                <button className="ml-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
        <h3 className="font-medium mb-2">Nested Layouts in Action</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This demonstration shows how Next.js nested layouts work in a real-world scenario:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>The root layout (app/layout.tsx) provides the base HTML structure</li>
          <li>The layouts feature layout (features/layouts/layout.tsx) adds the feature header and footer</li>
          <li>The dashboard layout (features/layouts/dashboard/layout.tsx) adds the sidebar and dashboard header</li>
          <li>This page (features/layouts/dashboard/reports/page.tsx) provides only the specific content</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          When you navigate between dashboard pages, only this content area changes, while the
          surrounding layouts remain mounted and maintain their state.
        </p>
      </div>
    </div>
  );
}
