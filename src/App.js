import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import logo from './logo.svg';
import './sass/index.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{height: "70px"}} className='w-100'></div>
      <MainContent />
    </div>
  );
}

export default App;
