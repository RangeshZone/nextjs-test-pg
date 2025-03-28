/**
 * Dashboard Analytics Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the dashboard-specific layout while showing different content.
 */
export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the analytics page within the dashboard section. Notice how the dashboard layout
        (sidebar and header) persists when navigating from the overview page to here.
      </p>
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
        <h2 className="font-semibold text-lg mb-4">Performance Metrics</h2>
        <div className="space-y-4">
          {/* Simulated analytics metrics */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Page Views</span>
              <span className="text-sm font-medium">78%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Bounce Rate</span>
              <span className="text-sm font-medium">32%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Session Duration</span>
              <span className="text-sm font-medium">65%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Conversion Rate</span>
              <span className="text-sm font-medium">24%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-3">Traffic Sources</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Direct</span>
              <span className="text-sm font-medium">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Organic Search</span>
              <span className="text-sm font-medium">28%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Referral</span>
              <span className="text-sm font-medium">22%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Social Media</span>
              <span className="text-sm font-medium">15%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-3">Device Breakdown</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Mobile</span>
              <span className="text-sm font-medium">58%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Desktop</span>
              <span className="text-sm font-medium">32%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tablet</span>
              <span className="text-sm font-medium">10%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-medium mb-2">Layout State Persistence</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Notice that the notification count in the dashboard header persists as you navigate between pages.
          This demonstrates how layouts maintain their state even when the content changes.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Try clicking the "Dismiss all" button and then navigating to another dashboard page.
          You'll see that the notification count remains at zero across all pages.
        </p>
      </div>
    </div>
  );
}
