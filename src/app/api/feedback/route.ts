import { NextRequest } from 'next/server';

// Mock feedback database
const feedbackItems: {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  createdAt: string;
}[] = [];

/**
 * GET handler for feedback
 * Returns a list of feedback items
 */
export async function GET(request: NextRequest) {
  // Simulate a delay to show loading states in the UI
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return all feedback items
  return Response.json({
    success: true,
    count: feedbackItems.length,
    data: feedbackItems,
  });
}

/**
 * POST handler for feedback
 * Creates a new feedback item
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const feedbackData = await request.json();
    
    // Validate required fields
    if (!feedbackData.name || !feedbackData.email || !feedbackData.message) {
      return Response.json(
        {
          success: false,
          message: 'Name, email, and message are required fields',
        },
        { status: 400 }
      );
    }
    
    // Validate rating
    const rating = parseInt(feedbackData.rating, 10);
    if (isNaN(rating) || rating < 1 || rating > 5) {
      return Response.json(
        {
          success: false,
          message: 'Rating must be a number between 1 and 5',
        },
        { status: 400 }
      );
    }
    
    // Create a new feedback item
    const newFeedback = {
      id: (feedbackItems.length + 1).toString(),
      name: feedbackData.name,
      email: feedbackData.email,
      message: feedbackData.message,
      rating,
      createdAt: new Date().toISOString(),
    };
    
    // In a real app, we would save this to a database
    // For this demo, we'll add it to our in-memory array
    feedbackItems.push(newFeedback);
    
    // Simulate a delay to show loading states in the UI
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return the new feedback item
    return Response.json({
      success: true,
      message: 'Feedback submitted successfully',
      data: newFeedback,
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
