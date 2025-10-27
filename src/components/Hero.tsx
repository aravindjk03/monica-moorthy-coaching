import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToGames = () => {
    const element = document.querySelector('#games');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden bg-gradient-to-b from-[#F5EBDD]/30 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="breathing-rings absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left fade-in">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#222222] mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Train your mind. Reclaim calm. Get measurable change.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            NLP-based coaching & workshops for leaders, creators, and stressed professionals — practical, science-aligned, and fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="[CALENDLY_LINK]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Free 15-min Call
              <ArrowRight className="ml-2" size={20} />
            </a>
            <button
              onClick={scrollToGames}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2E8F8F] border-2 border-[#2E8F8F] rounded-full font-semibold hover:bg-[#2E8F8F] hover:text-white transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Try a 60s Calm Game
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic">
            15 minutes, zero sales pressure. We diagnose, you decide.
          </p>
        </div>

        <div className="flex justify-center md:justify-end fade-in-delayed">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-[#2E8F8F] to-[#257070] rounded-3xl shadow-2xl p-8 flex flex-col justify-end hover:scale-105 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-32 h-32 bg-[#F5EBDD] rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                  👤
                </div>
                <h3 className="text-white text-center font-semibold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Monica Moorthy
                </h3>
                <p className="text-white/90 text-center text-sm mt-2">
                  NLP Trainer & Psych Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
