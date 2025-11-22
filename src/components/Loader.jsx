import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
    "Two souls, one heart.",
    "A journey of a thousand miles begins with a single step.",
    "Love is the bridge between two hearts."
];

const Loader = ({ onComplete }) => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5, ease: "easeInOut" }} // Increased delay to show quotes
            onAnimationComplete={onComplete}
        >
            <div className="relative w-32 h-32 mb-8">
                <motion.svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-maroon"
                >
                    <motion.path
                        d="M50 10 C 20 10, 10 40, 10 50 C 10 60, 20 90, 50 90 C 80 90, 90 60, 90 50 C 90 40, 80 10, 50 10 Z"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M50 20 C 30 20, 20 40, 20 50 C 20 60, 30 80, 50 80 C 70 80, 80 60, 80 50 C 80 40, 70 20, 50 20 Z"
                        fill="transparent"
                        stroke="#F59E0B"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    />
                </motion.svg>
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <span className="font-cinzel text-2xl text-gold">W</span>
                </motion.div>
            </div>

            {/* Quote Rotator */}
            <div className="h-12 overflow-hidden relative w-full max-w-md text-center px-4">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={quoteIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="font-cormorant text-xl text-maroon/80 italic absolute w-full left-0"
                    >
                        "{quotes[quoteIndex]}"
                    </motion.p>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Loader;
