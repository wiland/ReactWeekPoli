import React, { Component } from 'react';
import UserBrowser from './userBrowser';
import Grades from './grades';

class Main extends Component {
	state = {
		student: {}
	}

	componentDidMount() {
		
	}

	getStudentInfo = (studentId) => {
		const URL = `https://examen-react-workshop.herokuapp.com/examen/estudiante/${studentId}`;

		fetch(URL)
			.then(response => response.json())
			.then(data => {
				this.setState({student: data});
			})
	}

	render() {
		return (
			<div className="container mt-4">
				<nav className="navbar navbar-light bg-light text-center rounded">
					<span className="navbar-brand mb-0 h1 text-center w-100">REACT WORKSHOP POLI 2019</span>
				</nav>
				<UserBrowser getStudentInfo={this.getStudentInfo} studentName={this.state.student.name}/>
				<Grades />
			</div>
		);
	}
}

export default Main;
