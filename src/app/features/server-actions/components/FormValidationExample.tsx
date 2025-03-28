'use client';

import { useState } from 'react';
import { registerUser } from './actions';

export default function FormValidationExample() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setFormErrors({});
    setSuccess(null);
    
    try {
      // Create a new FormData object to avoid serialization issues
      const newFormData = new FormData();
      // Copy all entries from the original FormData
      for (const [key, value] of formData.entries()) {
        newFormData.append(key, value);
      }
      
      // Call the server action for validation and processing
      const response = await registerUser(newFormData);
      
      if (response.success) {
        setSuccess(response.message || 'Registration successful!');
        // Reset form
        const form = document.getElementById('registration-form') as HTMLFormElement;
        form?.reset();
      } else if (response.errors) {
        // Set validation errors
        setFormErrors(response.errors);
      }
    } catch (error) {
      setFormErrors({
        general: 'An unexpected error occurred. Please try again.'
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How Server-Side Validation Works</p>
        <p>
          This example demonstrates how to implement server-side form validation with Server Actions.
          The validation logic runs on the server, allowing for complex validation rules and
          security checks that can&apos;t be bypassed by client-side manipulation.
        </p>
        <p className="mt-2">
          Try submitting the form with invalid data to see the validation errors.
        </p>
      </div>
      
      {/* Registration Form */}
      <form 
        id="registration-form"
        action={handleSubmit} 
        className="space-y-4"
      >
        {/* General error message */}
        {formErrors.general && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded">
            {formErrors.general}
          </div>
        )}
        
        {/* Success message */}
        {success && (
          <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded">
            {success}
          </div>
        )}
        
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={`w-full px-3 py-2 border ${
              formErrors.username 
                ? 'border-red-500 dark:border-red-700' 
                : 'border-gray-300 dark:border-gray-700'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800`}
          />
          {formErrors.username && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.username}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-3 py-2 border ${
              formErrors.email 
                ? 'border-red-500 dark:border-red-700' 
                : 'border-gray-300 dark:border-gray-700'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800`}
          />
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full px-3 py-2 border ${
              formErrors.password 
                ? 'border-red-500 dark:border-red-700' 
                : 'border-gray-300 dark:border-gray-700'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800`}
          />
          {formErrors.password && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.password}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={`w-full px-3 py-2 border ${
              formErrors.confirmPassword 
                ? 'border-red-500 dark:border-red-700' 
                : 'border-gray-300 dark:border-gray-700'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800`}
          />
          {formErrors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.confirmPassword}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting 
              ? 'bg-indigo-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          }`}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-2">Server Validation Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`'use server';

export async function registerUser(formData: FormData) {
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
  
  if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
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
  
  // Process valid registration (in a real app)
  // ...
  
  // Return success response
  return {
    success: true,
    message: 'Registration successful! You can now log in.'
  };
}`}</code>
        </pre>
      </div>
    </div>
  );
}
