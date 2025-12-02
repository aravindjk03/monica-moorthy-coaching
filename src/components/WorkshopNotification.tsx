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
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-fade-in">
        <div className="bg-gradient-to-br from-[#2E8F8F] to-[#236969] text-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-white/10 backdrop-blur-sm p-6 pb-4">
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5EBDD] rounded-full mb-4">
                <Calendar className="text-[#2E8F8F]" size={32} />
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Limited Seats Available!
              </h2>
              <p className="text-[#F5EBDD] text-lg font-semibold">
                Holistic De-Stress and Reset Workshop
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <Calendar className="flex-shrink-0 text-[#F5EBDD] mt-1" size={20} />
              <div>
                <p className="font-semibold">December 20th & 21st, 2025</p>
                <p className="text-sm text-white/80">9:30 AM – 4:30 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 text-[#F5EBDD] mt-1" size={20} />
              <div>
                <p className="font-semibold">Claret Nivas Retreat Center</p>
                <p className="text-sm text-white/80">Sarjapur – Marathahalli Road, Bengaluru</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-4">
              <p className="text-sm text-white/90 italic">
                A two-day transformational experience blending neuroscience, expressive arts, movement therapy, and deep relaxation techniques.
              </p>
            </div>

            <div className="bg-[#F5EBDD]/20 border border-[#F5EBDD]/30 rounded-xl p-4">
              <p className="text-sm font-semibold text-[#F5EBDD]">
                🎉 Special Event: Campfire / Dance Party
              </p>
              <p className="text-sm text-white/90 mt-1">
                December 20th, 6:00 PM – 7:00 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleLearnMore}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-[#2E8F8F] rounded-full font-semibold hover:bg-[#F5EBDD] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </button>
              <a
                href="https://in.bookmyshow.com/events/2-days-holistic-de-stress-workshop-residential/ET00471062"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDismiss}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#F5EBDD] text-[#2E8F8F] rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Now
              </a>
            </div>

            <p className="text-xs text-center text-white/70 mt-3">
              Inclusive of food, accommodation, and materials
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
