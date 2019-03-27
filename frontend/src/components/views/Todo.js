import React from "react";

const Todo = props => {
  return (
    <div>
      <h1>{props.todo.title}</h1>
    </div>
  );
};

export default Todo;
