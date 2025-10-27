import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Offerings from './components/Offerings';
import SignatureWorkshop from './components/SignatureWorkshop';
import MicroGames from './components/MicroGames';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Offerings />
      <SignatureWorkshop />
      <MicroGames />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
      <FloatingButton />
      <CookieConsent />
    </div>
  );
}

export default App;
