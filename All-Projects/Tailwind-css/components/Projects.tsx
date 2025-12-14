"use client";
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 }}
};

    const data = [
        {id:1, title: "Weather App", desc: "React + API"},
        {id:2, title: "Portfolio", desc: "Next.js + Tailwind"},
        {id: 3, title: "ChatGPT UI Clone", desc: "Framer Motion"}
    ];

export default function Projects() {

    return (
        <section id="projects" className="p-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                {data.map((p) => (
                    <motion.div 
                    variants={item}
                    key={p.id} className="bg-white p-6 rounded-lg lg:grid-cols-3 gap-6">
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p>{p.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}