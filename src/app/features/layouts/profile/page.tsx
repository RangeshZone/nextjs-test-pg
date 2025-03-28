/**
 * Profile Overview Page
 * 
 * This is the main profile page that appears when navigating to /features/layouts/profile.
 * It demonstrates how it's wrapped by both the main layouts feature layout and the profile-specific layout.
 */
export default function ProfileOverviewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Overview</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the profile overview page. Notice how it's wrapped by the profile layout,
        which provides the profile header and sidebar navigation.
      </p>
      
      <div className="space-y-6">
        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">About</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Product designer with over 5 years of experience creating user-centered digital products.
            Passionate about solving complex problems through design thinking and collaboration.
            Currently working on improving user experiences for enterprise applications.
          </p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
              <p className="mt-1">San Francisco, CA</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Website</h4>
              <p className="mt-1">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  janedoe.design
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Joined</h4>
              <p className="mt-1">March 2020</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
              <p className="mt-1">jane.doe@example.com</p>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-bold">248</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Posts</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-bold">12.4k</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Followers</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-bold">142</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Following</p>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium text-lg mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                  <span className="text-gray-500 dark:text-gray-400">JD</span>
                </div>
                <div>
                  <p className="font-medium">
                    {item === 1 ? 'Published a new design' : item === 2 ? 'Commented on a post' : 'Liked a photo'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item} day{item !== 1 ? 's' : ''} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
        <h3 className="font-medium mb-2">Nested Layout Demonstration</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This page is nested within two layouts:
        </p>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>The main layouts feature layout (with the header and footer)</li>
          <li>The profile-specific layout (with the profile header and sidebar)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Try navigating to the Posts or Photos pages using the sidebar. Notice how the profile header
          and sidebar persist, while only this main content area changes.
        </p>
      </div>
    </div>
  );
}
