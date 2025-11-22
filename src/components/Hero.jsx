import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// SplitText component for letter animation
const SplitText = ({ children }) => {
    const letters = children.split('');
    return (
        <>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="inline-block"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </>
    );
};

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-8"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >
            {/* Tilt Wrapper */}
            <motion.div
                className="relative w-[90%] max-w-lg aspect-[2/3] mb-16"
                style={{ 
                    rotateX, 
                    rotateY,
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Card Flipper */}
                <motion.div
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: isOpen ? 180 : 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {/* Front of Envelope */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-lg shadow-2xl flex items-center justify-center z-20 border-4 border-yellow-600/40 overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Shimmer Effect */}
                        <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                            style={{ animation: 'shimmer 3s infinite' }}
                        ></div>

                        <div className="text-center p-8 border-2 border-yellow-600/60 m-4 h-[90%] flex flex-col justify-center items-center relative z-10">
                            <h1 className="text-4xl md:text-5xl text-yellow-600 mb-4 font-serif italic">
                                <SplitText>The Wedding</SplitText>
                            </h1>
                            <div className="w-16 h-16 border-2 border-yellow-600 rounded-full flex items-center justify-center mb-4">
                                <span className="text-yellow-600 text-2xl font-serif">W</span>
                            </div>
                            <p className="text-amber-100/90 font-serif text-xl italic">You are cordially invited</p>
                        </div>
                    </div>

                    {/* Back of Envelope (Inside) - The Card */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-2xl flex flex-col items-center justify-center z-10 border-8 border-double border-red-900/20 p-3 overflow-hidden"
                        style={{ 
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        <div className="relative z-10 text-center flex flex-col items-center w-full px-2 space-y-1">
                            <p className="font-serif text-[0.3rem] md:text-xs text-red-900/70 leading-tight">Sree Lakshmi Venkateswara Swamy Prasannaha</p>
                            <p className="font-serif text-[0.3rem] md:text-xs text-red-900/70 leading-tight">Sree Urukundu Eranna Swamy Prasannaha</p>

                            <div className="w-12 h-0.5 bg-yellow-700 mx-auto my-1"></div>

                            <h2 className="font-serif text-sm md:text-base text-red-900 font-semibold">Naraboyula Family's</h2>
                            <h1 className="font-serif text-lg md:text-xl text-red-900 italic font-bold tracking-wide">Wedding Invitation</h1>

                            <div className="w-12 h-0.5 bg-yellow-700 mx-auto my-1"></div>

                            <div className="space-y-0 my-1">
                                <p className="text-[0.45rem] md:text-xs text-red-900/80 leading-tight">Smt. Jadla Lakshmidevi & Sri Jadla Venkatesulu,</p>
                                <p className="text-[0.4rem] md:text-[0.65rem] text-red-900/70 leading-tight">Tharanath Hospital Road, Anantapur Road, BELLARY.</p>
                            </div>

                            <p className="font-serif text-[0.4rem] md:text-sm text-red-900/90 italic leading-snug max-w-sm px-1 my-1">We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our youngest son</p>

                            <h3 className="font-serif text-base md:text-lg text-red-900 mt-1 font-bold">Chi. B. Nagaraju</h3>
                            <p className="text-[0.4rem] md:text-xs text-red-900/70 leading-tight px-2">(Grand son of Late Smt. Jadla Ramamma & Late Sri Jadla Nagappa.)</p>

                            <p className="font-serif text-sm md:text-base text-red-900/80 italic my-0.5">with</p>

                            <h3 className="font-serif text-base md:text-lg text-red-900 font-bold">Chi. Kum. Sow. Purnima</h3>
                            <p className="text-[0.4rem] md:text-xs text-red-900/70 leading-tight px-2">(Youngest daughter of Smt. G.B. Nagarathnamma & Late Sri Chidanada Badanahal.)</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center text-red-900 cursor-pointer mt-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="font-serif text-base mb-2">Scroll for Details</span>
                <ChevronDown className="w-6 h-6" />
            </motion.div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
};

export default Hero;