# Admin Dashboard — Redux Toolkit & RTK Query

A production-ready Admin Dashboard built with **Next.js App Router**, **Redux Toolkit**, and **RTK Query**, demonstrating real-world state management, server data handling, and authentication patterns.

## 🚀 Live Demo
👉 https://your-project-name.vercel.app

## 🛠 Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **Tailwind CSS**
- **JSONPlaceholder API**
- **Vercel** (Deployment)

## ✨ Features
- 🔐 **Authentication with Redux** (persisted state)
- 🛡 **Protected routes** (App Router compatible)
- 👥 **Users CRUD** (Create, Read, Update, Delete)
- ⚡ **RTK Query caching** & automatic invalidation
- 🚀 **Optimistic UI updates**
- 🔁 **Polling** for real-time data refresh
- 🌙 **Light / Dark theme toggle** (persisted)
- 📦 **Clean, scalable folder structure**

## 🧠 Architecture Highlights
- Server data managed via **RTK Query**
- Client/UI state handled by Redux slices
- No `useEffect + fetch` anti-patterns
- Tag-based cache invalidation
- Optimistic updates with rollback safety

## 📁 Folder Structure
```
app/
  ├── dashboard/
  ├── login/
  ├── providers/
store/
  ├── api.ts
  ├── store.ts
  ├── slices/
  │   ├── authSlice.ts
  │   └── themeSlice.ts
components/
  ├── Navbar.tsx
  ├── ProtectedRoute.tsx
  ├── UserForm.tsx
  └── UserTable.tsx
lib/
  ├── persist.ts
  └── types/
```

## 📸 Screenshots
_Add screenshots here_

## 🧪 How to Run Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📌 What This Project Demonstrates

This project was built to showcase job-ready frontend skills:

- ✅ **Predictable global state** management
- ✅ **Scalable API handling** with RTK Query
- ✅ **Production deployment** ready
- ✅ **Clean Next.js App Router** patterns
- ✅ **TypeScript** best practices
- ✅ **Modern React** patterns (Server Components, Client Components)

## 🚢 Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

MIT
