interface Post {
    id: number;
    title: string;
    body: string;
}

//* Generate static params for first 10 posts
export async function generateStaticParams(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();
    return posts.slice(0,10).map((p) => ({ id: p.id.toString() }));
}


//* Fetch individual post
async function getPost(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function Project({ params } : { params: { id: string }}) {
    const post = await getPost(params.id);
    return(
        <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <div className="container-custom py-8">
                {/* Back Button */}
                <a 
                    href="/projects" 
                    className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:gap-3 transition-all"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </a>
                
                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Header Card */}
                    <div className="card mb-6">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-xs font-bold px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg">
                                PROJECT #{post.id}
                            </span>
                            <span className="text-sm opacity-30">•</span>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Published</span>
                            <span className="text-sm opacity-30">•</span>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">5 min read</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight capitalize">
                            {post.title}
                        </h1>
                        
                        {/* Author Info */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    A
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Alex Johnson</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Senior Content Creator • @alexj</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Body Content Card */}
                    <div className="card mb-6">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div className="first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 dark:first-letter:text-slate-100 first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                                <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                                    {post.body}
                                </p>
                            </div>
                            
                            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">💡 Key Takeaway</p>
                                <p className="text-slate-700 dark:text-slate-300">
                                    This project demonstrates modern web development practices and showcases the power of static site generation.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Engagement Footer */}
                    <div className="card">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                    <span className="font-semibold">324</span>
                                </button>
                                
                                <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span className="font-semibold">48</span>
                                </button>
                                
                                <button className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                    <span className="font-semibold">Save</span>
                                </button>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-500">Share:</span>
                                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}