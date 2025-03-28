'use client';

import { useEffect, useState, useOptimistic } from 'react';
import { getTodos, addTodo, toggleTodo, deleteTodo, Todo } from './actions';

export default function OptimisticUpdateExample() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTodoText, setNewTodoText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Setup optimistic state for todos
  const [optimisticTodos, addOptimisticTodo] = useOptimistic<
    Todo[],
    { action: 'add' | 'toggle' | 'delete'; todo: Todo; id?: string }
  >(todos, (state, { action, todo, id }) => {
    if (action === 'add') {
      return [...state, todo];
    } else if (action === 'toggle' && id) {
      return state.map(t => 
        t.id === id ? { ...t, completed: !t.completed } : t
      );
    } else if (action === 'delete' && id) {
      return state.filter(t => t.id !== id);
    }
    return state;
  });

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

  // Handle add todo form submission with optimistic update
  async function handleAddTodo(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    
    const text = formData.get('text') as string;
    
    if (!text?.trim()) {
      setError('Todo text is required');
      setIsSubmitting(false);
      return;
    }
    
    // Create optimistic todo
    const optimisticTodo: Todo = {
      id: `optimistic-${Date.now()}`,
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    // Apply optimistic update
    addOptimisticTodo({ action: 'add', todo: optimisticTodo });
    
    try {
      // Create a new FormData object to avoid any potential issues
      const newFormData = new FormData();
      newFormData.append('text', text);
      
      // Submit to server
      const result = await addTodo(newFormData);
      
      if (result.success) {
        setNewTodoText('');
        // Update with real data from server
        const updatedTodos = await getTodos();
        setTodos(updatedTodos);
      } else {
        setError(result.message || 'Failed to add todo');
        // Revert optimistic update by re-fetching
        const currentTodos = await getTodos();
        setTodos(currentTodos);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
      // Revert optimistic update by re-fetching
      const currentTodos = await getTodos();
      setTodos(currentTodos);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle toggle todo completion with optimistic update
  async function handleToggleTodo(id: string) {
    // Apply optimistic update
    addOptimisticTodo({ action: 'toggle', todo: {} as Todo, id });
    
    // Create a new FormData object
    const newFormData = new FormData();
    newFormData.append('id', id);
    
    try {
      await toggleTodo(newFormData);
      // Update real state after server confirms
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
      // Revert optimistic update
      const currentTodos = await getTodos();
      setTodos(currentTodos);
    }
  }

  // Handle delete todo with optimistic update
  async function handleDeleteTodo(id: string) {
    // Apply optimistic update
    addOptimisticTodo({ action: 'delete', todo: {} as Todo, id });
    
    // Create a new FormData object
    const newFormData = new FormData();
    newFormData.append('id', id);
    
    try {
      await deleteTodo(newFormData);
      // Update real state after server confirms
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
      // Revert optimistic update
      const currentTodos = await getTodos();
      setTodos(currentTodos);
    }
  }

  // Update optimistic todos when real todos change
  useEffect(() => {
    if (!isLoading) {
      setTodos(todos);
    }
  }, [todos, isLoading]);

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How Optimistic Updates Work</p>
        <p>
          This example demonstrates how to implement optimistic updates with Server Actions
          using React&apos;s useOptimistic hook. The UI updates immediately before the server
          responds, providing a more responsive user experience.
        </p>
        <p className="mt-2">
          Try adding, toggling, or deleting todos - notice how the UI updates instantly
          before the server action completes.
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
        <h3 className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium">Todo List (Optimistic)</h3>
        
        {isLoading ? (
          <div className="p-4 text-center text-gray-500">Loading todos...</div>
        ) : optimisticTodos.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No todos yet. Add one above!</div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {optimisticTodos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className={`${todo.completed ? 'line-through text-gray-400' : ''} ${todo.id.startsWith('optimistic') ? 'italic text-indigo-600' : ''}`}>
                    {todo.text}
                    {todo.id.startsWith('optimistic') && ' (Saving...)'}
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
        <h3 className="text-sm font-medium mb-2">Optimistic Updates Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`// Setup optimistic state with useOptimistic hook
const [optimisticTodos, addOptimisticTodo] = useOptimistic(
  todos,
  (state, { action, todo, id }) => {
    if (action === 'add') {
      return [...state, todo];
    } else if (action === 'toggle' && id) {
      return state.map(t => 
        t.id === id ? { ...t, completed: !t.completed } : t
      );
    } else if (action === 'delete' && id) {
      return state.filter(t => t.id !== id);
    }
    return state;
  }
);

// Example of optimistic add
async function handleAddTodo(formData: FormData) {
  // Create optimistic todo
  const optimisticTodo = {
    id: \`optimistic-\${Date.now()}\`,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  // Apply optimistic update
  addOptimisticTodo({ action: 'add', todo: optimisticTodo });
  
  // Submit to server
  const result = await addTodo(formData);
  
  // Update with real data from server
  const updatedTodos = await getTodos();
  setTodos(updatedTodos);
}`}</code>
        </pre>
      </div>
    </div>
  );
}
