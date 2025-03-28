import { NextRequest } from 'next/server';

// Mock user database (same as in the main users route)
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'editor' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'user' },
];

/**
 * GET handler for a specific user
 * Returns a user by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Get the user ID from the URL
  const { id } = params;
  
  // Find the user with the matching ID
  const user = users.find(user => user.id === id);
  
  // Simulate a delay to show loading states in the UI
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return a 404 error if the user is not found
  if (!user) {
    return Response.json(
      {
        success: false,
        message: `User with ID ${id} not found`,
      },
      { status: 404 }
    );
  }
  
  // Return the user
  return Response.json({
    success: true,
    data: user,
  });
}

/**
 * PUT handler for a specific user
 * Updates a user by ID
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the user ID from the URL
    const { id } = params;
    
    // Find the user with the matching ID
    const userIndex = users.findIndex(user => user.id === id);
    
    // Return a 404 error if the user is not found
    if (userIndex === -1) {
      return Response.json(
        {
          success: false,
          message: `User with ID ${id} not found`,
        },
        { status: 404 }
      );
    }
    
    // Parse the request body
    const userData = await request.json();
    
    // Update the user
    const updatedUser = {
      ...users[userIndex],
      ...userData,
      id, // Ensure the ID doesn't change
    };
    
    // In a real app, we would update this in a database
    // For this demo, we'll just return the updated user
    
    // Simulate a delay to show loading states in the UI
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return the updated user
    return Response.json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser,
    });
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

/**
 * DELETE handler for a specific user
 * Deletes a user by ID
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Get the user ID from the URL
  const { id } = params;
  
  // Find the user with the matching ID
  const userIndex = users.findIndex(user => user.id === id);
  
  // Return a 404 error if the user is not found
  if (userIndex === -1) {
    return Response.json(
      {
        success: false,
        message: `User with ID ${id} not found`,
      },
      { status: 404 }
    );
  }
  
  // In a real app, we would delete this from a database
  // For this demo, we'll just return a success message
  
  // Simulate a delay to show loading states in the UI
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return a success message
  return Response.json({
    success: true,
    message: `User with ID ${id} deleted successfully`,
  });
}
