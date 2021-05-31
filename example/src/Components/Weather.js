import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="result">
        { this.props.city &&
          <div>
            <h2 className="title-result">Your city: {this.props.city}, {this.props.country}</h2>
            <div className="conteiner-style">
              <div>
                <p>Temp: {this.props.temp} &#8451;</p>
                <p>Temp_min: {this.props.temp_min} &#8451;</p>
                <p>Temp_max: {this.props.temp_max} &#8451;</p>
              </div>
              <div>
                <p>Sun rise: {this.props.sunrise} <i className="fas fa-sun"></i></p>
                <p>Sun set: {this.props.sunset} <i className="far fa-sun"></i></p>
              </div>
              <div>
                <p>Pressure: {this.props.pressure}</p>
                <p>Humidity: {this.props.humidity}</p>
              </div>
            </div>
          </div>
        }
      </div>
      
    )
  }
}

export default Weather;