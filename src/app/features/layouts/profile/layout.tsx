'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * Profile Section Layout
 * 
 * This layout is nested within the main layouts feature layout and provides
 * a profile header and sidebar specific to the profile section. It demonstrates
 * a third layout pattern for nested layouts in Next.js.
 */
export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // State for the profile that persists across route changes
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Navigation items for the profile sidebar
  const navItems = [
    { name: 'Overview', path: '/features/layouts/profile' },
    { name: 'Posts', path: '/features/layouts/profile/posts' },
    { name: 'Photos', path: '/features/layouts/profile/photos' },
  ];
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Profile header with cover image and avatar */}
      <div className="relative">
        {/* Cover image */}
        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        
        {/* Profile info with avatar */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end">
              {/* Avatar */}
              <div className="absolute -mt-16 border-4 border-white dark:border-gray-900 rounded-full overflow-hidden h-24 w-24">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 h-full w-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
              </div>
              
              {/* Profile name and info */}
              <div className="ml-28 mb-1">
                <h2 className="text-xl font-bold">Jane Doe</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
              </div>
            </div>
            
            {/* Follow button with state */}
            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  isFollowing
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-2xl">
            This profile header is part of the profile layout and persists across all profile pages.
            The follow button state is maintained as you navigate between profile sections.
          </p>
        </div>
      </div>
      
      {/* Profile content with sidebar and main area */}
      <div className="flex flex-col md:flex-row border-t border-gray-200 dark:border-gray-700">
        {/* Sidebar navigation */}
        <div className="w-full md:w-64 p-4 md:border-r border-gray-200 dark:border-gray-700">
          <nav>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 rounded-md ${
                      pathname === item.path
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-xs text-gray-600 dark:text-gray-400">
            <p className="font-medium mb-1">Layout State Demo</p>
            <p>
              Try clicking the Follow/Following button and then navigating between profile pages.
              You'll see that the button state is preserved across route changes.
            </p>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
