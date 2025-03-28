import { NextRequest } from 'next/server';

// Mock user database
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'editor' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user' },
];

/**
 * GET handler for users
 * Returns a list of users with optional filtering
 */
export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams;
  const role = searchParams.get('role');
  const limit = searchParams.get('limit');
  
  // Apply filters
  let filteredUsers = [...users];
  
  if (role) {
    filteredUsers = filteredUsers.filter(user => user.role === role);
  }
  
  if (limit) {
    const limitNum = parseInt(limit, 10);
    if (!isNaN(limitNum)) {
      filteredUsers = filteredUsers.slice(0, limitNum);
    }
  }
  
  // Simulate a delay to show loading states in the UI
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the filtered users
  return Response.json({
    success: true,
    count: filteredUsers.length,
    data: filteredUsers,
  });
}

/**
 * POST handler for users
 * Creates a new user
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const userData = await request.json();
    
    // Validate required fields
    if (!userData.name || !userData.email) {
      return Response.json(
        {
          success: false,
          message: 'Name and email are required fields',
        },
        { status: 400 }
      );
    }
    
    // Create a new user
    const newUser = {
      id: (users.length + 1).toString(),
      name: userData.name,
      email: userData.email,
      role: userData.role || 'user',
    };
    
    // In a real app, we would save this to a database
    // For this demo, we'll just return the new user
    
    // Simulate a delay to show loading states in the UI
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return the new user
    return Response.json({
      success: true,
      message: 'User created successfully',
      data: newUser,
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
