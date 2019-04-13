import React, { Component } from 'react'
import GradesList from './gradesList';
import GradesForm from './gradesForm';

export default class Grades extends Component {
  state = {
    grades: []
  }

  addGrade = (grade) => {
    const exists = this.state.grades.some(gradeObj => gradeObj.userId === grade.userId);
    if (exists) {
      this.setState({duplicated: true});
    } else {
      this.setState({ grades: [...this.state.grades, grade], duplicated: false });
    }

    return exists;
  }

  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6">
            <GradesForm addGrade={this.addGrade} />
          </div>
          <div className="col-md-6">
            <GradesList grades={this.state.grades} />
          </div>
        </div>
      </div>
    )
  }
}
