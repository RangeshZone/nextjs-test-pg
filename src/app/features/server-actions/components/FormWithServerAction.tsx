'use client';

import { useState } from 'react';
import { submitContactForm } from './actions';

export default function FormWithServerAction() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    message?: string;
    data?: any;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setResult(null);
    
    try {
      // Create a new FormData object to avoid serialization issues
      const newFormData = new FormData();
      // Copy all entries from the original FormData
      for (const [key, value] of formData.entries()) {
        newFormData.append(key, value);
      }
      
      // Call the server action with the new FormData
      const response = await submitContactForm(newFormData);
      setResult(response);
      
      // Reset form if successful
      if (response.success) {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
      }
    } catch (error) {
      setResult({
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-medium mb-1">How This Works</p>
        <p>
          This form uses a Server Action to process the submission. The action runs on the server,
          allowing you to directly access databases, APIs, or other server-only resources.
        </p>
        <p className="mt-2">
          Server Actions provide progressive enhancement - this form works even without JavaScript enabled.
        </p>
      </div>
      
      <form 
        id="contact-form"
        action={handleSubmit} 
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800"
          ></textarea>
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
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      
      {result && (
        <div className={`mt-4 p-3 rounded ${
          result.success 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
            : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
        }`}>
          <p className="font-medium">{result.success ? 'Success!' : 'Error'}</p>
          <p>{result.message}</p>
          
          {result.success && result.data && (
            <div className="mt-2 text-sm">
              <p className="font-medium">Submitted Data:</p>
              <pre className="bg-white dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-2">Server Action Code</h3>
        <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
          <code>{`'use server';

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Validate form data
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'All fields are required'
    };
  }
  
  // In a real app, you would save this to a database
  // or send an email, etc.
  
  // Return success response
  return {
    success: true,
    message: 'Thank you for your message!',
    data: { name, email, message }
  };
}`}</code>
        </pre>
      </div>
    </div>
  );
}
