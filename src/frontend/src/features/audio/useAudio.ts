import { useState, useRef, useEffect } from 'react';

export function useAudio() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element (you can add your own music file)
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      // Only play if user has enabled audio
      if (isEnabled) {
        audioRef.current.play().catch(() => {
          // Silently fail if autoplay is blocked
        });
        setIsMusicPlaying(true);
      }
    }
  };

  const toggleEnabled = () => {
    const newEnabled = !isEnabled;
    setIsEnabled(newEnabled);
    
    if (!newEnabled && isMusicPlaying) {
      audioRef.current?.pause();
      setIsMusicPlaying(false);
    }
  };

  const playClickSound = () => {
    if (!isEnabled) return;
    // You can add click sound effect here
  };

  return {
    isEnabled,
    isMusicPlaying,
    toggleMusic,
    toggleEnabled,
    playClickSound,
  };
}
