import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-12 flex flex-col items-center">
        <Image
          className="dark:invert mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold mb-2">Next.js Feature Showcase</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
          A comprehensive demonstration of Next.js features for team education and reference.
        </p>
      </header>

      <section className="max-w-4xl mx-auto my-16 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 text-center">
        <p>
          <strong>This demo contains AI generated content, including code examples.</strong>
          <br/>
          Review all information and code before using in a production environment.
        </p>
      </section>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CSR Feature Card */}
          <Link 
            href="/features/csr" 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Client-side Rendering (CSR)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Demonstrates client-side rendering with React components that run in the browser.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
          </Link>

          {/* SSR Feature Card */}
          <Link 
            href="/features/ssr" 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Server-side Rendering (SSR)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Shows how Next.js pre-renders pages on the server for improved performance and SEO.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
          </Link>

          {/* Nested Layouts Feature Card */}
          <Link 
            href="/features/layouts" 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Nested Layouts</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Demonstrates how to use nested layouts to share UI across multiple pages.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
          </Link>

          {/* Server Components Feature Card */}
          <Link 
            href="/features/server-components" 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Server Components</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explores React Server Components for improved performance and reduced client-side JavaScript.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
          </Link>

          {/* Server Actions Feature Card */}
          <Link 
            href="/features/server-actions" 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Server Actions</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Shows how to use Server Actions to handle form submissions and data mutations.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
          </Link>

          {/* API Routes Feature Card */}
          <Link 
            href="/features/api-routes" 
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">API Routes</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Demonstrates how to create and use API routes in Next.js applications.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Explore →</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
