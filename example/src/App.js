import React from "react";
import Info from "./Components/Info";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "a3dd94570c2459015866b99d862c3f1f";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    temp_min: undefined,
    temp_max: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    
    if(city) {
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      
      let temp = data.main.temp;
      let tempFToCel = Math.floor(temp);

      let temp_min = data.main.temp_min;
      let tempFToCelmin = Math.floor(temp_min);

      let temp_max = data.main.temp_max;
      let tempFToCelmax = Math.floor(temp_max);

      let pressure = data.main.pressure;
      let pressureInMmHg = Math.floor(pressure * 0.75006);

      let sunriseInSec = data.sys.sunrise
      let dates = new Date(sunriseInSec * 1000)
      let timeSunrise = dates.toLocaleTimeString()

      let sunsetInSec = data.sys.sunset
      let date = new Date(sunsetInSec * 1000)
      let timeSunset = date.toLocaleTimeString()

      this.setState({
        temp: tempFToCel,
        temp_min: tempFToCelmin,
        temp_max: tempFToCelmax,
        city: data.name,
        country: data.sys.country,
        sunrise: timeSunrise,
        sunset: timeSunset,
        pressure: pressureInMmHg,
        humidity: ,
        error: "",
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
