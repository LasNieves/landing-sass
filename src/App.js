import CardContent from './components/CardContent';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Testimonios from './components/Testimonios';
import logo from './logo.svg';
import './sass/index.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{height: "70px"}} className='w-100'></div>
      <MainContent />
      <CardContent />
      <Testimonios />
      <Cta />
      <div style={{height:"100px"}} className="max-width-100"></div>
      <Footer />
      <div style={{height:"200px"}} className="max-width-100"></div>
    </div>
  );
}

export default App;
