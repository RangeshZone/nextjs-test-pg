import { NextRequest } from 'next/server';

// Mock products database
const products = [
  { 
    id: '1', 
    name: 'Ergonomic Desk Chair', 
    price: 249.99, 
    category: 'Furniture',
    description: 'Comfortable office chair with lumbar support and adjustable height.',
    inStock: true,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Chair'
  },
  { 
    id: '2', 
    name: 'Wireless Noise-Cancelling Headphones', 
    price: 299.99, 
    category: 'Electronics',
    description: 'Premium headphones with active noise cancellation and 30-hour battery life.',
    inStock: true,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Headphones'
  },
  { 
    id: '3', 
    name: 'Smart Home Hub', 
    price: 129.99, 
    category: 'Electronics',
    description: 'Control all your smart home devices from one central hub with voice commands.',
    inStock: false,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Hub'
  },
  { 
    id: '4', 
    name: 'Organic Cotton T-Shirt', 
    price: 24.99, 
    category: 'Clothing',
    description: 'Soft, breathable t-shirt made from 100% organic cotton.',
    inStock: true,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Shirt'
  },
  { 
    id: '5', 
    name: 'Stainless Steel Water Bottle', 
    price: 34.99, 
    category: 'Accessories',
    description: 'Vacuum-insulated bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    inStock: true,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Bottle'
  },
  { 
    id: '6', 
    name: 'Wireless Charging Pad', 
    price: 49.99, 
    category: 'Electronics',
    description: 'Fast wireless charging for all Qi-enabled devices.',
    inStock: true,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Charger'
  },
  { 
    id: '7', 
    name: 'Leather Wallet', 
    price: 79.99, 
    category: 'Accessories',
    description: 'Genuine leather wallet with RFID protection.',
    inStock: true,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Wallet'
  },
  { 
    id: '8', 
    name: 'Mechanical Keyboard', 
    price: 149.99, 
    category: 'Electronics',
    description: 'Tactile mechanical keyboard with RGB backlighting.',
    inStock: false,
    imageUrl: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Keyboard'
  }
];

/**
 * GET handler for products
 * Returns a list of products with optional filtering
 */
export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const inStock = searchParams.get('inStock');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit');
  
  // Apply filters
  let filteredProducts = [...products];
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  
  if (inStock !== null) {
    const inStockBool = inStock === 'true';
    filteredProducts = filteredProducts.filter(product => product.inStock === inStockBool);
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchLower) || 
      product.description.toLowerCase().includes(searchLower)
    );
  }
  
  if (limit) {
    const limitNum = parseInt(limit, 10);
    if (!isNaN(limitNum)) {
      filteredProducts = filteredProducts.slice(0, limitNum);
    }
  }
  
  // Simulate a delay to show loading states in the UI
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the filtered products
  return Response.json({
    success: true,
    count: filteredProducts.length,
    data: filteredProducts,
  });
}

/**
 * POST handler for products
 * Creates a new product
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const productData = await request.json();
    
    // Validate required fields
    if (!productData.name || !productData.price || !productData.category) {
      return Response.json(
        {
          success: false,
          message: 'Name, price, and category are required fields',
        },
        { status: 400 }
      );
    }
    
    // Create a new product
    const newProduct = {
      id: (products.length + 1).toString(),
      name: productData.name,
      price: productData.price,
      category: productData.category,
      description: productData.description || '',
      inStock: productData.inStock !== undefined ? productData.inStock : true,
      imageUrl: productData.imageUrl || `https://placehold.co/300x300/e2e8f0/1e293b?text=${encodeURIComponent(productData.name)}`
    };
    
    // In a real app, we would save this to a database
    // For this demo, we'll just return the new product
    
    // Simulate a delay to show loading states in the UI
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return the new product
    return Response.json({
      success: true,
      message: 'Product created successfully',
      data: newProduct,
    }, { status: 201 });
  } catch (error) {
    // Return an error response if the request body is invalid
    return Response.json(
      {
        success: false,
        message: 'Invalid JSON data',
        error: (error as Error).message,
      },
      { status: 400 }
    );
  }
}
