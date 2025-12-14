import { Message, Conversation } from "@/types/chat";

export const loadMessages = () : Message[] => JSON.parse(localStorage.getItem('msgs') || '[]');
export const savedMessages = (msgs: Message[]) => localStorage.setItem('msgs', JSON.stringify(msgs));

export const getApiKey = (): string | null => localStorage.getItem('OPENAI_API_KEY');
export const setApiKey = (key: string) => localStorage.setItem('OPENAI_API_KEY', key);
export const clearApiKey = () => localStorage.removeItem('OPENAI_API_KEY');

// Conversation management
export const loadConversations = (): Conversation[] => {
    try {
        return JSON.parse(localStorage.getItem('conversations') || '[]');
    } catch {
        return [];
    }
};

export const saveConversations = (conversations: Conversation[]) => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
};

export const getCurrentConversationId = (): string | null => {
    return localStorage.getItem('currentConversationId');
};

export const setCurrentConversationId = (id: string | null) => {
    if (id) {
        localStorage.setItem('currentConversationId', id);
    } else {
        localStorage.removeItem('currentConversationId');
    }
};