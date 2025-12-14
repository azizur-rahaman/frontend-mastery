// Runs at build time → SSG
export const revalidate = 3600; // ISR: regenerate every hour

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Projects() {
  const posts: any[] = await getPosts();
  return (
    <section className="container-custom">
      <h1 className="mb-8">Projects</h1>
      <p className="text-lg mb-6 opacity-80">Explore our latest posts and updates</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 10).map((p) => (
          <a 
            key={p.id} 
            href={`/projects/${p.id}`}
            className="card group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-sm font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                #{p.id}
              </span>
              <svg 
                className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {p.title}
            </h3>
            <p className="text-sm opacity-70 line-clamp-3">
              {p.body}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
