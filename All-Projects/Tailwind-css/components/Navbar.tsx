'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                <Link href="/">Azizur</Link>

                <div className="hidden md:flex gap-6">
                    <Link href="#about">About</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
            </div>

            {open && (
                <div className="md:hidden bg-white p-4 flex flex-col gap-4 border-t">
                    <Link href="#about" onClick={() => setOpen(false)}>About</Link>
                    <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
                    <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    )
}