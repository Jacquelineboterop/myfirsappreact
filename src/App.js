import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Mi primera Aplicación</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
        Esta es mi primera aplicación en React, está padrísimo! <code>src/App.js</code>
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
