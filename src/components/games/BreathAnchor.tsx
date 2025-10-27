import { useState, useEffect } from 'react';
import { Play, Pause, Download } from 'lucide-react';

export default function BreathAnchor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (!isPlaying) return;

    const durations = {
      inhale: 4000,
      hold1: 2000,
      exhale: 6000,
      hold2: 2000,
    };

    const phases: Array<'inhale' | 'hold1' | 'exhale' | 'hold2'> = ['inhale', 'hold1', 'exhale', 'hold2'];
    let currentPhaseIndex = 0;

    const phaseTimer = setInterval(() => {
      currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
      setPhase(phases[currentPhaseIndex]);
    }, durations[phase]);

    return () => clearInterval(phaseTimer);
  }, [isPlaying, phase]);

  useEffect(() => {
    if (!isPlaying || countdown === 0) return;

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsPlaying(false);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, [isPlaying, countdown]);

  const handleToggle = () => {
    if (!isPlaying) {
      setCountdown(60);
    }
    setIsPlaying(!isPlaying);
  };

  const phaseText = {
    inhale: 'Breathe In',
    hold1: 'Hold',
    exhale: 'Breathe Out',
    hold2: 'Hold',
  };

  const circleScale = {
    inhale: 'scale-100',
    hold1: 'scale-100',
    exhale: 'scale-50',
    hold2: 'scale-50',
  };

  return (
    <div className="bg-gradient-to-br from-[#2E8F8F]/10 to-[#F5EBDD]/30 rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#222222] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
        60s Breath Anchor
      </h3>
      <p className="text-gray-700 mb-6">
        Follow the expanding circle. Create an instant calm anchor you can trigger anytime.
      </p>

      <div className="flex flex-col items-center justify-center min-h-[400px] relative">
        <div className="relative w-64 h-64 flex items-center justify-center mb-8">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#2E8F8F] to-[#257070] transition-transform duration-[4000ms] ease-in-out ${
              isPlaying ? circleScale[phase] : 'scale-75'
            } opacity-20`}
          ></div>
          <div
            className={`absolute inset-8 rounded-full bg-gradient-to-br from-[#2E8F8F] to-[#257070] transition-transform duration-[4000ms] ease-in-out ${
              isPlaying ? circleScale[phase] : 'scale-75'
            } opacity-40`}
          ></div>
          <div
            className={`absolute inset-16 rounded-full bg-gradient-to-br from-[#2E8F8F] to-[#257070] transition-transform duration-[4000ms] ease-in-out ${
              isPlaying ? circleScale[phase] : 'scale-75'
            } flex items-center justify-center`}
          >
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2">{countdown}s</div>
              {isPlaying && (
                <div className="text-lg animate-pulse">{phaseText[phase]}</div>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="flex items-center justify-center px-8 py-4 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
        >
          {isPlaying ? (
            <>
              <Pause className="mr-2" size={20} />
              Pause
            </>
          ) : (
            <>
              <Play className="mr-2" size={20} />
              Start 60s Calm
            </>
          )}
        </button>

        <button
          className="flex items-center justify-center px-6 py-2 text-[#2E8F8F] hover:text-[#257070] transition-colors text-sm"
          onClick={() => alert('Download feature: Connect to audio file hosting')}
        >
          <Download className="mr-2" size={16} />
          Download 60s Calm Audio
        </button>
      </div>

      <div className="mt-6 p-4 bg-white/60 rounded-xl">
        <h4 className="font-semibold text-[#222222] mb-2">How this helps:</h4>
        <p className="text-sm text-gray-700">
          This 4-2-6-2 breathing pattern activates your parasympathetic nervous system, creating immediate calm. Practice daily to build a neural anchor — your mind will learn to associate this pattern with relaxation, making it easier to trigger calm in stressful moments.
        </p>
      </div>
    </div>
  );
}
