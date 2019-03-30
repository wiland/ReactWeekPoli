import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div className="row">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">News Colombia</h1>
        </div>
        <div className="col-md-6 px-0 d-flex align-items-center">
          <div className="input-group">
            <select
              className="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              onChange={e => props.onCategoryChange(e.target.value)}
            >
              <option value="">-- All --</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="general">General</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
            <div className="input-group-append">
              <span class="input-group-text">Categoría</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  onCategoryChange: PropTypes.func.isRequired
}

export default Header;

