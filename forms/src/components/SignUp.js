import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from 'uuid';
import Alert from "./Alert";

export default class SignUp extends Component {
  static propTypes = {
    addDate: PropTypes.func.isRequired
  }

  defaultState = {
    userId: "",
    name: "",
    lastName: "",
    date: "",//new Date(),
    time: "",//new Date(),
    eps: "",
    priority: ""
  }
  state = {
    currentDate: {...this.defaultState},
    isValid: true
  };

  handleInputChange = event => {
    const { name: fieldName, value } = event.target;
    this.setState({
      currentDate: {
        ...this.state.currentDate,
        [fieldName]: value
      }
    });
  };
  
  handleSubmit = (event) => {
    const {userId, name, lastName, date, time, eps, priority} = this.state.currentDate;
    if (userId !== "" && name !== "" && lastName !== "" && date !== "" && time !== "" && eps !== "" && priority !== "") {
      this.props.addDate({id: uuid(), ...this.state.currentDate});
  
      this.setState({currentDate: {...this.defaultState}, isValid: true})
    } else {
      this.setState({isValid: false})
    }
    event.preventDefault();
  }

  render() {
    const {userId, name, lastName, date, time, eps, priority} = this.state.currentDate;

    return (
      <div className="col-md-7 order-md-1">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Ingreso Cita</span>
        </h4>
        <form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>Documento</label>
            <input
              type="text"
              name="userId"
              className="form-control"
              value={userId}
              // required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Nombres</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                // required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Apellidos</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={lastName}
                // required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Fecha</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={date}
                // required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Hora</label>
              <input
                type="time"
                name="time"
                className="form-control"
                value={time}
                // required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Eps</label>
              <select
                className="custom-select d-block w-100"
                name="eps"
                value={eps}
                // required
              >
                <option value="">Selecciona...</option>
                <option value="Sura">Sura</option>
                <option value="Coomeva">Coomeva</option>
                <option value="Medimas">Medimas</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Prioridad</label>
              <select
                className="custom-select d-block w-100"
                name="priority"
                value={priority}
                // required
              >
                <option value="">Selecciona...</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
              </select>
            </div>
          </div>
          {!this.state.isValid && <Alert message="Debe ingresar todos los campos" />}
          <hr className="mb-4" />
          <button
            className="btn btn-success btn-lg btn-block bg-purple text-white lh-100"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
