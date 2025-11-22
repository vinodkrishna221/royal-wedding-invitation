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
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Book Container */}
            <div className="relative w-[90%] max-w-2xl h-[500px] transform-style-3d perspective" onClick={() => setIsOpen(!isOpen)}>
                {/* Book Spine/Spine (Middle divider) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-maroon/30 z-10 transform -translate-x-1/2"></div>

                {/* Left Page (Front Cover) */}
                <motion.div
                    className="absolute left-0 top-0 w-1/2 h-full bg-maroon rounded-l-lg shadow-2xl border-4 border-yellow-500/30 flex flex-col items-center justify-center p-6 transform-style-3d"
                    animate={{ rotateY: isOpen ? -20 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ perspective: "1200px" }}
                >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] rounded-l-lg"></div>
                    <div className="relative z-10 text-center">
                        <h1 className="text-3xl md:text-4xl text-gold mb-3">
                            <SplitText>The Wedding</SplitText>
                        </h1>
                        <div className="w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="font-cinzel text-gold text-xl">W</span>
                        </div>
                        <p className="text-cream/80 font-cormorant text-base">You are cordially invited</p>
                    </div>
                </motion.div>

                {/* Right Page (Inside Content) */}
                <motion.div
                    className="absolute right-0 top-0 w-1/2 h-full bg-cream rounded-r-lg shadow-2xl border-8 border-double border-maroon/20 p-6 overflow-y-auto transform-style-3d"
                    animate={{ rotateY: isOpen ? 0 : 20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ perspective: "1200px" }}
                >
                    <div className="absolute inset-0 opacity-10 bg-mandala bg-repeat rounded-r-lg"></div>
                    <div className="relative z-10 text-center space-y-2">
                        <p className="font-cormorant text-[10px] md:text-xs text-maroon/60">Sree Lakshmi Venkateswara Swamy Prasannaha</p>
                        <p className="font-cormorant text-[10px] md:text-xs text-maroon/60">Sree Urukundu Eranna Swamy Prasannaha</p>
                        <h2 className="font-cinzel text-sm md:text-base text-maroon">Naraboyula Family's</h2>
                        <h1 className="font-cormorant text-lg md:text-xl text-maroon italic">Wedding Invitation</h1>
                        <hr className="border-maroon/20 my-2" />
                        <p className="font-lato text-[10px] md:text-xs text-maroon/80">Smt. Jadla Lakshmidevi & Sri Jadla Venkatesulu,</p>
                        <p className="font-lato text-[10px] text-maroon/70">Tharanath Hospital Road, Anantapur Road, BELLARY.</p>
                        <p className="font-cormorant text-xs md:text-sm text-maroon/80 italic leading-tight">We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our youngest son</p>
                        <h3 className="font-cinzel text-sm md:text-base text-maroon">Chi. B. Nagaraju</h3>
                        <p className="font-lato text-[10px] text-maroon/70">(Grand son of Late Smt. Jadla Ramamma & Late Sri Jadla Nagappa.)</p>
                        <p className="font-cormorant text-sm text-maroon/80 italic">with</p>
                        <h3 className="font-cinzel text-sm md:text-base text-maroon">Chi. Kum. Sow. Purnima</h3>
                        <p className="font-lato text-[10px] text-maroon/70">(Youngest daughter of Smt. G.B. Nagarathnamma & Late Sri Chidanada Badanahal.)</p>
                    </div>
                </motion.div>
            </div>

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
