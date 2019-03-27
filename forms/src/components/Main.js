import React, { Component } from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import Dates from "./Dates";
import Footer from "./Footer";

export default class Main extends Component {
  state = {
    dates: []
  }

  addDate = (newDate) => {
    this.setState({
      dates: [ ...this.state.dates, newDate ]
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="Registro de citas"/>
        <div className="row">
          <SignUp addDate={this.addDate} />
          <Dates dates={this.state.dates} />
        </div>
        <Footer />
      </div>
    );
  }
}
