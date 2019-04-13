import React from "react";
import PropTypes from "prop-types";

const Grade = ({grade}) => {

  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.total}</td>
      <td>{grade.total >= 3 ? "Ganó" : "Perdió"}</td>
    </tr>
  );
}

Grade.propTypes = {
  grade: PropTypes.object.isRequired
}

export default Grade;