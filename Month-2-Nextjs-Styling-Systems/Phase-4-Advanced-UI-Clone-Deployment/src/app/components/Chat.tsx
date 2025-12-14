"use client";

import { loadConversations, saveConversations, getCurrentConversationId, setCurrentConversationId, getApiKey } from "@/lib/storage";
import { Message, Conversation } from "@/types/chat";
import { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion';

export default function Chat() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [currentConvId, setCurrentConvId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Load conversations on mount
    useEffect(() => {
        const loaded = loadConversations();
        setConversations(loaded);
        const currentId = getCurrentConversationId();
        if (currentId) {
            const conv = loaded.find(c => c.id === currentId);
            if (conv) {
                setCurrentConvId(currentId);
                setMessages(conv.messages);
            }
        }
    }, []);

    // Save conversations and current messages
    useEffect(() => {
        if (currentConvId && messages.length > 0) {
            const updatedConversations = conversations.map(conv => 
                conv.id === currentConvId 
                    ? { 
                        ...conv, 
                        messages, 
                        updatedAt: Date.now(),
                        title: messages[0]?.content.slice(0, 50) || 'New Chat'
                      } 
                    : conv
            );
            setConversations(updatedConversations);
            saveConversations(updatedConversations);
        }
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, currentConvId]);

    const createNewConversation = () => {
        const newConv: Conversation = {
            id: crypto.randomUUID(),
            title: 'New Chat',
            messages: [],
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        const updated = [newConv, ...conversations];
        setConversations(updated);
        saveConversations(updated);
        setCurrentConvId(newConv.id);
        setCurrentConversationId(newConv.id);
        setMessages([]);
    };

    const switchConversation = (convId: string) => {
        const conv = conversations.find(c => c.id === convId);
        if (conv) {
            setCurrentConvId(convId);
            setCurrentConversationId(convId);
            setMessages(conv.messages);
        }
    };

    const deleteConversation = (convId: string) => {
        const updated = conversations.filter(c => c.id !== convId);
        setConversations(updated);
        saveConversations(updated);
        if (currentConvId === convId) {
            setCurrentConvId(null);
            setCurrentConversationId(null);
            setMessages([]);
        }
    };

    const send = async () => {
        const text = input.trim();
        if (!text || isLoading) return;

        // Create a new conversation if none exists
        let convId = currentConvId;
        if (!convId) {
            const newConv: Conversation = {
                id: crypto.randomUUID(),
                title: text.slice(0, 50),
                messages: [],
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            convId = newConv.id;
            const updated = [newConv, ...conversations];
            setConversations(updated);
            saveConversations(updated);
            setCurrentConvId(convId);
            setCurrentConversationId(convId);
        }

        const userMsg: Message = { id: crypto.randomUUID(), role: 'user', content: text, createdAt: Date.now() };
        setInput('');
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        try {
            const apiKey = getApiKey();
            const res = await fetch('/api/chat', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    messages: [...messages, userMsg].map(({ role, content }) => ({ role, content })),
                    apiKey 
                }) 
            });
            const data = await res.json();
            const content = data.choices?.[0]?.message?.content || '(no response)';
            const aiMsg: Message = { id: crypto.randomUUID(), role: 'assistant', content, createdAt: Date.now() };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-[280px_1fr] h-[100dvh] bg-background text-foreground">
            <aside className="border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex flex-col h-full">
                <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Conversations</h2>
                    <button
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 shadow-sm"
                        onClick={createNewConversation}
                    >
                        + New Chat
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2">
                    {conversations.length === 0 ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8 px-4">No conversations yet</p>
                    ) : (
                        <div className="space-y-1">
                            {conversations.map(conv => (
                                <div
                                    key={conv.id}
                                    className={`group relative rounded-lg px-3 py-2.5 cursor-pointer transition-colors ${
                                        currentConvId === conv.id 
                                            ? 'bg-white dark:bg-gray-800 shadow-sm' 
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                    onClick={() => switchConversation(conv.id)}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                                {conv.title}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                {conv.messages.length} messages
                                            </p>
                                        </div>
                                        <button
                                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-opacity"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                deleteConversation(conv.id);
                                            }}
                                        >
                                            <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </aside>

            {/* Chat area */}
            <main className="flex flex-col bg-white dark:bg-gray-950">
                <header className="border-b border-gray-200 dark:border-gray-800 px-6 py-4 bg-white dark:bg-gray-900">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">AI Assistant</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Powered by OpenAI</p>
                </header>

                <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                    {messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Start a conversation</h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-sm">Send a message to begin chatting with the AI assistant</p>
                        </div>
                    ) : (
                        messages.map(m => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                                    m.role === 'user' 
                                        ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white' 
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                                }`}>
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                                </div>
                            </motion.div>
                        ))
                    )}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="max-w-[75%] rounded-2xl px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={bottomRef}/>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                    <div className="max-w-4xl mx-auto flex gap-3">
                        <input 
                            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send()}
                            placeholder="Type your message..."
                            aria-label="Chat message"
                            disabled={isLoading}
                        />
                        <button 
                            className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 font-medium hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                            onClick={send}
                            disabled={isLoading || !input.trim()}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

            </main>
        </div>
    )

}