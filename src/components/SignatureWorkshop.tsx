import { Clock, Target, Award, ArrowRight } from 'lucide-react';

export default function SignatureWorkshop() {
  return (
    <section className="py-20 bg-[#2E8F8F] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Signature Workshop: Stress Resilience for Leaders
          </h2>
          <div className="w-20 h-1 bg-[#F5EBDD] mx-auto rounded-full"></div>
          <p className="text-[#F5EBDD] mt-6 text-lg max-w-3xl mx-auto">
            A 3-hour intensive that equips leadership teams with practical techniques to manage stress, make better decisions under pressure, and maintain peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="mr-3" size={28} />
              Workshop Timeline
            </h3>
            <div className="space-y-4">
              {[
                { time: '0:00-0:30', title: 'The Neuroscience of Stress', desc: 'Understanding your stress response and identifying triggers' },
                { time: '0:30-1:15', title: 'Anchoring Calm', desc: 'Build instant-access calm states using NLP techniques' },
                { time: '1:15-2:00', title: 'Reframe Mastery', desc: 'Cognitive reframing exercises for pressure situations' },
                { time: '2:00-2:45', title: 'Decision Protocols', desc: 'Quick decision-making frameworks under stress' },
                { time: '2:45-3:00', title: 'Integration & Practice Plan', desc: '30-day implementation roadmap' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="font-semibold text-[#F5EBDD]">{item.time}</div>
                  <div className="font-bold mt-1">{item.title}</div>
                  <div className="text-sm text-white/80 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 fade-in-delayed">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="mr-3" size={28} />
                Learning Outcomes
              </h3>
              <ul className="space-y-3">
                {[
                  'Identify personal stress triggers and early warning signs',
                  'Create 3 personalized calm anchors you can trigger in seconds',
                  'Apply cognitive reframing to high-pressure situations',
                  'Use rapid decision protocols when stakes are high',
                  'Build a 30-day practice plan for sustained resilience',
                ].map((outcome, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#F5EBDD] mr-3 mt-1">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start mb-4">
                <Award className="mr-3 flex-shrink-0" size={28} />
                <div>
                  <p className="italic text-white/90">
                    "This workshop transformed how our leadership team handles pressure. We saw immediate improvements in decision quality and team morale."
                  </p>
                  <p className="text-[#F5EBDD] font-semibold mt-2">
                    — Sarah Chen, VP Operations, TechCorp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center fade-in">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#2E8F8F] rounded-full font-semibold hover:bg-[#F5EBDD] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Proposal
            <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="text-[#F5EBDD] text-sm mt-4">
            Available for in-person and virtual delivery • Custom pricing for teams
          </p>
        </div>
      </div>
    </section>
  );
}
