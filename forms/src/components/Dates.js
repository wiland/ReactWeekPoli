import React, { Component } from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";
import Date from "./Date";

export default class Dates extends Component {
  render() {
    return (
      <div className="col-md-5 order-md-2 mb-4">
        <Badge datesCounter={this.props.dates.length} />
        <ul className="list-group mb-3">
          {this.props.dates.map(date => <Date key={date.id} date={date}/>)}
        </ul>
      </div>
    );
  }
}

Dates.propTypes = {
  dates: PropTypes.array.isRequired
}