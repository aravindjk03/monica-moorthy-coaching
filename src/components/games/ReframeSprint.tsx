import { useState } from 'react';
import { RefreshCw, Award, Share2 } from 'lucide-react';

interface Scenario {
  thought: string;
  reframes: string[];
  correctIndex: number;
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    thought: "I made a mistake in the presentation. Everyone thinks I'm incompetent.",
    reframes: [
      "I made one small error. It shows I'm human and authenticity builds trust.",
      "Everyone noticed and my career is over.",
      "I should never present again.",
    ],
    correctIndex: 0,
    explanation: "Reframing to acknowledge humanity and focus on authenticity shifts from catastrophe to growth.",
  },
  {
    thought: "My colleague got promoted instead of me. I'm not good enough.",
    reframes: [
      "I'll never succeed here.",
      "This means I have more to learn and can ask for specific feedback on what to develop.",
      "They don't appreciate my work.",
    ],
    correctIndex: 1,
    explanation: "Shifting to curiosity and growth opens opportunities instead of closing them.",
  },
  {
    thought: "I have three deadlines this week. I'm going to fail at everything.",
    reframes: [
      "I should quit now.",
      "This is impossible for anyone.",
      "I can prioritize, delegate what's possible, and focus on high-impact work first.",
    ],
    correctIndex: 2,
    explanation: "Reframing to action and prioritization reduces overwhelm and creates a path forward.",
  },
  {
    thought: "They didn't respond to my email. They must be ignoring me.",
    reframes: [
      "I'll send an angry follow-up.",
      "They're probably busy or missed it. I'll follow up politely tomorrow.",
      "I'm being singled out.",
    ],
    correctIndex: 1,
    explanation: "Assuming positive intent reduces anxiety and maintains professional relationships.",
  },
  {
    thought: "I don't know how to do this task. I'm a fraud.",
    reframes: [
      "Everyone else knows more than me.",
      "Not knowing yet is normal. I can learn, ask questions, or find resources.",
      "I should hide this from everyone.",
    ],
    correctIndex: 1,
    explanation: "Reframing 'not knowing' as temporary and solvable builds confidence and action.",
  },
];

export default function ReframeSprint() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentScenario = scenarios[currentIndex];

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;

    setSelectedIndex(index);
    setShowExplanation(true);

    if (index === currentScenario.correctIndex) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex < scenarios.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedIndex(null);
        setShowExplanation(false);
      } else {
        setIsComplete(true);
      }
    }, 3000);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedIndex(null);
    setIsComplete(false);
    setShowExplanation(false);
  };

  const handleShare = () => {
    const text = `I reframed ${score}/5 negative thoughts using NLP techniques! 🧠`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Score copied to clipboard!');
    }
  };

  if (isComplete) {
    return (
      <div className="bg-gradient-to-br from-[#2E8F8F]/10 to-[#F5EBDD]/30 rounded-3xl p-8 shadow-lg">
        <div className="text-center">
          <Award className="w-20 h-20 text-[#2E8F8F] mx-auto mb-6 animate-bounce" />
          <h3 className="text-3xl font-bold text-[#222222] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Complete!
          </h3>
          <p className="text-5xl font-bold text-[#2E8F8F] mb-4">
            {score} / {scenarios.length}
          </p>
          <p className="text-lg text-gray-700 mb-8">
            {score === 5
              ? "Perfect! You're a reframing master."
              : score >= 3
              ? "Great work! You're building the skill."
              : "Good start! Practice strengthens neural pathways."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleReset}
              className="flex items-center justify-center px-6 py-3 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300"
            >
              <RefreshCw className="mr-2" size={20} />
              Try Again
            </button>
            <button
              onClick={handleShare}
              className="flex items-center justify-center px-6 py-3 bg-white text-[#2E8F8F] border-2 border-[#2E8F8F] rounded-full font-semibold hover:bg-[#2E8F8F] hover:text-white transition-all duration-300"
            >
              <Share2 className="mr-2" size={20} />
              Share Score
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#2E8F8F]/10 to-[#F5EBDD]/30 rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#222222] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
        Reframe Sprint
      </h3>
      <p className="text-gray-700 mb-6">
        Choose the most empowering reframe for each negative thought.
      </p>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">
            Question {currentIndex + 1} of {scenarios.length}
          </span>
          <span className="text-sm font-semibold text-[#2E8F8F]">
            Score: {score}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-[#2E8F8F] h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-xl">
        <p className="text-gray-800 italic">"{currentScenario.thought}"</p>
      </div>

      <div className="space-y-3 mb-6">
        {currentScenario.reframes.map((reframe, index) => {
          const isCorrect = index === currentScenario.correctIndex;
          const isSelected = selectedIndex === index;

          let bgColor = 'bg-white hover:bg-gray-50';
          if (isSelected && isCorrect) {
            bgColor = 'bg-green-100 border-green-500';
          } else if (isSelected && !isCorrect) {
            bgColor = 'bg-red-100 border-red-500';
          } else if (selectedIndex !== null && isCorrect) {
            bgColor = 'bg-green-100 border-green-500';
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={selectedIndex !== null}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${bgColor} ${
                selectedIndex === null ? 'hover:shadow-md hover:-translate-y-0.5' : ''
              } disabled:cursor-not-allowed`}
            >
              <span className="text-gray-800">{reframe}</span>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="p-4 bg-white/60 rounded-xl animate-fade-in">
          <h4 className="font-semibold text-[#222222] mb-2">Why this works:</h4>
          <p className="text-sm text-gray-700">{currentScenario.explanation}</p>
        </div>
      )}

      <div className="mt-6 p-4 bg-white/60 rounded-xl">
        <h4 className="font-semibold text-[#222222] mb-2">How this helps:</h4>
        <p className="text-sm text-gray-700">
          Cognitive reframing is an NLP technique that helps you catch negative thought patterns and replace them with empowering alternatives. With practice, this becomes automatic — your brain learns to reframe in real-time, reducing stress and improving decision-making.
        </p>
      </div>
    </div>
  );
}
