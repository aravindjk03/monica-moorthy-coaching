import { Clock, Target, Award, ArrowRight, MapPin, Calendar, Users, Palette, Music, Brain, Wind, TreePine, MessageCircle } from 'lucide-react';

export default function SignatureWorkshop() {
  return (
    <section id="signature-workshop" className="py-20 bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FE6B8B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Signature Workshop: Holistic De-stress and Rejuvenation
          </h2>
          <p className="text-xl font-semibold text-[#FFE5E5] mb-2">
            A Two-Day Transformational Workshop for Mind–Body Renewal (Residential)
          </p>
          <div className="w-20 h-1 bg-[#FFE5E5] mx-auto rounded-full"></div>
          <p className="text-white mt-6 text-lg max-w-3xl mx-auto italic">
            Step away from stress. Step into self-expression.
          </p>
          <p className="text-[#FFE5E5] mt-4 text-lg max-w-3xl mx-auto">
            This two-day inbound and outbound experiential workshop blends science and creativity to help participants release stress, restore balance, and reconnect with inner calm. Through neuroscience, expressive arts, movement, relaxation methods, and NLP, participants learn how to reset the mind and body from within.
          </p>
        </div>

        {/* Workshop Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Calendar className="mx-auto mb-3" size={32} />
            <h4 className="font-bold text-lg mb-2">Workshop Dates</h4>
            <p className="text-[#FFE5E5]">December 20th & 21st, 2025</p>
            <p className="text-sm mt-1">9:30 AM – 4:30 PM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MapPin className="mx-auto mb-3" size={32} />
            <h4 className="font-bold text-lg mb-2">Venue</h4>
            <p className="text-[#FFE5E5]">Claret Nivas Retreat Center</p>
            <p className="text-sm mt-1">Sarjapur – Marathahalli Road, Bengaluru</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="mx-auto mb-3" size={32} />
            <h4 className="font-bold text-lg mb-2">Special Event</h4>
            <p className="text-[#FFE5E5]">Campfire / Dance Party</p>
            <p className="text-sm mt-1">December 20th, 6:00 PM – 7:00 PM</p>
          </div>
        </div>

        {/* The Neuroscience of Stress */}
        <div className="mb-12 fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Brain className="mr-3" size={32} />
              The Neuroscience of Stress
            </h3>
            <p className="text-white/90 text-lg">
              Understand what happens in the brain and body when stress takes over — how the amygdala triggers fear, the prefrontal cortex shuts down, and the body holds tension. Through guided practices, participants learn how to regulate stress responses, activate relaxation pathways, and create new neural patterns of calm and confidence.
            </p>
          </div>
        </div>

        {/* Workshop Highlights */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center fade-in">
            Workshop Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6 fade-in">
            {[
              {
                icon: Palette,
                title: 'Expressive Arts Therapy',
                description: 'Use painting, drawing, and symbolic expression to release internal pressure and gain creative insight.',
              },
              {
                icon: Music,
                title: 'Creative Movement Therapy',
                description: 'Use movement and rhythm to process emotions, build body awareness, and experience joy.',
              },
              {
                icon: Wind,
                title: 'Relaxation Journeys',
                description: 'Guided deep relaxation sessions to rewire subconscious stress loops and enable profound mind–body calm.',
              },
              {
                icon: Brain,
                title: 'NLP-Based Techniques',
                description: 'Learn reframing and language tools to shift negative thoughts and emotional responses.',
              },
              {
                icon: TreePine,
                title: 'Mindfulness in Nature',
                description: 'Outdoor grounding activities and reflection practices that connect participants with natural calm.',
              },
              {
                icon: MessageCircle,
                title: 'Sharing Circles & Guided Reflection',
                description: 'Build connection, empathy, and insight through expressive sharing and structured reflection.',
              },
            ].map((highlight, idx) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <IconComponent className="mr-4 flex-shrink-0 text-[#FFE5E5]" size={28} />
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-[#FFE5E5]">{highlight.title}</h4>
                      <p className="text-white/90">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="mb-12 fade-in">
          <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
            <Target className="mr-3" size={32} />
            Key Outcomes
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg mb-4">Participants will:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Understand the neuroscience of stress and regulate it consciously',
                'Learn somatic and creative tools for releasing emotional and mental tension',
                'Experience deep relaxation and self-guided calming techniques',
                'Use NLP reframing to shift emotional and mental patterns',
                'Enhance body–mind awareness using movement and breath',
                'Improve focus, emotional stability, and resilience',
                'Reconnect with creativity, joy, and purpose',
                'Leave with a personal de-stress toolkit to maintain calm beyond the workshop',
              ].map((outcome, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#FFE5E5] mr-3 mt-1 text-xl">✓</span>
                  <span className="text-white/90">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who Can Attend */}
        <div className="mb-12 fade-in">
          <h3 className="text-3xl font-bold mb-6 text-center">Who Can Attend</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Working professionals and leaders seeking sustainable stress management',
              'Educators, therapists, and facilitators exploring creative healing tools',
              'Individuals seeking personal renewal, emotional clarity, and inner balance',
            ].map((audience, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-white/90">{audience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-12 fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start">
              <Award className="mr-4 flex-shrink-0 text-[#FFE5E5]" size={32} />
              <div>
                <h3 className="text-2xl font-bold mb-4">Testimonials & Feedback</h3>
                <p className="italic text-white/90 text-lg">
                  Hear what participants have to say about their transformational experiences.
                </p>
                <p className="text-[#FFE5E5] mt-3">Video testimonials available upon request.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-12 fade-in">
          <p className="text-2xl md:text-3xl font-bold text-[#FFE5E5] italic">
            Relax. Reflect. Rewire. Reconnect.
          </p>
          <p className="text-lg mt-3 text-white/90">
            Step into a journey where science meets creativity — and calm becomes your natural state.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
          <a
            href="https://in.bookmyshow.com/events/2-days-holistic-de-stress-workshop-residential/ET00471062"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#FF6B6B] rounded-full font-semibold hover:bg-[#FFE5E5] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Now on BookMyShow
            <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="text-[#FFE5E5] text-sm mt-4">
            Inclusive of food, accommodation, and materials • Secure online booking
          </p>
          <div className="mt-6 text-sm">
            <p>For Clarifications:</p>
            <p className="text-[#FFE5E5] font-semibold">
              Email: monicamoorthy@gmail.com | Phone: +91 9894190664
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

