import { User, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function Offerings() {
  const offerings = [
    {
      icon: <User size={40} />,
      title: '1:1 Coaching',
      outcome: 'Build lasting mental agility and break limiting patterns in 6-12 sessions',
      features: [
        'Personalized NLP protocols tailored to your goals',
        'Weekly 60-minute deep-work sessions',
        'Practice audios and custom anchor exercises',
      ],
      pricing: 'From $250/session',
    },
    {
      icon: <Users size={40} />,
      title: 'Corporate Workshops',
      outcome: 'Equip your team with stress resilience, leadership presence, and agile thinking',
      features: [
        'Stress Resilience Module: 3-hour intensive',
        'Leadership Presence: Executive communication training',
        'Mental Agility: Decision-making under pressure',
      ],
      pricing: 'Custom pricing for teams',
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Digital Programs',
      outcome: 'Self-paced learning with guided practices and downloadable tools',
      features: [
        '7-day Mind Reset: Audio + workbook + daily exercises',
        'Anchor Mastery Course: Build calm triggers in 14 days',
        'Lifetime access + community support',
      ],
      pricing: 'From $97',
    },
  ];

  return (
    <section id="offerings" className="py-20 bg-gradient-to-b from-white to-[#F5EBDD]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Work With Me
          </h2>
          <div className="w-20 h-1 bg-[#2E8F8F] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#2E8F8F] mb-6">{offering.icon}</div>

              <h3
                className="text-2xl font-bold text-[#222222] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {offering.title}
              </h3>

              <p className="text-[#2E8F8F] font-semibold mb-6 text-lg">
                {offering.outcome}
              </p>

              <ul className="space-y-3 mb-8">
                {offering.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-[#2E8F8F] mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">{offering.pricing}</p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300"
                >
                  Enquire
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
