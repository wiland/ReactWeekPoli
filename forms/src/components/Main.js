import React, { Component } from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import Dates from "./Dates";
import Footer from "./Footer";

export default class Main extends Component {
  state = {
    dates: []
  }

  constructor(props) {
    super(props);
    const dates = localStorage.getItem("dates");
    if (dates) {
      this.state = {
        dates: JSON.parse(dates)
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("dates", JSON.stringify(this.state.dates));
    }
  }

  addDate = (newDate) => {
    this.setState({
      dates: [ ...this.state.dates, newDate ]
    })
  }

  deleteDate = id => {
    this.setState({
      dates: this.state.dates.filter(date => date.id !== id)
    })
  }

  render() {
    return (
      <div className="container">
        <Header title="Registro de citas"/>
        <div className="row">
          <SignUp addDate={this.addDate} />
          <Dates dates={this.state.dates} deleteDate={this.deleteDate}/>
        </div>
        <Footer />
      </div>
    );
  }
}
