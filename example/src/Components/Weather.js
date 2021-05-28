import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="result">
        { this.props.city &&
          <div>
            <p>Your city: {this.props.city}, {this.props.country}</p>
            <p>Temp: {this.props.temp} &#8451;</p>
            <p>Sun rise: {this.props.sunrise}</p>
            <p>Sun set: {this.props.sunset}</p>
            <p>Pressure: {this.props.pressure} deg.</p>
          </div>
        }
      </div>
      
    )
  }
}

export default Weather;