import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function WorkshopNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the notification in this session
    const dismissed = sessionStorage.getItem('workshopNotificationDismissed');
    
    if (!dismissed) {
      // Show notification after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('workshopNotificationDismissed', 'true');
  };

  const handleLearnMore = () => {
    handleDismiss();
    document.querySelector('#signature-workshop')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={handleDismiss}
      />
      
      {/* Notification Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-fade-in">
        <div className="bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FE6B8B] text-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-white/10 backdrop-blur-sm p-5">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X size={20} />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFE5E5] rounded-full mb-3">
                <Calendar className="text-[#FF6B6B]" size={24} />
              </div>
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Holistic De-stress and Rejuvenation
              </h2>
              <p className="text-sm text-white/90">Two-Day Residential Workshop</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <div className="flex items-start space-x-3">
              <Calendar className="flex-shrink-0 text-[#FFE5E5] mt-1" size={18} />
              <div>
                <p className="font-semibold">December 20th & 21st, 2025</p>
                <p className="text-sm text-white/80">9:30 AM – 4:30 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 text-[#FFE5E5] mt-1" size={18} />
              <div>
                <p className="font-semibold">Claret Nivas Retreat Center</p>
                <p className="text-sm text-white/80">Bengaluru</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-3">
              <a
                href="https://in.bookmyshow.com/events/2-days-holistic-de-stress-workshop-residential/ET00471062"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDismiss}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-[#FF6B6B] rounded-full font-semibold hover:bg-[#FFE5E5] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Now
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
