import { useState } from 'react';
import { Zap, X } from 'lucide-react';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const element = document.querySelector('#games');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
      <button
        onClick={handleClick}
        className="group bg-[#FF6B6B] text-white rounded-full p-4 shadow-2xl hover:bg-[#FF8E53] transition-all duration-300 hover:scale-110 animate-pulse-slow"
        aria-label="Try 60s calm practice"
      >
        <div className="flex items-center gap-2">
          <Zap size={24} />
          <span className="hidden group-hover:inline-block font-semibold text-sm whitespace-nowrap pr-2">
            Try in 60s
          </span>
        </div>
      </button>

      <button
        onClick={() => setIsVisible(false)}
        className="bg-gray-600 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition-all duration-300 self-end"
        aria-label="Close floating button"
      >
        <X size={16} />
      </button>
    </div>
  );
}
