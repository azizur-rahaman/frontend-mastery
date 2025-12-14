"use client";

import { Button } from "./Button";
import { motion } from 'framer-motion';

export default function Hero() {

    return (
        <motion.section
        initial={{opacity: 0, y:32}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6, ease: 'easeOut'}}
        className="text-center py-24 bg-gradient-to-b from-blue-50 to-white"
        >
            <motion.h1
            initial={{ opacity: 0, y:32 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold mb-4"
            >  
                Azizur Rahaman

            </motion.h1>
            <motion.p
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 mb-6"
                >
                    Frontend Developer | React * Next.js * TypeScript
            </motion.p>
        </motion.section>
        // <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        //     <h1 className="text-5xl font-bold mb-4">Azizur Rahaman</h1>
        //     <p>Frontend Developer | React + Next.js + TypeScript</p>
        //     <br/>
        //     <Button label="View Projects" />
        // </section>
    )
}