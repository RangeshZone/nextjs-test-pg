import { NextRequest } from 'next/server';

/**
 * Basic GET handler
 * Returns a simple JSON response
 */
export async function GET(request: NextRequest) {
  return Response.json({
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Basic POST handler
 * Accepts JSON data and returns it with a success message
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Return the data with a success message
    return Response.json({
      success: true,
      message: 'Data received successfully',
      data,
      timestamp: new Date().toISOString(),
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
 * Basic PUT handler
 * Demonstrates updating a resource
 */
export async function PUT(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Return the data with a success message
    return Response.json({
      success: true,
      message: 'Resource updated successfully',
      data,
      timestamp: new Date().toISOString(),
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
 * Basic DELETE handler
 * Demonstrates deleting a resource
 */
export async function DELETE(request: NextRequest) {
  return Response.json({
    success: true,
    message: 'Resource deleted successfully',
    timestamp: new Date().toISOString(),
  });
}
