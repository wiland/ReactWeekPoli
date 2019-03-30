
import React from 'react'
import PropTypes from 'prop-types'

const Alert = props => {
  return (
    <div className="d-flex justify-content-center w-100 mt-3">
      <div className={`alert alert-${props.type}`} role="alert">
        {props.children}
      </div>
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string
}

Alert.defaultProps = {
  type: "primary"
}

export default Alert
