import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        console.error("Audio playback failed:", error);
                        setIsPlaying(false);
                    });
            }
        }
    };

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <audio ref={audioRef} loop>
                <source src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Marcha_Nupcial_Mendelssohn.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={togglePlay}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-maroon transition-all duration-300"
            >
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
        </div>
    );
};

export default AudioPlayer;
