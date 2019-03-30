import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'
import Alert from './Alert';

const Events = props => {
  if (!props.events) return null;

  return (
    <div className="row mb-2 pt-2">
      {props.events.length > 0 
        ? props.events.map(event => <Event key={event.id} event={event} />)
        : <Alert type="secondary">No se encontraron eventos {"\u{1F614}"}</Alert>
      }
    </div>
  )
}

Events.propTypes = {
  events: PropTypes.array
}

export default Events
