import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from './SplitText';

const Couple = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={ref} className="min-h-screen w-full py-20 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden">
            {/* Text Side */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-right space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl text-maroon">
                    <SplitText>The Bride</SplitText>
                </h2>
                <p className="font-cormorant text-xl md:text-2xl text-maroon/80 italic">
                    "Love is not just looking at each other, it's looking in the same direction."
                </p>
                <p className="font-lato text-maroon/70 leading-relaxed max-w-md ml-auto">
                    Priya is a dreamer, an artist, and the heart of her family. She brings joy and color to everyone around her.
                </p>
            </motion.div>

            {/* Image Side */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Rotating Mandala Ring */}
                <motion.div
                    className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border-[1px] border-gold rounded-full opacity-60"
                    style={{ rotate }}
                >
                    <div className="absolute inset-0 border-[1px] border-maroon/20 rounded-full scale-90 border-dashed"></div>
                    <div className="absolute inset-0 border-[1px] border-gold/40 rounded-full scale-110"></div>
                </motion.div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cream shadow-2xl group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1583934555053-7008e38136c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Bride"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                </div>
            </motion.div>
        </section>
    );
};

const Groom = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <section ref={ref} className="min-h-screen w-full py-20 px-4 md:px-10 flex flex-col md:flex-row-reverse items-center justify-center gap-10 overflow-hidden bg-maroon/5">
            {/* Text Side */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl text-maroon">
                    <SplitText>The Groom</SplitText>
                </h2>
                <p className="font-cormorant text-xl md:text-2xl text-maroon/80 italic">
                    "In you, I've found the love of my life and my closest, truest friend."
                </p>
                <p className="font-lato text-maroon/70 leading-relaxed max-w-md mr-auto">
                    Rahul is a visionary, a leader, and a pillar of strength. His kindness and ambition inspire everyone he meets.
                </p>
            </motion.div>

            {/* Image Side */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Rotating Mandala Ring */}
                <motion.div
                    className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border-[1px] border-gold rounded-full opacity-60"
                    style={{ rotate }}
                >
                    <div className="absolute inset-0 border-[1px] border-maroon/20 rounded-full scale-90 border-dashed"></div>
                    <div className="absolute inset-0 border-[1px] border-gold/40 rounded-full scale-110"></div>
                </motion.div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cream shadow-2xl group cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Groom"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export { Couple, Groom };
