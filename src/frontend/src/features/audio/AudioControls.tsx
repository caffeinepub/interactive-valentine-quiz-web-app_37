import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from './useAudio';

export default function AudioControls() {
  const { isEnabled, toggleEnabled } = useAudio();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleEnabled}
        className="bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 transform hover:scale-110"
        aria-label={isEnabled ? 'Disable audio' : 'Enable audio'}
      >
        {isEnabled ? (
          <Volume2 size={24} className="text-pink-500" />
        ) : (
          <VolumeX size={24} className="text-gray-400" />
        )}
      </button>
    </div>
  );
}
