import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const playAmbientSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const now = ctx.currentTime;

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      
      // Exquisite 1.5 seconds fade in for the swell
      masterGain.gain.linearRampToValueAtTime(0.35, now + 1.2);
      
      // Sustain and a luxurious 1.5 seconds exponential fade out
      masterGain.gain.setValueAtTime(0.35, now + 2.0);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      masterGain.connect(ctx.destination);

      // Elegant, rich Kashmiri mountain ambient chord (A Major 9 / Add 11)
      const notes = [110.00, 164.81, 220.00, 277.18, 329.63, 415.30];

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        // Blend sine waves (pure air) and triangle waves (warm vintage woodiness)
        osc.type = index % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Gentle organic detune (microtonal drifting) to create a premium luxurious chorus
        const randomDetune = (Math.random() - 0.5) * 10;
        osc.detune.setValueAtTime(randomDetune, now);

        // Voice balancing
        const relativeVolume = index === 0 ? 0.45 : index === 5 ? 0.15 : 0.25;
        oscGain.gain.setValueAtTime(relativeVolume, now);

        // Soften high frequencies with a gentle lowpass sweep simulating mountain mist
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, now);
        filter.frequency.exponentialRampToValueAtTime(300, now + 2.5);

        // Connections
        osc.connect(oscGain);
        oscGain.connect(filter);
        filter.connect(masterGain);

        // Start and stop cleanly
        osc.start(now);
        osc.stop(now + 3.3);
      });
    } catch (e) {
      console.warn('Audio Context block/unsupported:', e);
    }
  };

  useEffect(() => {
    // Automatically play the ambient sound immediately on mount
    playAmbientSound();

    // Start fading out after 2.5 seconds
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Call onComplete to unmount after fadeout transition completes (3.5s total)
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div
      id="sable-preloader"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0B] transition-all duration-[1000ms] ease-in-out ${
        isFadingOut ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Only elegant SABLE branding centered with breathing animation */}
        <h1
          className="font-serif text-5xl md:text-7xl tracking-[0.35em] pl-[0.35em] text-white select-none animate-pulse-gentle"
          style={{ animationDuration: '2.5s' }}
        >
          SABLE
        </h1>
        {/* Animated thick horizontal line centered below SABLE as requested */}
        <div 
          className="h-[3px] bg-[#C9A66B] rounded-full animate-line-expand" 
          style={{ width: '60px' }} 
        />
      </div>

      {/* Styled inline animation for the pulse */}
      <style>{`
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-pulse-gentle {
          animation: pulse-gentle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
