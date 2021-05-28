import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-fon">
        <form className="form" onSubmit={this.props.weatherMethod}>
        <input className="form"  type="text" name="city" placeholder="Your city"/>
        <button className="form" >Get Weather</button>
      </form> 
      </div>
    )
  }
}

export default Form;