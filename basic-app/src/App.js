import React, { Component, Fragment } from 'react';
import './app.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 't1',
        name: 'Do something',
        completed: false
      },
      {
        id: 't2',
        name: 'Read a book',
        completed: false
      },
      {
        id: 't3',
        name: 'Travel to LA',
        completed: true
      },
      {
        id: 't4',
        name: 'Learn a new language',
        completed: false
      }
    ]
  }

  completeTask = (i) => {
    let todos = this.state.todos;
    todos[i].completed = true;
    this.setState({todos})
  }

  render() {
    return (
      <Fragment>
        <Header 
          title="Header title"
          subtitle="This is a test"
          color="green"
          fontSize="20px" />
        <Todos tasks={this.state.todos} completeTask={this.completeTask} />
        <Footer createdBy="wiland2315" createdOn={new Date().getFullYear()}/>
      </Fragment>
      // React.createElement("div", {id: "container", class:"container"}, 
      //   React.createElement("h1", {id: "title", class: ""}, "First react app")
      // )
    );
  }
}

export default App;
