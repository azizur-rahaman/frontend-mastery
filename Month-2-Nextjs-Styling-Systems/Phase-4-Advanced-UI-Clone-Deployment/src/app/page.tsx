"use client";
import Image from "next/image";
import Chat from "./components/Chat";
import { useState, useEffect } from "react";
import { getApiKey, setApiKey as saveApiKey } from "@/lib/storage";


export default function Home() {
  const [apiKey, setApiKey] = useState<string>('');
  const [hasApiKey, setHasApiKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkForApiKey = async () => {
      // First check if env variable exists on server
      const envCheck = await fetch('/api/check-key');
      const { hasKey } = await envCheck.json();
      
      if (hasKey) {
        setHasApiKey(true);
        return;
      }
      
      // If no env key, check localStorage
      const storedKey = getApiKey();
      setHasApiKey(!!storedKey);
    };
    
    checkForApiKey();
  }, []);

  const handleSubmit = () => {
    if (apiKey.trim()) {
      saveApiKey(apiKey);
      setHasApiKey(true);
    }
  };

  if (hasApiKey === null) {
    return null; // or a loading spinner
  }

  return (
    !hasApiKey ? (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
        <h1 className="text-3xl font-bold">API Key Missing</h1>
        <p className="text-gray-600">Please enter your OpenAI API key to use this application.</p>
        <input 
          type="password" 
          className="border border-gray-300 rounded px-4 py-2 w-[80%] max-w-md"
          placeholder="sk-proj-..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button 
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    ) : (
      <Chat />
    )
  );
}
