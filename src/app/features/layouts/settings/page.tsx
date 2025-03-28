/**
 * Settings General Page
 * 
 * This is the main settings page that appears when navigating to /features/layouts/settings.
 * It demonstrates how it's wrapped by both the main layouts feature layout and the settings-specific layout.
 */
export default function SettingsGeneralPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">General Settings</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the general settings page. Notice how it's wrapped by the settings layout,
        which provides the tabbed navigation at the top.
      </p>
      
      <div className="space-y-6">
        {/* Language Settings */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Language & Region</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Language
              </label>
              <select
                id="language"
                name="language"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="ja">日本語</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Time Zone
              </label>
              <select
                id="timezone"
                name="timezone"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="utc"
              >
                <option value="utc">UTC (Coordinated Universal Time)</option>
                <option value="pst">PST (Pacific Standard Time)</option>
                <option value="est">EST (Eastern Standard Time)</option>
                <option value="gmt">GMT (Greenwich Mean Time)</option>
                <option value="cet">CET (Central European Time)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date Format
              </label>
              <select
                id="dateFormat"
                name="dateFormat"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="mdy"
              >
                <option value="mdy">MM/DD/YYYY</option>
                <option value="dmy">DD/MM/YYYY</option>
                <option value="ymd">YYYY/MM/DD</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Theme Settings */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Theme</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Color Theme
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    id="light"
                    name="theme"
                    type="radio"
                    defaultChecked
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="light" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Light
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="dark"
                    name="theme"
                    type="radio"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="dark" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Dark
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="system"
                    name="theme"
                    type="radio"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="system" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    System
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Font Size
              </label>
              <select
                id="fontSize"
                name="fontSize"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="medium"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">Extra Large</option>
              </select>
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
      
      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
        <h3 className="font-medium mb-2">Nested Layout Demonstration</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This page is nested within two layouts:
        </p>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>The main layouts feature layout (with the header and footer)</li>
          <li>The settings-specific layout (with the tabbed navigation)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Try navigating to the other settings tabs. Notice how the tabs persist, while only this main content area changes.
        </p>
      </div>
    </div>
  );
}
