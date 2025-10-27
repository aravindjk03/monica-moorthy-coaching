import { useState } from 'react';
import { Download, Mail, CheckCircle } from 'lucide-react';

export default function Resources() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Lead magnet signup:', formData);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', organization: '' });
    }, 5000);
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-[#F5EBDD]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Free Resources
          </h2>
          <div className="w-20 h-1 bg-[#2E8F8F] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="bg-gradient-to-br from-[#2E8F8F] to-[#257070] rounded-3xl p-8 text-white shadow-2xl">
              <Download className="mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                7-Day Mind Reset
              </h3>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                Get instant access to a complete reset program designed for busy professionals.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'PDF workbook with daily exercises',
                  '3 guided audio practices (breath work, reframing, anchoring)',
                  '7-day implementation roadmap',
                  'Bonus: Quick-reference calm triggers sheet',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-sm text-white/90">
                  Join 2,400+ professionals who've started their mind reset journey. No spam, just practical tools.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-delayed">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="mb-6">
                  <Mail className="text-[#2E8F8F] mb-4" size={40} />
                  <h3 className="text-2xl font-bold text-[#222222] mb-2">
                    Get Your Free Reset Kit
                  </h3>
                  <p className="text-gray-600">
                    Enter your details below to receive instant access.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization (Optional)
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2E8F8F] focus:outline-none transition-colors"
                      placeholder="Your company or org"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#2E8F8F] text-white rounded-full font-semibold hover:bg-[#257070] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Get Instant Access
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By signing up, you agree to receive occasional emails with tips and resources. Unsubscribe anytime.
                  </p>
                </div>

                <input type="hidden" name="form-action" value="[MAILCHIMP_FORM_ACTION]" />
              </form>
            ) : (
              <div className="bg-green-50 rounded-3xl p-8 shadow-xl border-2 border-green-200 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
                <h3 className="text-2xl font-bold text-[#222222] mb-4">
                  Thanks — check your email (and spam)!
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your 7-Day Mind Reset kit is on its way. Check your inbox in the next few minutes. If you don't see it, check your spam folder.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
