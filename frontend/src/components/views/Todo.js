import React from "react";
import { TodoContainer } from "../../styles/reusableStyles";

const Todo = props => {
  // props has properties of each todo
  return (
    <TodoContainer
      onClick={() => {
        props.selectTodoHandler(props.todo);
      }}
    >
      <h1>{props.todo.title}</h1>
    </TodoContainer>
  );
};

export default Todo;
