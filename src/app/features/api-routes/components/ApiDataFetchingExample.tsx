'use client';

import { useState, useEffect } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
  imageUrl: string;
};

export default function ApiDataFetchingExample() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: '',
    inStock: '',
    search: '',
  });

  // Fetch products when the component mounts or filters change
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      
      try {
        // Build query string from filters
        const queryParams = new URLSearchParams();
        if (filters.category) queryParams.append('category', filters.category);
        if (filters.inStock) queryParams.append('inStock', filters.inStock);
        if (filters.search) queryParams.append('search', filters.search);
        
        // Make the request
        const res = await fetch(`/api/products?${queryParams.toString()}`);
        
        if (!res.ok) {
          throw new Error(`API returned status ${res.status}`);
        }
        
        const data = await res.json();
        
        if (data.success) {
          setProducts(data.data);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (e) {
        setError(`Failed to fetch products: ${(e as Error).message}`);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, [filters]);

  // Get unique categories from products
  const categories = ['', ...new Set(products.map(product => product.category))];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How This Works</p>
        <p>
          This example demonstrates how to fetch data from an API route and display it in a component.
          The products are fetched from the /api/products endpoint with optional filtering.
        </p>
      </div>
      
      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            id="category"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          >
            <option value="">All Categories</option>
            {categories.filter(Boolean).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="inStock" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Availability
          </label>
          <select
            id="inStock"
            value={filters.inStock}
            onChange={(e) => setFilters({ ...filters, inStock: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          >
            <option value="">All Products</option>
            <option value="true">In Stock Only</option>
            <option value="false">Out of Stock Only</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Search products..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          />
        </div>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded">
          {error}
        </div>
      )}
      
      {/* Loading state */}
      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Loading products...</p>
        </div>
      ) : (
        <>
          {/* Products grid */}
          {products.length === 0 ? (
            <div className="text-center py-8 text-gray-600 dark:text-gray-400">
              No products found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="object-cover w-full h-40"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{product.name}</h3>
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{product.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {product.category}
                      </span>
                      <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-2">Data Fetching Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`// Client component
useEffect(() => {
  async function fetchProducts() {
    // Build query string from filters
    const queryParams = new URLSearchParams();
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.inStock) queryParams.append('inStock', filters.inStock);
    if (filters.search) queryParams.append('search', filters.search);
    
    // Make the request
    const res = await fetch(\`/api/products?\${queryParams.toString()}\`);
    const data = await res.json();
    
    if (data.success) {
      setProducts(data.data);
    }
  }
  
  fetchProducts();
}, [filters]);`}</code>
        </pre>
      </div>
    </div>
  );
}
