import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Mi primera aplicación</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
        Esta es mi primera aplicación en React, está padrísimo! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
