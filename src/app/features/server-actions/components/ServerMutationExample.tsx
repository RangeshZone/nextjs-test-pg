'use client';

import { useEffect, useState } from 'react';
import { getTodos, addTodo, toggleTodo, deleteTodo, Todo } from './actions';

export default function ServerMutationExample() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTodoText, setNewTodoText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch todos on component mount
  useEffect(() => {
    async function loadTodos() {
      try {
        const todoData = await getTodos();
        setTodos(todoData);
      } catch (err) {
        setError('Failed to load todos');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadTodos();
  }, []);

  // Handle add todo form submission
  async function handleAddTodo(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Create a new FormData object to avoid any potential issues
      const newFormData = new FormData();
      newFormData.append('text', formData.get('text') as string);
      
      const result = await addTodo(newFormData);
      
      if (result.success) {
        setNewTodoText('');
        // The todos will be automatically refreshed due to revalidatePath in the server action
        // But we'll update the local state for a smoother UX
        const updatedTodos = await getTodos();
        setTodos(updatedTodos);
      } else {
        setError(result.message || 'Failed to add todo');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle toggle todo completion
  async function handleToggleTodo(id: string) {
    const formData = new FormData();
    formData.append('id', id);
    
    try {
      await toggleTodo(formData);
      // Update local state for immediate feedback
      setTodos(prevTodos => 
        prevTodos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  }

  // Handle delete todo
  async function handleDeleteTodo(id: string) {
    const formData = new FormData();
    formData.append('id', id);
    
    try {
      await deleteTodo(formData);
      // Update local state for immediate feedback
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How This Works</p>
        <p>
          This example demonstrates how to use Server Actions to mutate data and automatically
          refresh the UI using Next.js&apos;s revalidatePath function.
        </p>
        <p className="mt-2">
          Try adding, toggling, or deleting todos - the changes are processed on the server
          and the cache is automatically revalidated.
        </p>
      </div>
      
      {/* Add Todo Form */}
      <form 
        action={handleAddTodo}
        className="flex items-center space-x-2 mb-6"
      >
        <input
          type="text"
          name="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
          required
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting 
              ? 'bg-indigo-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
        >
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </form>
      
      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded">
          {error}
        </div>
      )}
      
      {/* Todo List */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
        <h3 className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium">Todo List</h3>
        
        {isLoading ? (
          <div className="p-4 text-center text-gray-500">Loading todos...</div>
        ) : todos.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No todos yet. Add one above!</div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-800"
                  aria-label="Delete todo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-2">Server Action Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`'use server';

import { revalidatePath } from 'next/cache';

// Add a new todo
export async function addTodo(formData: FormData) {
  const text = formData.get('text') as string;
  
  if (!text?.trim()) {
    return { success: false, message: 'Todo text is required' };
  }
  
  // Add to database (simplified for demo)
  const newTodo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date()
  };
  
  todos.push(newTodo);
  
  // Revalidate the todos path to refresh the data
  revalidatePath('/features/server-actions');
  
  return { success: true };
}`}</code>
        </pre>
      </div>
    </div>
  );
}
