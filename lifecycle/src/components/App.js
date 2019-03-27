import React, { Component } from 'react'
import Header from './Header.js';
import ExpenseInput from './ExpenseInput/index.js';
import Expenses from './Expenses/index.js';

export default class App extends Component {
  state = {
    name: "Expenses",
    year: new Date().getFullYear()
  }

  componentDidMount() {
    console.log("App: componentDidMount()");
  }

  componentDidUpdate() {
    console.log("App: componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("App: componentWillUnmount()");
  }

  render() {
    console.log("App: render()");

    return (
      <div className="container">
        <Header {...this.state} />
        <section className="row">
          <section className="col-md-5 p-4">
            <ExpenseInput />
          </section>
          <section className="col-md-7 p-4">
            <Expenses />
          </section>
        </section>
      </div>
    )
  }
}
