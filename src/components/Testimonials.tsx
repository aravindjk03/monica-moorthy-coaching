import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Video } from 'lucide-react';

const testimonials = [
  {
    quote: "This workshop transformed how our leadership team handles pressure. We saw immediate improvements in decision quality and team morale. The techniques are practical and actually work.",
    name: "Sarah Chen",
    role: "VP Operations",
    company: "TechCorp",
  },
  {
    quote: "I was skeptical about NLP, but the breath anchor technique genuinely changed my stress response. I use it before every client presentation now. Simple, fast, effective.",
    name: "Marcus Rodriguez",
    role: "Senior Consultant",
    company: "Strategy Partners",
  },
  {
    quote: "After years of traditional therapy, these practical tools gave me immediate results. The reframing exercises became second nature within weeks. My team noticed the difference in my leadership presence.",
    name: "Jennifer Kim",
    role: "Founder & CEO",
    company: "StartupLab",
  },
  {
    quote: "The digital program was worth every penny. The audios and workbook gave me a 30-day reset plan I could actually follow. Stress levels dropped measurably, sleep improved, and I feel sharper at work.",
    name: "David Thompson",
    role: "Engineering Director",
    company: "CloudScale",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#F5EBDD]/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What People Say
          </h2>
          <div className="w-20 h-1 bg-[#2E8F8F] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl fade-in">
            <Quote className="absolute top-6 left-6 text-[#2E8F8F]/20" size={60} />

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{current.quote}"
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-[#222222] text-lg">{current.name}</p>
                <p className="text-[#2E8F8F] font-semibold">{current.role}</p>
                <p className="text-gray-600 text-sm">{current.company}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#F5EBDD] hover:bg-[#2E8F8F] hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-[#2E8F8F]' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#F5EBDD] hover:bg-[#2E8F8F] hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2E8F8F] to-[#257070] rounded-3xl p-8 md:p-12 shadow-xl text-white fade-in-delayed">
            <Video className="mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Video Testimonials
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Hear directly from clients about their transformation journey. See real results from real people using NLP techniques in high-pressure environments.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl aspect-video flex items-center justify-center mb-6 border border-white/20">
              <div className="text-center">
                <Video className="mx-auto mb-4" size={60} />
                <p className="text-sm text-white/80">Video testimonials coming soon</p>
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-white text-[#2E8F8F] rounded-full font-semibold hover:bg-[#F5EBDD] transition-all duration-300">
              Watch More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
