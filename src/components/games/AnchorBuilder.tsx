import { useState, useEffect } from 'react';
import { Save, Trash2, Zap } from 'lucide-react';

interface Anchor {
  image: string;
  phrase: string;
  timestamp: number;
}

const imageOptions = [
  { emoji: '🌊', label: 'Ocean Waves', description: 'Flowing, calm, rhythmic' },
  { emoji: '🌲', label: 'Forest', description: 'Grounded, peaceful, steady' },
  { emoji: '☀️', label: 'Sunshine', description: 'Warm, energizing, bright' },
  { emoji: '🎯', label: 'Target', description: 'Focused, clear, intentional' },
  { emoji: '🦋', label: 'Butterfly', description: 'Light, free, transformative' },
  { emoji: '⚡', label: 'Lightning', description: 'Powerful, quick, energetic' },
];

export default function AnchorBuilder() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [phrase, setPhrase] = useState('');
  const [savedAnchors, setSavedAnchors] = useState<Anchor[]>([]);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('nlp-anchors');
    if (stored) {
      setSavedAnchors(JSON.parse(stored));
    }
  }, []);

  const handleSave = () => {
    if (!selectedImage || !phrase.trim()) {
      alert('Please select an image and enter a phrase');
      return;
    }

    const newAnchor: Anchor = {
      image: selectedImage,
      phrase: phrase.trim(),
      timestamp: Date.now(),
    };

    const updated = [...savedAnchors, newAnchor];
    setSavedAnchors(updated);
    localStorage.setItem('nlp-anchors', JSON.stringify(updated));

    setSelectedImage(null);
    setPhrase('');
  };

  const handleDelete = (timestamp: number) => {
    const updated = savedAnchors.filter(a => a.timestamp !== timestamp);
    setSavedAnchors(updated);
    localStorage.setItem('nlp-anchors', JSON.stringify(updated));
  };

  const handleTrigger = (anchor: Anchor) => {
    setIsTriggered(true);
    setTimeout(() => setIsTriggered(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#2E8F8F]/10 to-[#F5EBDD]/30 rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#222222] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
        Anchor & Trigger Builder
      </h3>
      <p className="text-gray-700 mb-6">
        Create a personalized calm anchor by pairing an image with a phrase. Trigger it anytime you need instant calm.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Step 1: Choose Your Visual Anchor
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {imageOptions.map((option) => (
              <button
                key={option.emoji}
                onClick={() => setSelectedImage(option.emoji)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                  selectedImage === option.emoji
                    ? 'border-[#2E8F8F] bg-[#2E8F8F]/10'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-4xl mb-2">{option.emoji}</div>
                <div className="text-sm font-semibold text-gray-800">{option.label}</div>
                <div className="text-xs text-gray-600 mt-1">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="anchor-phrase" className="block text-sm font-semibold text-gray-700 mb-2">
            Step 2: Create Your Calm Phrase
          </label>
          <input
            id="anchor-phrase"
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="e.g., I am calm and centered"
            maxLength={50}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
          />
          <p className="text-xs text-gray-600 mt-1">
            Keep it present-tense and positive (e.g., "I am..." not "I will...")
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={!selectedImage || !phrase.trim()}
          className="w-full flex items-center justify-center px-6 py-3 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <Save className="mr-2" size={20} />
          Save Anchor
        </button>

        {savedAnchors.length > 0 && (
          <div className="mt-8 pt-6 border-t-2 border-gray-200">
            <h4 className="text-lg font-bold text-[#222222] mb-4">Your Anchors</h4>
            <div className="space-y-3">
              {savedAnchors.map((anchor) => (
                <div
                  key={anchor.timestamp}
                  className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{anchor.image}</div>
                    <div>
                      <p className="font-semibold text-gray-800">{anchor.phrase}</p>
                      <p className="text-xs text-gray-500">
                        Created {new Date(anchor.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleTrigger(anchor)}
                      className="p-2 bg-[#2E8F8F] text-white rounded-lg hover:bg-[#257070] transition-colors"
                      title="Trigger anchor"
                    >
                      <Zap size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(anchor.timestamp)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      title="Delete anchor"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isTriggered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-md animate-scale-in">
            <div className="text-7xl mb-4">
              {savedAnchors[savedAnchors.length - 1]?.image}
            </div>
            <p className="text-2xl font-bold text-[#222222] mb-2">
              {savedAnchors[savedAnchors.length - 1]?.phrase}
            </p>
            <p className="text-gray-600">Take a deep breath...</p>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-white/60 rounded-xl">
        <h4 className="font-semibold text-[#222222] mb-2">How this helps:</h4>
        <p className="text-sm text-gray-700">
          Anchoring is an NLP technique that creates a neurological link between a stimulus (image + phrase) and a desired state (calm, focus, confidence). By repeatedly pairing the anchor with the state, your brain learns to trigger the state automatically. Use your anchor before meetings, presentations, or stressful moments.
        </p>
      </div>
    </div>
  );
}
