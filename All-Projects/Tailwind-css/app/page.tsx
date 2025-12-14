import { Button } from "@/components/Button";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Project | Azizur",
  description: "Selected work and expriments."
}

export default function Home() {
  return (
    <>
    <Hero />

    <Projects />
    <Contact />

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-blue-200 p-4">1</div>
        <div className="bg-blue-300 p-4">2</div>
        <div className="bg-blue-400 p-4">3</div>
      </div>

      <div>
        <h1>Azizur Rahaman</h1>
        <p>Frontend Developer</p>
        <Button variant="primary" label="Hire Me"/>
      </div>
    </>
  );
}
