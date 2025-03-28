/**
 * Settings Security Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the settings-specific layout while showing different content.
 */
export default function SettingsSecurityPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Security Settings</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the security settings page. Notice how the settings layout
        (with tabs) persists when navigating between different settings pages.
      </p>
      
      <div className="space-y-6">
        {/* Password Section */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Password</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Current Password
              </label>
              <input
                type="password"
                name="current-password"
                id="current-password"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                New Password
              </label>
              <input
                type="password"
                name="new-password"
                id="new-password"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                placeholder="••••••••"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
        
        {/* Two-Factor Authentication */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-lg">Two-Factor Authentication</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
              Not Enabled
            </span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Add an extra layer of security to your account by requiring both your password and a verification code from your mobile phone.
          </p>
          
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enable Two-Factor Authentication
          </button>
        </div>
        
        {/* Login Sessions */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Active Sessions</h3>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Current Session</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mac OS • Chrome • San Francisco, CA
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Started: March 27, 2025 at 11:30 AM
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  Active Now
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Mobile Session</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    iOS • Safari • San Francisco, CA
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Last active: March 26, 2025 at 8:15 PM
                  </p>
                </div>
                <button
                  type="button"
                  className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Revoke
                </button>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Tablet Session</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    iPadOS • Safari • San Francisco, CA
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Last active: March 25, 2025 at 3:45 PM
                  </p>
                </div>
                <button
                  type="button"
                  className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Revoke
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium"
            >
              Sign Out of All Other Sessions
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
        <h3 className="font-medium mb-2">Layout State Persistence</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This settings section demonstrates how Next.js nested layouts maintain their state and UI
          across route changes. The active tab is highlighted based on the current URL path, and the
          entire settings layout persists as you navigate between different settings pages.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          This is particularly useful for complex applications where different sections need their own
          navigation patterns while still maintaining a consistent overall structure.
        </p>
      </div>
    </div>
  );
}
