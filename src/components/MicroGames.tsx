import { useState } from 'react';
import BreathAnchor from './games/BreathAnchor';
import ReframeSprint from './games/ReframeSprint';
import AnchorBuilder from './games/AnchorBuilder';

export default function MicroGames() {
  const [activeGame, setActiveGame] = useState<'breath' | 'reframe' | 'anchor'>('breath');

  const games = [
    { id: 'breath' as const, label: '60s Breath Anchor', description: 'Instant calm practice' },
    { id: 'reframe' as const, label: 'Reframe Sprint', description: 'Cognitive training' },
    { id: 'anchor' as const, label: 'Anchor Builder', description: 'Create triggers' },
  ];

  return (
    <section id="games" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Try NLP Techniques Now
          </h2>
          <div className="w-20 h-1 bg-[#2E8F8F] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience three interactive micro-games that demonstrate real NLP techniques. Each takes less than 5 minutes and shows you how simple practices create lasting change.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeGame === game.id
                  ? 'bg-[#2E8F8F] text-white shadow-lg'
                  : 'bg-white text-[#222222] border-2 border-gray-200 hover:border-[#2E8F8F]'
              }`}
            >
              <div className="font-semibold">{game.label}</div>
              <div className="text-xs opacity-80">{game.description}</div>
            </button>
          ))}
        </div>

        <div className="fade-in">
          {activeGame === 'breath' && <BreathAnchor />}
          {activeGame === 'reframe' && <ReframeSprint />}
          {activeGame === 'anchor' && <AnchorBuilder />}
        </div>
      </div>
    </section>
  );
}
