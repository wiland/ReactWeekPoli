import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    email: ""
  }

  updateEmailState = (email) => {
    this.setState({
      email
    }, this.sendEmail);
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;

    if (name === "email") {
      this.updateEmailState(value)
    } else {
      this.setState({
        [name]: value
      }, this.sendEmail)
    }
  }

  handleClear = () => {
    this.updateEmailState("");
  }

  sendEmail = () => {
    if (this.props.onEmailChange) {
      this.props.onEmailChange(this.state.email);
    }
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleInputChange} value={this.state.email} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.sendEmail}>Send</button>
        <button type="button" className="btn btn-secondary ml-2" onClick={this.handleClear}>Clear</button>

        <div className="alert alert-success mt-3" role="alert">
          Email: { this.state.email }
        </div>
      </form>
    )
  }
}
