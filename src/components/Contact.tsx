import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'coaching',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Contact form submission:', formData);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', interest: 'coaching' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#2E8F8F] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to start your transformation? Have questions about workshops or coaching? Let's talk.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-gradient-to-br from-[#F5EBDD]/30 to-white rounded-3xl p-8 shadow-xl border border-gray-100 fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
                  >
                    <option value="coaching">1:1 Coaching</option>
                    <option value="workshop">Corporate Workshop</option>
                    <option value="digital">Digital Program</option>
                    <option value="resource">Free Resource</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your goals, challenges, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-green-50 rounded-3xl p-12 shadow-xl border-2 border-green-200 text-center fade-in">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold text-[#222222] mb-4">
                Message Sent!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Thanks for reaching out. I'll respond within 24 hours. Check your email for a confirmation.
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Or reach me directly:</p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center text-[#2E8F8F] hover:text-[#257070] font-semibold transition-colors"
            >
              <Mail className="mr-2" size={20} />
              hello@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
