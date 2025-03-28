'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

/**
 * Basic form submission handler
 * Processes form data and returns a response
 */
export async function submitContactForm(formData: FormData) {
  // Simulate server processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Validate form data (basic validation)
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'All fields are required'
    };
  }
  
  // In a real app, you would save this to a database
  console.log('Form submission received:', { name, email, message });
  
  // Return success response
  return {
    success: true,
    message: 'Thank you for your message! We will get back to you soon.',
    data: { name, email, message }
  };
}

/**
 * Todo item type
 */
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
};

// In-memory storage for todos (in a real app, this would be a database)
let todos: Todo[] = [
  {
    id: '1',
    text: 'Learn about Server Components',
    completed: true,
    createdAt: '2023-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    text: 'Build a demo with Server Actions',
    completed: false,
    createdAt: '2023-01-02T00:00:00.000Z'
  },
  {
    id: '3',
    text: 'Implement form validation',
    completed: false,
    createdAt: '2023-01-03T00:00:00.000Z'
  }
];

/**
 * Get all todos
 */
export async function getTodos() {
  // Simulate database fetch
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...todos];
}

/**
 * Add a new todo
 */
export async function addTodo(formData: FormData) {
  // Extract form data
  const text = formData.get('text') as string;
  
  if (!text?.trim()) {
    return {
      success: false,
      message: 'Todo text is required'
    };
  }
  
  // Create new todo
  const newTodo: Todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  // Add to "database"
  todos = [...todos, newTodo];
  
  // Revalidate the todos path to refresh the data
  revalidatePath('/features/server-actions');
  
  return {
    success: true,
    message: 'Todo added successfully',
    data: newTodo
  };
}

/**
 * Toggle todo completion status
 */
export async function toggleTodo(formData: FormData) {
  const id = formData.get('id') as string;
  
  if (!id) {
    return {
      success: false,
      message: 'Todo ID is required'
    };
  }
  
  // Find and update todo
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  
  // Revalidate the todos path
  revalidatePath('/features/server-actions');
  
  return {
    success: true,
    message: 'Todo status updated'
  };
}

/**
 * Delete a todo
 */
export async function deleteTodo(formData: FormData) {
  const id = formData.get('id') as string;
  
  if (!id) {
    return {
      success: false,
      message: 'Todo ID is required'
    };
  }
  
  // Remove todo
  todos = todos.filter(todo => todo.id !== id);
  
  // Revalidate the todos path
  revalidatePath('/features/server-actions');
  
  return {
    success: true,
    message: 'Todo deleted successfully'
  };
}

/**
 * Validate and process user registration
 */
export async function registerUser(formData: FormData) {
  // Simulate server processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Extract form data
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  
  // Validate form data
  const errors: Record<string, string> = {};
  
  if (!username || username.length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  }
  
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!password || password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }
  
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  
  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors
    };
  }
  
  // In a real app, you would hash the password and save to a database
  console.log('User registration:', { username, email });
  
  // Return success response
  return {
    success: true,
    message: 'Registration successful! You can now log in.'
  };
}
