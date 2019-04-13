import React from 'react'
import PropTypes from 'prop-types'

function UserBrowser(props) {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const studentId = formData.get("user");
    props.getStudentInfo(studentId);
  }

  return (
    <div className="w-100 mt-2 bg-light text-center rounded p-2">
      <form className="form-inline" onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="user" className="">Usuario</label>
          <div className="input-group mr-sm-2 ml-2">
            <div className="input-group-prepend">
              <div className="input-group-text">{"\u{1F453}"}</div>
            </div>
            <input type="text" name="user" placeholder="Documento" className="form-control" id="user" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
        <div className="form-group ml-2 w-50">
          <input type="text" className="form-control w-100" value={props.studentName} />
        </div>
      </form>
    </div>
  )
}

UserBrowser.propTypes = {
  getStudentInfo: PropTypes.func.isRequired,
  studentName: PropTypes.string
}

export default UserBrowser;

