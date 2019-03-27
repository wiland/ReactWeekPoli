import React from "react";
import PropTypes from "prop-types";

const Badge = props => {
  return (
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Citas Programadas</span>
      <span className="badge badge-secondary badge-pill bg-success text-white lh-100">
        {props.datesCounter}
      </span>
    </h4>
  );
}

Badge.propTypes = {
  datesCounter: PropTypes.number
}

export default Badge;