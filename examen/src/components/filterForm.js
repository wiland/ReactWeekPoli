import React from 'react'
import PropTypes from 'prop-types'

function FilterForm(props) {
  const onSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userId = formData.get("user");
    const type = formData.get("type");

    props.filterGrades(userId, type)
  }

  return (
    <div className="w-100 bg-light text-center rounded p-2">
      <form className="form" onSubmit={onSearch}>
        <div className="form-group">
          <label htmlFor="user" className="">Usuario</label>
          <div className="input-group ml-2 mr-2 pr-3">
            <div className="input-group-prepend">
              <div className="input-group-text">{"\u{1F453}"}</div>
            </div>
            <input type="text" name="user" placeholder="Documento" className="form-control" id="user" />
          </div>
        </div>
        <div className="d-flex justify-content-around mb-2">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" value="win" />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Ganaron
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" value="lose" />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Perdieron
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" value="all" defaultChecked />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Todos
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Filtrar</button>
      </form>
    </div>
  )
}

FilterForm.propTypes = {
  filterGrades: PropTypes.func
}

export default FilterForm

