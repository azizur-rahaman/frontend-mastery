# 🗓️ Month 3: State Management + APIs

> **Goal:** Master asynchronous data handling in React + Next.js and build real, API-driven, AI-powered products.

---

## 📋 Table of Contents

- [Phase 1: React Query / TanStack Query](#phase-1-react-query--tanstack-query)
- [Phase 2: State Management](#phase-2-state-management)
- [Phase 3: API Integration](#phase-3-api-integration)
- [Phase 4: AI Integrations + Writing](#phase-4-ai-integrations--writing)
- [Deliverables Summary](#deliverables-summary)
- [Resources](#resources)

---

## Phase 1: React Query / TanStack Query

**Week 1 - Objective:** Master fetching, caching, and syncing server state.

### 🎓 What You'll Learn

- **Query Client Setup**
  - `QueryClient` and `QueryClientProvider` configuration
  - Global query configuration options

- **Core Hooks**
  - `useQuery` - Fetching and caching data
  - `useMutation` - Creating, updating, deleting data
  - `useQueryClient` - Imperative query operations

- **Advanced Features**
  - Query keys and refetch strategies
  - Background refetch, stale time, and retry logic
  - Infinite scroll and pagination
  - Optimistic updates + mutation rollbacks

### 💻 Code Example

\`\`\`typescript
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const client = new QueryClient();

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return response.json();
    },
  });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error loading posts</p>;
  
  return (
    <ul>
      {data.slice(0, 10).map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Posts />
    </QueryClientProvider>
  );
}
\`\`\`

### ✅ Practice Tasks

1. **Setup Query Client**
   - Wrap your portfolio application in `QueryClientProvider`
   - Configure default query options (stale time, retry logic)

2. **GitHub Repos Fetcher**
   - Fetch GitHub repositories for a given username using `useQuery`
   - Display repository name, stars, and description

3. **Refresh Functionality**
   - Implement a "Refresh Data" button using `queryClient.invalidateQueries()`
   - Add loading states and error handling

### 📍 Phase Output
A Next.js application using React Query for efficient data fetching and cache management.

---

## Phase 2: State Management

**Week 2 - Objective:** Manage client state cleanly and predictably.

### 🎓 Zustand (Recommended for Beginners)

**Installation:**
\`\`\`bash
npm install zustand
\`\`\`

**Creating a Store:**
\`\`\`typescript
import { create } from 'zustand';

interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));
\`\`\`

**Using the Store:**
\`\`\`typescript
function Counter() {
  const { count, inc, dec } = useCounter();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}
\`\`\`

### 🎓 Redux Toolkit (Alternative)

**Key Concepts:**
- Store and slice setup
- Async thunks with `createAsyncThunk`
- `useSelector` and `useDispatch` hooks
- State persistence to localStorage

### ✅ Practice Tasks

1. **Theme Toggle**
   - Implement global theme (light/dark) toggle using Zustand
   - Persist theme preference to localStorage

2. **Shopping Cart**
   - Build a cart state management system (Redux Toolkit or Zustand)
   - Add items, remove items, update quantities
   - Calculate totals

3. **State Persistence**
   - Persist cart state to localStorage
   - Restore state on page reload

### 📍 Phase Output
Clean, scalable state management layer integrated into your projects.

---

## Phase 3: API Integration

**Week 3 - Objective:** Build full-featured data applications using real APIs.

### 🎓 What You'll Learn

**REST API Integration:**
- Fetching data with React Query (`useQuery`)
- Mutations for CRUD operations (`useMutation`)
- Error handling and loading states
- Pagination and infinite scroll

**GraphQL Integration:**
- GraphQL basics and schema understanding
- Apollo Client setup
- Query and mutation operations
- Cache management

### 💻 Practice Project 1: REST API Dashboard

**Example APIs:**
- Countries API: `https://restcountries.com/v3.1/all`
- Crypto Prices: `https://api.coingecko.com/api/v3/coins/markets`

**Features to Implement:**
- ✅ Search/filter functionality
- ✅ Sorting by different criteria
- ✅ Pagination or infinite scroll
- ✅ Manual refetch button
- ✅ Loading states and error boundaries

### 💻 Practice Project 2: GraphQL App

**Installation:**
\`\`\`bash
npm install @apollo/client graphql
\`\`\`

**Features:**
- Fetch GitHub user data with GraphQL
- Display repositories with stars and language
- Filter and sort functionality

### 📍 Phase Output
Data-rich dashboard powered by real REST and GraphQL APIs.

---

## Phase 4: AI Integrations + Writing

**Week 4 - Objective:** Build AI-powered applications and document your journey.

### 🤖 Project A: AI Text Summarizer

**API Route** (`/api/summarize/route.ts`):
\`\`\`typescript
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text } = await req.json();
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Summarize the following text concisely.' },
        { role: 'user', content: text }
      ],
    }),
  });
  
  const data = await response.json();
  return NextResponse.json({ 
    summary: data.choices?.[0]?.message?.content 
  });
}
\`\`\`

**Client Component:**
\`\`\`typescript
'use client';
import { useState } from 'react';

export default function Summarizer() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">AI Text Summarizer</h1>
      <textarea 
        className="w-full p-3 border rounded h-40" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize..."
      />
      <button 
        onClick={handleSummarize} 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading || !text.trim()}
      >
        {loading ? 'Summarizing…' : 'Summarize'}
      </button>
      {summary && (
        <div className="p-4 bg-gray-50 rounded">
          <h2 className="font-semibold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </main>
  );
}
\`\`\`

### 🤖 Project B: Enhanced Chatbot UI

**Enhancements:**
- ✅ Integrate React Query for message caching
- ✅ Add conversation history with Zustand
- ✅ Implement model selector dropdown
- ✅ Add smooth loading animations
- ✅ Persist chat history to localStorage

### ✍️ Project C: Technical Blog Post

**Article Requirements:**
- **Title:** "How I Built an AI Text Summarizer with Next.js and OpenAI API"
- **Sections:**
  - Introduction and motivation
  - Technology stack overview
  - Step-by-step implementation
  - Code snippets with explanations
  - Screenshots and demos
  - Challenges faced and solutions
  - Live demo and source code links
  - Conclusion and learnings

**Publishing Platforms:**
- Medium
- Dev.to
- LinkedIn Articles
- Hashnode

---

## 📦 Deliverables Summary

| Deliverable | Description | Technologies |
|-------------|-------------|--------------|
| **React Query Demo** | Data fetching and caching application | React Query, TypeScript |
| **State Management Demo** | Global state management system | Zustand or Redux Toolkit |
| **REST Dashboard** | API-driven data dashboard | React Query, REST APIs |
| **GraphQL App** | GraphQL-powered application | Apollo Client, GraphQL |
| **AI Summarizer** | OpenAI-powered text summarizer | Next.js API Routes, OpenAI |
| **Enhanced Chatbot** | Full-featured chat application | React Query, Zustand, OpenAI |
| **Technical Blog** | Published tutorial/case study | Medium/Dev.to |

---

## 📚 Resources

### Documentation
- [TanStack Query](https://tanstack.com/query/latest) - Official React Query documentation
- [Zustand](https://docs.pmnd.rs/zustand) - Minimalist state management
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official Redux toolset
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client for React
- [GraphQL Learn](https://graphql.org/learn/) - Official GraphQL tutorial
- [OpenAI API](https://platform.openai.com/docs) - OpenAI API documentation

### Learning Resources
- [React Query Tutorial](https://www.youtube.com/results?search_query=react+query+tutorial)
- [Zustand Tutorial](https://www.youtube.com/results?search_query=zustand+tutorial)
- [GraphQL Full Course](https://www.youtube.com/results?search_query=graphql+full+course)

### Writing & Publishing
- [Medium Programming](https://medium.com/topic/programming)
- [Dev.to](https://dev.to/) - Community for developers
- [Technical Writing Guide](https://developers.google.com/tech-writing)

---

**🎯 Success Criteria:**
- [ ] Completed all 4 phases
- [ ] Built and deployed all 6 deliverables
- [ ] Published at least one technical article
- [ ] Code pushed to GitHub with proper documentation
- [ ] Live demos accessible online

**Next Steps:** Month 4 - Advanced Topics & Portfolio Completion