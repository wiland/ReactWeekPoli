import React from "react";

const TodoItem = props => {
  return (
    <div
      className="card col-3 p-0"
      style={{ cursor: "pointer" }}
      onClick={() => props.onComplete(props.index)}
    >
      <div className="card-body">
        {/* <h5 class="card-title">{props.title}</h5> */}
        <p
          style={{ textDecoration: props.completed ? "line-through" : "" }}
          className={`card-text${props.completed ? " text-muted" : ""}`}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
