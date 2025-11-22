import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SplitText from './SplitText';

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
            className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Tilt Wrapper */}
            <motion.div
                className="relative w-[90%] max-w-md aspect-[3/4] transform-style-3d"
                style={{ rotateX, rotateY }}
            >
                {/* Card Flipper */}
                <motion.div
                    className="w-full h-full relative transform-style-3d"
                    animate={{ rotateY: isOpen ? 180 : 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {/* Front of Envelope */}
                    <div className="absolute inset-0 bg-maroon rounded-lg shadow-2xl flex items-center justify-center backface-hidden z-20 border-4 border-yellow-500/30 overflow-hidden">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>

                        <div className="text-center p-8 border-2 border-yellow-500/50 m-4 h-[90%] flex flex-col justify-center items-center relative z-10">
                            <h1 className="text-4xl md:text-6xl text-gold mb-4">
                                <SplitText>The Wedding</SplitText>
                            </h1>
                            <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mb-4">
                                <span className="font-cinzel text-gold text-2xl">W</span>
                            </div>
                            <p className="text-cream/80 font-cormorant text-xl">You are cordially invited</p>
                        </div>
                    </div>

                    {/* Back of Envelope (Inside) - The Card */}
                    <div className="absolute inset-0 bg-cream rounded-lg shadow-2xl flex flex-col items-center justify-center backface-hidden rotate-y-180 z-10 border-8 border-double border-maroon/20 p-4">
                        <div className="absolute inset-0 opacity-10 bg-mandala bg-repeat"></div>
                        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full w-full">
                            <h2 className="font-cormorant text-lg md:text-xl text-maroon mb-2 leading-tight">With the blessings of our parents</h2>
                            <h1 className="font-cinzel text-2xl md:text-4xl text-maroon mb-3 leading-tight">Priya <br /> & <br /> Rahul</h1>
                            <p className="font-cormorant text-base md:text-lg text-maroon/80 mb-4">Request the honor of your presence</p>
                            <div className="border-t border-b border-maroon/30 py-2 my-2 w-3/4">
                                <p className="font-lato text-base md:text-lg text-maroon">DECEMBER 12, 2025</p>
                                <p className="font-lato text-xs md:text-sm text-maroon/70">AT 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-8 flex flex-col items-center text-maroon cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="font-cormorant text-lg mb-2">Scroll for Details</span>
                <ChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
