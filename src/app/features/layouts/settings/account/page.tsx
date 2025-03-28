/**
 * Settings Account Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the settings-specific layout while showing different content.
 */
export default function SettingsAccountPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the account settings page. Notice how the settings layout
        (with tabs) persists when navigating from the general settings page to here.
      </p>
      
      <div className="space-y-6">
        {/* Profile Information */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Profile Information</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue="Jane"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  defaultValue="Doe"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="jane.doe@example.com"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                defaultValue="Product designer at Example Inc. I enjoy creating user-friendly interfaces and exploring new design trends."
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Brief description for your profile.
              </p>
            </div>
          </div>
        </div>
        
        {/* Account Management */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Account Management</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-medium">Download Your Data</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Download a copy of all your data from our servers.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Download
              </button>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-medium">Delete Account</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Permanently delete your account and all associated data.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-red-300 dark:border-red-700 shadow-sm text-sm font-medium rounded-md text-red-700 dark:text-red-400 bg-white dark:bg-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
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
      
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-medium mb-2">Layout Navigation</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This demonstration shows how the settings layout uses tabs for navigation instead of a sidebar.
          Different layout patterns can be used for different sections of your application, while still
          maintaining the nested layout structure.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Try navigating to the other tabs to see how the layout persists while the content changes.
        </p>
      </div>
    </div>
  );
}
