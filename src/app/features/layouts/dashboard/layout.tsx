'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * Dashboard Section Layout
 * 
 * This layout is nested within the main layouts feature layout and provides
 * a sidebar navigation specific to the dashboard section. It demonstrates
 * how layouts can be nested and how they maintain state across route changes.
 */
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This state is maintained across route changes within the dashboard section
  const [notificationCount, setNotificationCount] = useState(3);
  const pathname = usePathname();
  
  // Navigation items for the dashboard sidebar
  const navItems = [
    { name: 'Overview', path: '/features/layouts/dashboard' },
    { name: 'Analytics', path: '/features/layouts/dashboard/analytics' },
    { name: 'Reports', path: '/features/layouts/dashboard/reports' },
  ];
  
  // Function to dismiss all notifications
  const dismissNotifications = () => {
    setNotificationCount(0);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Dashboard header with title and notification count */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center">
            <div className="relative mr-4">
              <span className="inline-flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {notificationCount}
                  </span>
                )}
              </span>
            </div>
            {notificationCount > 0 && (
              <button 
                onClick={dismissNotifications}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Dismiss all
              </button>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          This header is part of the dashboard layout and persists across all dashboard pages.
          The notification count state is maintained as you navigate between pages.
        </p>
      </div>
      
      {/* Dashboard content with sidebar and main area */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar navigation */}
        <div className="w-full md:w-64 bg-gray-50 dark:bg-gray-800 p-4 md:border-r border-gray-200 dark:border-gray-700">
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
              This sidebar is part of the dashboard layout. The active link is highlighted based on the current route,
              and the notification count state is preserved as you navigate between dashboard pages.
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
