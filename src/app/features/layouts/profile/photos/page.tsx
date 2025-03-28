/**
 * Profile Photos Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the profile-specific layout while showing different content.
 */
export default function ProfilePhotosPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the photos page within the profile section. Notice how the profile layout
        (header and sidebar) persists when navigating between different profile pages.
      </p>
      
      {/* Photo Albums */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Design Work', 'Travel', 'Inspiration'].map((album, index) => (
            <div 
              key={album} 
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{album}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {index * 12 + 24} photos
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Photos */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Photos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-500">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
        <h3 className="font-medium mb-2">Nested Layouts in Action</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This demonstration shows how Next.js nested layouts work in a real-world scenario:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>The root layout (app/layout.tsx) provides the base HTML structure</li>
          <li>The layouts feature layout (features/layouts/layout.tsx) adds the feature header and footer</li>
          <li>The profile layout (features/layouts/profile/layout.tsx) adds the profile header and sidebar</li>
          <li>This page (features/layouts/profile/photos/page.tsx) provides only the specific content</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          When you navigate between profile pages, only this content area changes, while the
          surrounding layouts remain mounted and maintain their state.
        </p>
      </div>
    </div>
  );
}
