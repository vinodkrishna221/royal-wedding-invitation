import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Events from './components/Events';
import RSVP from './components/RSVP';
import Particles from './components/Particles';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import AudioPlayer from './components/AudioPlayer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            {loading && <Loader onComplete={() => setLoading(false)} />}

            {!loading && (
                <main className="bg-cream min-h-screen overflow-hidden relative cursor-none">
                    <CustomCursor />
                    <AudioPlayer />
                    <Particles />
                    <Hero />
                    <Events />
                    <RSVP />

                    <footer className="py-8 text-center text-maroon/40 font-lato text-sm relative z-10">
                        <p>&copy; 2025 Naraboyula Family. All rights reserved.</p>
                        <p className="mt-1 text-xs">With best compliments from Friends & Relatives</p>
                    </footer>
                </main>
            )}
        </>
    );
}

export default App;
