/**
 * Server Data Fetching Component
 * 
 * This server component demonstrates:
 * 1. Fetching data directly on the server
 * 2. Keeping API keys and fetch logic on the server
 * 3. Sending only the rendered HTML to the client
 */

// Define TypeScript interfaces for the data
interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

// This component is a Server Component by default (no 'use client' directive)
export default async function ServerDataFetching() {
  // Fetch data from a public API
  // In a real app, you could use environment variables for API keys that stay on the server
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    // This option controls how frequently the data is revalidated
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  // Handle potential fetch errors
  if (!response.ok) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
        <h3 className="font-medium text-red-800 dark:text-red-400">Error Fetching Data</h3>
        <p className="text-sm text-red-600 dark:text-red-300">
          Failed to fetch data: {response.status} {response.statusText}
        </p>
      </div>
    );
  }
  
  // Parse the JSON response
  const users: User[] = await response.json();
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-2">User Data (Fetched on Server)</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Company
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {users.slice(0, 5).map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.company.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.address.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded text-sm text-gray-600 dark:text-gray-400">
        <p className="font-medium mb-1">Server Data Fetching Note</p>
        <p>
          This data was fetched directly on the server during rendering. The API call, data processing,
          and any API keys remain on the server. Only the final rendered HTML is sent to the client.
        </p>
        <p className="mt-2">
          In a production app, you could access databases directly or use private API keys without
          exposing them to the client.
        </p>
      </div>
      
      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm text-gray-600 dark:text-gray-400 border-l-4 border-yellow-500">
        <p className="font-medium">Data Revalidation</p>
        <p>
          This component uses <code className="bg-yellow-100 dark:bg-yellow-900 px-1 py-0.5 rounded">next: {'{'} revalidate: 3600 {'}'}</code> to cache the data for 1 hour.
          After that time, the data will be refreshed on the next request, ensuring your data stays fresh
          without unnecessary API calls.
        </p>
      </div>
    </div>
  );
}
