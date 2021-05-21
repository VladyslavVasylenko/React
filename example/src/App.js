import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Goods from './Goods';

const textStyle = {
  color: 'red',
}

const textStylesl = {
  color: 'green',
}

const textStyles = {
  color: '#03f',
}

const headerData = {
  sitename: 'my test site name',
  nav: [
    {"link" : "nav1", "text" : "my link"},
    {"link" : "nav2", "text" : "my link2"},
    {"link" : "nav3", "text" : "my link3"},
  ]
}

const goods = [
  {"title" : "apple", "text" : "1000 g. cost: ", "cost" : 300, "val" : " $ ", "image" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-512.png"},
  {"title" : "pear", "text" : "1000 g. cost: ", "cost" : 500, "val" : " $ ", "image" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-512.png"},
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header data={headerData}/>
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
        <div>
          {goods.map( item => <Goods key={item.title} text={item.text} cost={item.cost} val={item.val} image={item.image} />)}
        </div>
      </header>
    </div>
  );
}

export default App;
