import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

const GiftRegistry = () => {
    const [showRegistry, setShowRegistry] = useState(false);

    return (
        <section className="py-20 px-4 w-full flex justify-center bg-cream">
            <motion.div
                className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gold/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="bg-gold p-1">
                    <div className="bg-maroon p-8 text-center rounded-t-lg">
                        <h2 className="text-3xl md:text-4xl text-gold mb-2">Blessings & Gifts</h2>
                        <p className="text-cream/80 font-cormorant text-lg">Your presence is the greatest gift of all</p>
                    </div>
                </div>

                <div className="p-8 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8 bg-maroon/5 p-1 rounded-full">
                        <button
                            onClick={() => setShowRegistry(false)}
                            className={`px-6 py-2 rounded-full font-lato transition-all duration-300 ${!showRegistry ? 'bg-maroon text-gold shadow-lg' : 'text-maroon hover:bg-maroon/10'}`}
                        >
                            Blessings
                        </button>
                        <button
                            onClick={() => setShowRegistry(true)}
                            className={`px-6 py-2 rounded-full font-lato transition-all duration-300 ${showRegistry ? 'bg-maroon text-gold shadow-lg' : 'text-maroon hover:bg-maroon/10'}`}
                        >
                            Registry
                        </button>
                    </div>

                    <div className="w-full relative min-h-[200px]">
                        <motion.div
                            initial={false}
                            animate={{ opacity: !showRegistry ? 1 : 0, display: !showRegistry ? 'block' : 'none' }}
                            transition={{ duration: 0.5 }}
                            className="text-center space-y-4 absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <Heart className="w-12 h-12 text-maroon/50 mx-auto mb-4" />
                            <p className="font-cormorant text-2xl text-maroon italic">
                                "No gifts are needed, just your love and blessings as we start this new chapter."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={false}
                            animate={{ opacity: showRegistry ? 1 : 0, display: showRegistry ? 'block' : 'none' }}
                            transition={{ duration: 0.5 }}
                            className="text-center space-y-4 absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <Gift className="w-12 h-12 text-maroon/50 mx-auto mb-4" />
                            <p className="font-lato text-maroon/80 mb-4">
                                If you wish to honor us with a gift, we have set up a registry.
                            </p>
                            <div className="bg-maroon/5 p-4 rounded-lg border border-maroon/10 inline-block">
                                <p className="font-bold text-maroon">Bank Transfer</p>
                                <p className="text-sm text-maroon/70">Acct: 1234567890</p>
                                <p className="text-sm text-maroon/70">IFSC: HDFC0001234</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default GiftRegistry;
