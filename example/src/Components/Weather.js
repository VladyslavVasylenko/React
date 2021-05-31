import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="result">
        { this.props.city &&
          <div className="conteiner-style">
            <p>Your city: {this.props.city}, {this.props.country}</p>
            <p>Temp: {this.props.temp} &#8451;</p>
            <p>Temp_min: {this.props.temp_min} &#8451;</p>
            <p>Temp_max: {this.props.temp_max} &#8451;</p>
            <p>Sun rise: {this.props.sunrise} <i className="fas fa-sun"></i></p>
            <p>Sun set: {this.props.sunset} <i className="far fa-sun"></i></p>
            <p>Pressure: {this.props.pressure}</p>
            <p>Humidity: {this.props.humidity}</p>
          </div>
        }
      </div>
      
    )
  }
}

export default Weather;