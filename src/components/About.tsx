import { Brain, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in order-2 md:order-1">
            <div className="mb-8 flex justify-center md:hidden">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#A855F7] shadow-xl">
                <img
                  src="/monica-moorthy-coaching/images/monica.jpg"
                  alt="Monica Moorthy - NLP Trainer & Psychology Coach"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm an NLP trainer and psychology coach who helps high-performers break stress patterns and build sustainable mental agility. My approach combines Neuro-Linguistic Programming, behavioral design, and evidence-based techniques to create short, repeatable practices that change behavior.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With 5+ years of training experience and 7+ years of corporate experience, I've trained several individuals and coached them on a spectrum of areas. I've learned that lasting change doesn't require months of therapy. It requires the right tools, practiced consistently, in the right context. My workshops and 1:1 sessions focus on fast intervention, measurable outcomes, and techniques you can apply immediately.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I hold certifications in NLP Master Practitioner, Applied Psychology, and Mindfulness-Based Stress Reduction. My clients include executives at Fortune 500 companies, creative professionals, and startup founders who need to perform under pressure without burning out.
            </p>
          </div>

          <div className="space-y-6 fade-in-delayed order-1 md:order-2">
            <div className="hidden md:block mb-8">
              <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-[#A855F7] shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src="/monica-moorthy-coaching/images/monica.jpg"
                  alt="Monica Moorthy - NLP Trainer & Psychology Coach"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F3E8FF] to-[#FCE7F3] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Brain className="text-[#8B5CF6] mb-4" size={40} />
              <h3 className="text-xl font-semibold text-[#222222] mb-2">NLP & Neuroscience</h3>
              <p className="text-gray-700">
                Applying brain science to rewrite limiting beliefs and install empowering patterns that stick.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F3E8FF] to-[#FCE7F3] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Heart className="text-[#EC4899] mb-4" size={40} />
              <h3 className="text-xl font-semibold text-[#222222] mb-2">Experiential Learning</h3>
              <p className="text-gray-700">
                Hands-on exercises and micro-practices you can use immediately — no theory overload.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F3E8FF] to-[#FCE7F3] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Zap className="text-[#A855F7] mb-4" size={40} />
              <h3 className="text-xl font-semibold text-[#222222] mb-2">Fast Intervention</h3>
              <p className="text-gray-700">
                Designed for busy professionals: efficient sessions that create lasting shifts in weeks, not years.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center fade-in">
          <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#A855F7] pl-6 py-2 inline-block text-left max-w-3xl">
            "I blend NLP, behavioral design, and evidence-based techniques to create short, repeatable practices that change behavior."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
