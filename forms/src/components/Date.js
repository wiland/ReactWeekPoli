import React from "react";
import PropTypes from "prop-types";

const Date = ({date, deleteDate}) => {

  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{`${date.name} ${date.lastName}`}</h6>
        <small className="text-muted">{`${date.date} - ${date.time}`}</small>
      </div>
      <div className="d-flex flex-column align-items-end">
        <span className="my-0 text-muted">Prioridad {date.priority}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={e => deleteDate(date.id)}>Eliminar</button>
      </div>
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