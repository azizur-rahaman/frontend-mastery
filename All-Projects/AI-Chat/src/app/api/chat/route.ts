import { error } from "console";
import { NextResponse } from "next/server";

export const runtime = 'edge'; // optional: Edge Function

export async function POST(req: Request) {
    const { messages, apiKey } = await req.json();

    // Use env variable if available, otherwise use the one from request
    const openaiApiKey = process.env.OPENAI_API_KEY || apiKey;

    if (!openaiApiKey) {
        return NextResponse.json({ error: 'API key is required' }, { status: 401 });
    }

    // Shape messages as OpenAI expects: [{role, content}, ....]
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages,
            temperature: 0.7,
            stream: false,
        })
    });

    if(!res.ok) return NextResponse.json({ error: 'Upstream error'}, { status: 500 });
    const data = await res.json();
    return NextResponse.json(data);
}