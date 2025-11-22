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
                    <div className="absolute inset-0 bg-cream rounded-lg shadow-2xl flex flex-col items-center justify-center backface-hidden rotate-y-180 z-10 border-8 border-double border-maroon/20 p-4 overflow-y-auto">
                        <div className="absolute inset-0 opacity-10 bg-mandala bg-repeat"></div>
                        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full w-full px-2">
                            <p className="font-cormorant text-xs md:text-sm text-maroon/60 mb-1">Sree Lakshmi Venkateswara Swamy Prasannaha</p>
                            <p className="font-cormorant text-xs md:text-sm text-maroon/60 mb-2">Sree Urukundu Eranna Swamy Prasannaha</p>
                            <h2 className="font-cinzel text-base md:text-lg text-maroon mb-2">Naraboyula Family's</h2>
                            <h1 className="font-cormorant text-xl md:text-2xl text-maroon mb-2 italic">Wedding Invitation</h1>
                            <p className="font-lato text-xs md:text-sm text-maroon/80 mb-2">Smt. Jadla Lakshmidevi & Sri Jadla Venkatesulu,</p>
                            <p className="font-lato text-xs text-maroon/70 mb-3">Tharanath Hospital Road, Anantapur Road, BELLARY.</p>
                            <p className="font-cormorant text-sm md:text-base text-maroon/80 mb-2 italic leading-tight">We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our youngest son</p>
                            <h3 className="font-cinzel text-lg md:text-xl text-maroon mb-1">Chi. B. Nagaraju</h3>
                            <p className="font-lato text-xs text-maroon/70 mb-2">(Grand son of Late Smt. Jadla Ramamma & Late Sri Jadla Nagappa.)</p>
                            <p className="font-cormorant text-base text-maroon/80 italic mb-2">with</p>
                            <h3 className="font-cinzel text-lg md:text-xl text-maroon mb-1">Chi. Kum. Sow. Purnima</h3>
                            <p className="font-lato text-xs text-maroon/70">(Youngest daughter of Smt. G.B. Nagarathnamma & Late Sri Chidanada Badanahal.)</p>
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
