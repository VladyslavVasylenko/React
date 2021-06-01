import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="form-fon">
        <form className="form " onSubmit={this.props.weatherMethod}>
        <input className="form__input anim-typewriter"  type="text" name="city" placeholder="Your city"/>
        <button className="form__btn bounceInRight wow">Get Weather</button>
      </form> 
      </div>
    )
  }
}

export default Form;