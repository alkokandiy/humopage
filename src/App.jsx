import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import CarSection from './components/CarSection';
import Sponsors from './components/Sponsors';
import Partners from './components/Partners';
import Join from './components/Join';
import Achievements from './components/Achievements';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="ink-fill min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <CarSection />
        <Sponsors />
        <Partners />
        <Join />
        <Achievements />
        <News />
      </main>
      <Footer />
    </div>
  );
}