'use client';

import { useState } from 'react';

/**
 * Interactive Client Component
 * 
 * This is a client component that demonstrates:
 * 1. Receiving data from a server component
 * 2. Adding client-side interactivity with React hooks
 * 3. The clear separation between server and client responsibilities
 */

// Define the product type for TypeScript
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  inStock: boolean;
  imageUrl: string;
};

// Props interface
interface InteractiveClientComponentProps {
  products: Product[];
}

export default function InteractiveClientComponent({ products }: InteractiveClientComponentProps) {
  // Client-side state for filtering products
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter and sort products based on user selections
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name); // Default sort by name
    });
  
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Interactive Product Browser</h3>
      
      {/* Client-side controls */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Search Products
            </label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or description"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating (Best)</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Display filtered products */}
      <div className="space-y-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center py-8 text-gray-500 dark:text-gray-400">
            No products match your filters. Try adjusting your search criteria.
          </p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="flex flex-col sm:flex-row border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="w-full sm:w-24 h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">{product.name}</h4>
                  <span className="font-medium">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Rating: {product.rating}/5</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                      {product.category}
                    </span>
                  </div>
                  <button
                    className={`px-3 py-1 text-sm rounded-md ${
                      product.inStock 
                        ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/40' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm text-gray-600 dark:text-gray-400 border-l-4 border-yellow-500">
        <p className="font-medium mb-1">Client Component Note</p>
        <p>
          This component is marked with <code className="bg-yellow-100 dark:bg-yellow-900 px-1 py-0.5 rounded">&apos;use client&apos;</code> and runs in the browser.
          It receives data from the server component but adds client-side interactivity with React hooks.
        </p>
        <p className="mt-2">
          Notice how the filtering, sorting, and search functionality all work without any server requests.
          The initial data was prepared on the server, but all interactions happen on the client.
        </p>
      </div>
    </div>
  );
}
