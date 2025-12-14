import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json({ message: 'Hello from Next.js API Route!' });
}

//! Test: http://localhost:3000/api/hello