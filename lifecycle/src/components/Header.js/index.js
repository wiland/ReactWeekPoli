import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import './Header.scss';

export default class Header extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }

  constructor(props) {
    console.log("Header: constructor()");
    
    super(props);
    this.state = {
      message: "Welcome!",
      type: "primary",
      showMessage: true
    };
  }

  componentDidMount() {
    console.log("Header: componentDidMount()");
  }

  componentDidUpdate() {
    console.log("Header: componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("Header: componentWillUnmount()");
  }

  toogleMessageDisplay = () => {
    this.setState({
      showMessage: !this.state.showMessage
    })
  }

  render() {
    console.log("Header: render()");
    const { name, year } = this.props;
    
    return (
      <Fragment>
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
          <img className="mr-3" src="https://pngimage.net/wp-content/uploads/2018/05/expenses-icon-png-6.png" alt="" width="48" height="48"/>
          <div className="lh-100">
            <h6 className="mb-0 text-white lh-100">{name}</h6>
            <small>{year}</small>
          </div>
        </div>
      </Fragment>
    )
  }
}
