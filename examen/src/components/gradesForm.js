import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';

export default class GradesForm extends Component {
  static propTypes = {
    addGrade: PropTypes.func.isRequired
  }

  defaultState = {
    grade: {
      userId: "",
      name: "",
      partial: 0,
      final: 0,
      general: 0,
      total: 0
    }
  }

  state = {
    grade: this.defaultState.grade,
    isValid: true,
    duplicated: false
  }

  calculateTotal() {
    const {partial, final, general} = this.state.grade;
    
    const total = (Number(partial) * 0.25 + Number(final) * 0.25 + Number(general) * 0.5);

    this.setState({
      grade: { ...this.state.grade, total }
    })
  }

  handleInputChange = event => {
    const { name: fieldName, value } = event.target;

    if (fieldName === "total") return;

    this.setState({
      grade: {
        ...this.state.grade,
        [fieldName]: value
      }
    }, () => {
      if (fieldName === "partial"
        || fieldName === "final"
        || fieldName === "general") {

        this.calculateTotal();
      }
    });
  };

  addGrade = (e) => {
    const {userId, name, partial, final, general, total} = this.state.grade;
    if (userId !== "" && name !== "" 
      && ( partial >= 0 && partial <= 5)
      && ( final >= 0 && final <= 5)
      && ( general >= 0 && general <= 5)
      && ( total >= 0 && total <= 5)) {

      const duplicated = this.props.addGrade({...this.state.grade});

      if (!duplicated) {
        this.setState({grade: {...this.defaultState.grade}, isValid: true, duplicated: false})
      } else {
        this.setState({duplicated: true})
      }
  
    } else {
      this.setState({isValid: false})
    }

    e.preventDefault();
  }

  renderGradeField(name, value, text, readOnly) {
    return (
      <div className="d-flex align-items-center mb-3">
        <label className="m-0 w-50">{text}</label>
        <input
          type="number"
          min="0"
          max="5"
          name={name}
          readOnly={readOnly}
          className="form-control"
          onChange={this.handleInputChange}
          value={value}
        />
      </div>
    )
  }

  render() {
    const {userId, name, partial, final, general, total} = this.state.grade;

    return (
      <div className="bg-light p-4 rounded">
        <form onChange={this.handleInputChange} onSubmit={this.addGrade}>
          <div className="d-flex align-items-center mb-3">
            <label className="m-0 w-50">CODIGO</label>
            <input
              type="text"
              name="userId"
              className="form-control"
              onChange={this.handleInputChange}
              value={userId}
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <label className="m-0 w-50">ALUMNO</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={this.handleInputChange}
              value={name}
            />
          </div>

          {this.renderGradeField("partial", partial, "PARCIAL")}
          {this.renderGradeField("final", final, "FINAL")}
          {this.renderGradeField("general", general, "SEGUIMIENTO")}
          
          {!this.state.isValid && <Alert message="Debe ingresar todos los campos" />}
          {this.state.duplicated && <Alert message="La nota de este estudiante ya fue ingresada" />}
          <hr className="mb-4" />
          
          {this.renderGradeField("total", total, "DEFINITIVA", true)}

          <button
            className="btn btn-success btn-lg btn-block bg-purple text-white lh-100"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    )
  }
}
