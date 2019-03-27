import React, { Component } from 'react'
import Login from './Login';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: props.clicks,
      email: ""
    }
  }

  onClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  changeEmail = (email) => {
    this.setState({email});
  }

  render() {
    const { clicks, email } = this.state;
    return (
      <div className="container">
        <h1>Main file</h1>
        <button type="button" className="btn btn-primary" onClick={this.onClick}>
          Notifications <span className="badge badge-light">{clicks}</span>
        </button>
        <div className="alert alert-primary mt-3" role="alert">
          Email from child: {email}
        </div>
        <Login onEmailChange={this.changeEmail}/>
      </div>
    )
  }
}
