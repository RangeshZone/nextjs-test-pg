/**
 * Settings Notifications Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the settings-specific layout while showing different content.
 */
export default function SettingsNotificationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notification Settings</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the notification settings page. Notice how the settings layout
        (with tabs) persists when navigating between different settings pages.
      </p>
      
      <div className="space-y-6">
        {/* Email Notifications */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Email Notifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  defaultChecked
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700 dark:text-gray-300">Comments</label>
                <p className="text-gray-500 dark:text-gray-400">Get notified when someone comments on your posts.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="mentions"
                  name="mentions"
                  type="checkbox"
                  defaultChecked
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="mentions" className="font-medium text-gray-700 dark:text-gray-300">Mentions</label>
                <p className="text-gray-500 dark:text-gray-400">Get notified when someone mentions you in a comment.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="follows"
                  name="follows"
                  type="checkbox"
                  defaultChecked
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="follows" className="font-medium text-gray-700 dark:text-gray-300">Follows</label>
                <p className="text-gray-500 dark:text-gray-400">Get notified when someone follows you.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="newsletter" className="font-medium text-gray-700 dark:text-gray-300">Newsletter</label>
                <p className="text-gray-500 dark:text-gray-400">Receive our weekly newsletter with the latest updates.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Push Notifications */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Push Notifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="push-everything" className="font-medium text-gray-700 dark:text-gray-300">All new messages</label>
                <p className="text-gray-500 dark:text-gray-400">Get notified for all new messages and activities.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  defaultChecked
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="push-email" className="font-medium text-gray-700 dark:text-gray-300">Same as email</label>
                <p className="text-gray-500 dark:text-gray-400">Get the same notifications as your email settings.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="push-nothing" className="font-medium text-gray-700 dark:text-gray-300">No push notifications</label>
                <p className="text-gray-500 dark:text-gray-400">Never be disturbed by push notifications.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notification Schedule */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Notification Schedule</h3>
          
          <div>
            <label htmlFor="quiet-hours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Quiet Hours
            </label>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Don't send notifications during these hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Time
                </label>
                <select
                  id="start-time"
                  name="start-time"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  defaultValue="22:00"
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                      {`${i.toString().padStart(2, '0')}:00`}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  End Time
                </label>
                <select
                  id="end-time"
                  name="end-time"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  defaultValue="07:00"
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                      {`${i.toString().padStart(2, '0')}:00`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
        <h3 className="font-medium mb-2">Nested Layout Pattern</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This settings section demonstrates a common UI pattern for settings pages:
          a tabbed interface that allows users to navigate between different categories of settings.
          The tabs are part of the settings layout and persist across all settings pages.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          In Next.js, this is implemented by creating a layout.tsx file in the settings directory
          that wraps all the settings pages with the tabbed navigation.
        </p>
      </div>
    </div>
  );
}
