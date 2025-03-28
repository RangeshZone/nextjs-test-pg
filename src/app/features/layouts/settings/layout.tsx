'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Settings Section Layout
 * 
 * This layout is nested within the main layouts feature layout and provides
 * a tabbed navigation specific to the settings section. It demonstrates
 * how layouts can be nested and how they maintain state across route changes.
 */
export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Navigation items for the settings tabs
  const navItems = [
    { name: 'General', path: '/features/layouts/settings' },
    { name: 'Account', path: '/features/layouts/settings/account' },
    { name: 'Notifications', path: '/features/layouts/settings/notifications' },
    { name: 'Security', path: '/features/layouts/settings/security' },
  ];
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Settings header with title */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <h2 className="text-xl font-semibold">Settings</h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          This header is part of the settings layout and persists across all settings pages.
        </p>
      </div>
      
      {/* Tabs navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`inline-block py-4 px-6 text-sm font-medium border-b-2 ${
                pathname === item.path
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Main content area */}
      <div className="p-6">
        {children}
        
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-gray-600 dark:text-gray-400">
          <p className="font-medium mb-1">Nested Layout Demo - Settings Section</p>
          <p>
            This settings section demonstrates another type of nested layout with tabbed navigation.
            The tabs at the top are part of the settings layout and persist as you navigate between
            different settings pages.
          </p>
        </div>
      </div>
    </div>
  );
}
