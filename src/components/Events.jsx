import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Utensils } from 'lucide-react';
import SplitText from './SplitText';

const events = [
    {
        title: "Sumuhurtham",
        date: "26-11-2025 Wednesday",
        time: "8:30 a.m. to 9:30 a.m., Dhanur Lagnam",
        location: "Sri Anjaneya Swamy Temple, Badanahal Village, D. Hiral Mandal, Ananthapur Dist. A.P.",
        icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-gold" />,
        image: "https://images.unsplash.com/photo-1605218427368-35b0f9969220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Reception",
        date: "27-11-2025 Thursday",
        time: "11:30 a.m.",
        location: "Sree Surya Bhavan Function Hall, Near Tharanath Hospital, Ananthapur Road, Bellary.",
        icon: <Utensils className="w-6 h-6 md:w-8 md:h-8 text-gold" />,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const Card = ({ event, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[450px] md:h-[500px] relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 md:hover:w-[500px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.15), transparent 40%)`
                }}
            />

            <div className="absolute inset-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-maroon/40 group-hover:bg-maroon/30 transition-colors duration-500"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-gradient-to-t from-maroon/90 via-maroon/40 to-transparent z-20">
                <div className="bg-white/10 backdrop-blur-md border border-gold/30 p-4 md:p-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    <div className="flex items-center gap-3 mb-3">
                        {event.icon}
                        <h3 className="text-xl md:text-2xl text-gold font-cinzel whitespace-normal">{event.title}</h3>
                    </div>
                    <div className="space-y-2 text-cream/90 font-lato">
                        <p className="text-sm md:text-base">
                            <span className="font-bold">Date:</span> {event.date}
                        </p>
                        <p className="text-sm md:text-base">
                            <span className="font-bold">Time:</span> {event.time}
                        </p>
                        <p className="text-sm md:text-base">
                            <span className="font-bold">Venue:</span> {event.location}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Events = () => {
    return (
        <section className="py-20 px-4 w-full bg-maroon/5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl text-maroon mb-4">
                    <SplitText>The Celebrations</SplitText>
                </h2>
                <p className="font-cormorant text-xl text-maroon/70">Join us in our joyous moments</p>
            </motion.div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 px-4 md:justify-center scrollbar-hide">
                {events.map((event, index) => (
                    <Card key={index} event={event} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Events;
