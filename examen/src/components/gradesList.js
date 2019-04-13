import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterForm from './filterForm';
import List from './list';

export default class GradesList extends Component {
  static propTypes = {
    grades: PropTypes.array
  }

  gradeClasificator = {
    "all": grade => true,
    "win": grade => grade >= 3,
    "lose": grade => grade < 3,
  }

  state = {
    filteredGrades: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.grades !== this.props.grades) {
      this.filterGrades();
    }
  }

  filterGrades = (userId = "", type = "all") => {
    const filteredGrades = this.props.grades.filter(grade => 
      (userId ? grade.userId === userId : true ) 
      && this.gradeClasificator[type](grade.total));

    this.setState({filteredGrades});
  }

  render() {
    return (
      <div>
        <FilterForm filterGrades={this.filterGrades}/>
        <List grades={this.state.filteredGrades}/>
      </div>
    )
  }
}
