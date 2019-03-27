import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-success rounded shadow-sm">
          <img
            className="mr-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgNdL-CRAvoRfpW6e-INI4HInG78niHI1pY2hPKxT5PczdLV5"
            alt={this.props.title}
            width="48"
            height="48"
          />
          <div className="lh-100">
            <h6 className="mb-0 text-white lh-100">{this.props.title}</h6>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
