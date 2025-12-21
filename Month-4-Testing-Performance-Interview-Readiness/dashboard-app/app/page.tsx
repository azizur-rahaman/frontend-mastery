import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-8">
            Redux Toolkit & RTK Query
          </p>
          
          <div className="space-y-4 text-left mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Authentication</h3>
                <p className="text-gray-600 dark:text-gray-300">Secure login with persisted Redux state</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">User Management</h3>
                <p className="text-gray-600 dark:text-gray-300">Full CRUD operations with RTK Query</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Optimistic Updates</h3>
                <p className="text-gray-600 dark:text-gray-300">Lightning-fast UI with smart caching</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌙</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Theme Toggle</h3>
                <p className="text-gray-600 dark:text-gray-300">Light & dark mode with persistence</p>
              </div>
            </div>
          </div>

          <Link 
            href="/login"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Login to Dashboard
          </Link>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with Next.js, TypeScript, Redux Toolkit & RTK Query
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
