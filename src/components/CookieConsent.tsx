import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const { analytics } = JSON.parse(consent);
      setAnalyticsEnabled(analytics);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true }));
    setAnalyticsEnabled(true);
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: false }));
    setAnalyticsEnabled(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <Cookie className="text-[#FF6B6B] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-[#222222] mb-2">Cookie Preferences</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                This site uses cookies to improve your experience. Essential cookies are required for basic functionality. Analytics cookies (optional) help us understand how you use the site.{' '}
                <a href="#" className="text-[#FF6B6B] hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleEssentialOnly}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#FF8E53] transition-all duration-300 whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
