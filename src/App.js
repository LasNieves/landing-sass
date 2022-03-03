import logo from './logo.svg';
import './sass/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          No manchen la historia, ganen o mueran
        </p>
        <div className='bg-info font-sm container-sm'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3 bg-primary'>
              <p>Putos: pongan huevos, o el pecho para las balas</p>
            </div>
          </div>
        </div>
        <a
          className="App-link"
          href="https://sports-images.vice.com/images/2016/04/20/untitled-article-1461167608-body-image-1461168053.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ganen o hay bala, venimos por el club, no por ustedes
        </a>
      </header>
    </div>
  );
}

export default App;
