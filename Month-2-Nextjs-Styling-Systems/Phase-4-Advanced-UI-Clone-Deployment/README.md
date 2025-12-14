# AI Chat Assistant 🤖

A modern, professional AI chat application built with Next.js 16, TypeScript, Tailwind CSS, and OpenAI's GPT-4o-mini. Features a sleek UI with conversation history, dark mode support, and smooth animations.

![Chat Interface](screenshots/chat-interface.png)

## ✨ Features

- **🤖 AI-Powered Chat** - Integration with OpenAI's GPT-4o-mini for intelligent conversations
- **💬 Conversation History** - Save and switch between multiple chat threads
- **🌓 Dark Mode Support** - Beautiful UI that adapts to system preferences
- **✨ Smooth Animations** - Powered by Framer Motion for fluid user experience
- **💾 Local Storage** - Conversations persist across sessions
- **🔐 Flexible API Key Management** - Use environment variables or input key directly in the UI
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **⚡ Real-time Updates** - See typing indicators and instant message delivery
- **🎨 Modern UI** - Professional gradient design with polished interactions

## 🖼️ Screenshots

### Empty State
![Empty State](screenshots/empty-state.png)

### Active Conversation
![Active Chat](screenshots/active-chat.png)

### Loading State
![Loading State](screenshots/loading-state.png)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key (get one from [OpenAI Platform](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Phase-4-Advanced-UI-Clone-Deployment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your OpenAI API key** (Optional)
   
   Create a `.env.local` file in the root directory:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   > **Note:** If you don't set an environment variable, the app will prompt you to enter your API key in the UI on first use.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **AI:** OpenAI API (GPT-4o-mini)
- **State Management:** React Hooks
- **Storage:** Browser LocalStorage
- **Validation:** Zod

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts          # OpenAI API integration
│   │   └── check-key/
│   │       └── route.ts          # API key validation endpoint
│   ├── components/
│   │   └── Chat.tsx              # Main chat interface
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page with API key input
├── lib/
│   └── storage.ts                # LocalStorage utilities
└── types/
    └── chat.ts                   # TypeScript interfaces
```

## 🎯 Key Features Explained

### Conversation Management
- Create unlimited chat conversations
- Each conversation has a unique title based on the first message
- Switch between conversations instantly
- Delete conversations with a single click
- All conversations are automatically saved to localStorage

### API Key Flexibility
- **Environment Variable:** Set `OPENAI_API_KEY` in `.env.local` for automatic use
- **UI Input:** If no env variable is found, the app shows a secure input form
- **Persistent Storage:** API keys entered in the UI are saved to localStorage

### Smart UI/UX
- **Empty State:** Helpful prompts when starting a new conversation
- **Loading Indicators:** Animated typing bubbles while AI is thinking
- **Error Handling:** Graceful error messages for network issues
- **Auto-scroll:** Messages automatically scroll into view
- **Enter to Send:** Press Enter to send messages quickly
- **Disabled States:** Prevent accidental double-sends

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Add your `OPENAI_API_KEY` as an environment variable
5. Click Deploy

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🔒 Security Notes

- **Never commit your `.env.local` file** - It's already in `.gitignore`
- **API keys in localStorage** - Only use this for personal/demo projects
- **Production apps** - Always use environment variables on the server
- **Rate limiting** - Consider implementing rate limiting for the API route

## 🎨 Customization

### Change AI Model

Edit `src/app/api/chat/route.ts`:
```typescript
model: 'gpt-4o-mini', // Change to 'gpt-4', 'gpt-3.5-turbo', etc.
```

### Modify Theme Colors

Edit `src/app/globals.css` or update Tailwind classes in components.

### Adjust Animation Timing

Edit Framer Motion properties in `src/app/components/Chat.tsx`:
```typescript
transition={{ duration: 0.3 }} // Adjust animation speed
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Future Enhancements

- [ ] Add conversation search functionality
- [ ] Implement message editing and deletion
- [ ] Add support for file uploads
- [ ] Export conversations to PDF/Markdown
- [ ] Voice input/output support
- [ ] Multi-language support
- [ ] Custom AI model selection in UI
- [ ] Conversation sharing via link

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for the GPT API
- [Vercel](https://vercel.com/) for Next.js
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations

---

Built with ❤️ using Next.js and OpenAI
