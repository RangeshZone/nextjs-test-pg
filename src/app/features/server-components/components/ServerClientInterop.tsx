/**
 * Server and Client Component Interoperability Example
 * 
 * This component demonstrates:
 * 1. How server components can pass data to client components
 * 2. The "Server Components in Client Components in Server Components" pattern
 * 3. Separation of concerns: data fetching on server, interactivity on client
 */

// Import a client component (see the 'use client' directive in that file)
import InteractiveClientComponent from './InteractiveClientComponent';

// Define the product type for TypeScript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  inStock: boolean;
  imageUrl: string;
}

// This is a server component that fetches data and passes it to a client component
export default async function ServerClientInterop() {
  // Fetch data on the server - this could be from a database, API, etc.
  const products = await fetchProducts();
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-2">Server-Client Interoperability</h3>
      
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How This Works</p>
        <p>
          This example demonstrates the recommended pattern for Next.js applications:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Server components fetch and prepare data</li>
          <li>This data is passed as props to client components</li>
          <li>Client components handle interactivity and state</li>
        </ul>
        <p className="mt-2">
          This gives you the best of both worlds: server-side data fetching with client-side interactivity.
        </p>
      </div>
      
      {/* Pass the server-fetched data to the client component */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <InteractiveClientComponent products={products} />
      </div>
    </div>
  );
}

// Mock function to simulate fetching products from a database or API
async function fetchProducts(): Promise<Product[]> {
  // In a real app, this would be a database query or API call
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  
  return [
    {
      id: 1,
      name: "Ergonomic Desk Chair",
      description: "Comfortable office chair with lumbar support and adjustable height.",
      price: 249.99,
      category: "Furniture",
      rating: 4.5,
      inStock: true,
      imageUrl: "https://placehold.co/100x100/e2e8f0/1e293b?text=Chair"
    },
    {
      id: 2,
      name: "Wireless Noise-Cancelling Headphones",
      description: "Premium headphones with active noise cancellation and 30-hour battery life.",
      price: 299.99,
      category: "Electronics",
      rating: 4.8,
      inStock: true,
      imageUrl: "https://placehold.co/100x100/e2e8f0/1e293b?text=Headphones"
    },
    {
      id: 3,
      name: "Smart Home Hub",
      description: "Control all your smart home devices from one central hub with voice commands.",
      price: 129.99,
      category: "Electronics",
      rating: 4.2,
      inStock: false,
      imageUrl: "https://placehold.co/100x100/e2e8f0/1e293b?text=Hub"
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      description: "Soft, breathable t-shirt made from 100% organic cotton.",
      price: 24.99,
      category: "Clothing",
      rating: 4.0,
      inStock: true,
      imageUrl: "https://placehold.co/100x100/e2e8f0/1e293b?text=Shirt"
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      description: "Vacuum-insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 34.99,
      category: "Accessories",
      rating: 4.7,
      inStock: true,
      imageUrl: "https://placehold.co/100x100/e2e8f0/1e293b?text=Bottle"
    }
  ];
}
