import logo from './logo.svg';
import './App.css';

const textStyle = {
  color: 'red',
}

const textStylesl = {
  color: 'green',
}

const textStyles = {
  color: '#03f',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={textStyles}>
          Edit <code style={textStyle}>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={textStylesl}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
