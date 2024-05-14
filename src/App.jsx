import Navbar from './components/header/navbar';
import Hero from './components/hero/hero';
import Features from './components/features/features';
import Download from './components/download /download';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-col font-rubik">
        <Faq />
        <Hero />
        <Features />
        <Download />
      </div>
      <Footer />
    </>
  );
}

export default App;
