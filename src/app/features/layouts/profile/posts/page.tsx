/**
 * Profile Posts Page
 * 
 * This page demonstrates how it's wrapped by both the main layouts feature layout
 * and the profile-specific layout while showing different content.
 */
export default function ProfilePostsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This is the posts page within the profile section. Notice how the profile layout
        (header and sidebar) persists when navigating from the overview page to here.
      </p>
      
      <div className="space-y-6">
        {/* Posts list */}
        {[1, 2, 3, 4, 5].map((post) => (
          <div 
            key={post} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold mr-3">
                JD
              </div>
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {post} week{post !== 1 ? 's' : ''} ago
                </p>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mb-2">
              {post === 1 ? 'Redesigning the user dashboard' : 
               post === 2 ? 'The importance of user research' : 
               post === 3 ? 'Color theory in UI design' :
               post === 4 ? 'Accessibility best practices' :
               'Designing for mobile first'}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post === 1 ? 'I recently completed a redesign of our product dashboard to improve usability and information hierarchy...' : 
               post === 2 ? 'User research is the foundation of any successful design. Here\'s how we approach it at our company...' : 
               post === 3 ? 'Understanding color theory can dramatically improve your UI designs. Let\'s explore some key principles...' :
               post === 4 ? 'Making your products accessible isn\'t just the right thing to do—it\'s good business. Here\'s how to start...' :
               'With mobile usage continuing to grow, designing for mobile first is more important than ever. Here\'s my approach...'}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-gray-700 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>{42 + post * 7}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-700 dark:hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>{12 + post * 3}</span>
                </button>
              </div>
              <button className="hover:text-gray-700 dark:hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-medium mb-2">Layout State Persistence</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Notice that the Follow/Following button state in the profile header persists as you navigate between pages.
          This demonstrates how layouts maintain their state even when the content changes.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Try clicking the Follow/Following button and then navigating to another profile page.
          You'll see that the button state remains the same across all pages.
        </p>
      </div>
    </div>
  );
}
