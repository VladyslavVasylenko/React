import React from "react";
import Info from "./Components/Info";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "a3dd94570c2459015866b99d862c3f1f";

class App extends React.Component {

  state = {
    
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const api_url = await 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    )
  }
}

export default App;
