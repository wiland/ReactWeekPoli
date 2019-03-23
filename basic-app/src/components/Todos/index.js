import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

const Todos = props => {
  return (
    <div className="card-deck row p-3">
      {props.tasks.map((task, i) => (
        <TodoItem key={task.id} index={i} onComplete={props.completeTask} {...task} />
      ))}
    </div>
  )
}

Todos.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Todos;
