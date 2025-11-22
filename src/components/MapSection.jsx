import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plane, Hotel, ChevronDown, ChevronUp } from 'lucide-react';

const MapSection = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    return (
        <section className="py-20 w-full relative h-[600px] md:h-[700px] bg-cream">
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Grayscale Map Iframe Placeholder */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.080992897643!2d77.20682931508244!3d28.62732098241984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3575555555%3A0xf555555555555555!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Wedding Location"
                ></iframe>
            </motion.div>

            <div className="absolute bottom-8 left-4 md:left-10 z-10 w-[90%] md:w-[400px] space-y-4">
                {/* Travel Info Card */}
                <div className="bg-white/90 backdrop-blur-md border border-gold/30 rounded-lg overflow-hidden shadow-xl">
                    <button
                        onClick={() => toggleTab('travel')}
                        className="w-full flex items-center justify-between p-4 text-maroon hover:bg-maroon/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Plane className="text-gold" />
                            <span className="font-cinzel font-bold">Travel Information</span>
                        </div>
                        {activeTab === 'travel' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <AnimatePresence>
                        {activeTab === 'travel' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 pb-4 text-maroon/80 font-lato text-sm"
                            >
                                <p className="mb-2">Nearest Airport: Indira Gandhi International Airport (DEL)</p>
                                <p>Distance to Venue: 45 mins by taxi.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Stay Info Card */}
                <div className="bg-white/90 backdrop-blur-md border border-gold/30 rounded-lg overflow-hidden shadow-xl">
                    <button
                        onClick={() => toggleTab('stay')}
                        className="w-full flex items-center justify-between p-4 text-maroon hover:bg-maroon/5 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Hotel className="text-gold" />
                            <span className="font-cinzel font-bold">Recommended Hotels</span>
                        </div>
                        {activeTab === 'stay' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    <AnimatePresence>
                        {activeTab === 'stay' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 pb-4 text-maroon/80 font-lato text-sm space-y-2"
                            >
                                <div className="border-b border-maroon/10 pb-2">
                                    <p className="font-bold">The Oberoi</p>
                                    <p className="text-xs">5 Star Luxury • 2km away</p>
                                </div>
                                <div className="border-b border-maroon/10 pb-2">
                                    <p className="font-bold">Taj Palace</p>
                                    <p className="text-xs">Heritage Hotel • 3.5km away</p>
                                </div>
                                <div>
                                    <p className="font-bold">Le Meridien</p>
                                    <p className="text-xs">Modern Comfort • 5km away</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
