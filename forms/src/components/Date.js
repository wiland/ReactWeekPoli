import React from "react";
import PropTypes from "prop-types";

const Date = ({date}) => {

  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{`${date.name} ${date.lastName}`}</h6>
        <small className="text-muted">{`${date.date} - ${date.time}`}</small>
      </div>
      <span className="text-muted">Prioridad {date.priority}</span>
    </li>
  );
}

Date.propTypes = {
  date: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    priority: PropTypes.string
  }).isRequired
}

export default Date;