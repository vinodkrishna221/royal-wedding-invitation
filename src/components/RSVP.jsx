import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const RSVP = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#600000', '#FFFDD0', '#F59E0B']
        });
        setTimeout(() => {
            setIsOpen(false);
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gold rounded-full shadow-2xl flex items-center justify-center text-maroon hover:scale-110 transition-transform"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Mail size={28} />
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-maroon/60 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>

                        <motion.div
                            className="relative w-full max-w-md bg-cream rounded-2xl shadow-2xl overflow-hidden border-2 border-gold"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-maroon/50 hover:text-maroon transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8">
                                {!isSubmitted ? (
                                    <>
                                        <h2 className="text-3xl text-maroon text-center mb-2">RSVP</h2>
                                        <p className="text-center text-maroon/70 font-cormorant mb-8">Please confirm your presence by Dec 1st</p>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    className="peer w-full border-b-2 border-maroon/20 bg-transparent py-2 text-maroon focus:outline-none focus:border-maroon placeholder-transparent"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-0 -top-3.5 text-sm text-maroon/60 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-maroon/40 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-maroon"
                                                >
                                                    Full Name
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    id="guests"
                                                    required
                                                    min="1"
                                                    max="5"
                                                    className="peer w-full border-b-2 border-maroon/20 bg-transparent py-2 text-maroon focus:outline-none focus:border-maroon placeholder-transparent"
                                                    placeholder="Guests"
                                                />
                                                <label
                                                    htmlFor="guests"
                                                    className="absolute left-0 -top-3.5 text-sm text-maroon/60 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-maroon/40 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-maroon"
                                                >
                                                    Number of Guests
                                                </label>
                                            </div>

                                            <div className="flex items-center gap-4 pt-2">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="attending" className="accent-maroon" defaultChecked />
                                                    <span className="text-maroon font-lato">Joyfully Accepts</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="attending" className="accent-maroon" />
                                                    <span className="text-maroon font-lato">Regretfully Declines</span>
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-maroon text-gold py-3 rounded-lg font-cinzel font-bold shadow-lg hover:bg-maroon/90 transition-colors mt-4"
                                            >
                                                Send RSVP
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                            <Check size={32} />
                                        </div>
                                        <h3 className="text-2xl text-maroon mb-2">Thank You!</h3>
                                        <p className="text-maroon/70 font-cormorant">We look forward to celebrating with you.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default RSVP;
