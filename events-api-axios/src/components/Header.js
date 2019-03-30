import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  let categoryRef = React.createRef();
  let eventRef = React.createRef();

  function handleSearch() {
    const category = categoryRef.current.value;
    const query = eventRef.current.value;
    
    props.searchEvent(category, query);
  }

  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm flex-md-nowrap rounded">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              aria-hidden="true"
              className="mr-2"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>Eventos</strong>
          </a>
        </div>
        <input
          className="form-control mr-sm-2 form-control-sm"
          type="text"
          placeholder="Evento"
          aria-label="Evento"
          ref={eventRef}
        />
        <select className="form-control mr-sm-2 form-control-sm" ref={categoryRef}>
        <option value="">--Selecciona--</option>
          {props.categories.map(category => 
            <option key={category.id} value={category.id}>{category.name_localized}</option>
          )}
        </select>
        <button
          className="btn btn-outline-success my-2 my-sm-0 w-50"
          type="button"
          onClick={handleSearch}
          disabled={props.isLoading}
        >
          {props.isLoading && 
          <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> }
          Buscar
				</button>
      </div>
    </header>
  )
}

Header.propTypes = {
  searchEvent: PropTypes.func.isRequired,
  categories: PropTypes.array
}

Header.defaultProps = {
  categories: []
}

export default Header
