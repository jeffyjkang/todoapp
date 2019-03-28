import React from "react";
import { TodoContainer } from "../../styles/reusableStyles";

const Todo = props => {
  return (
    <TodoContainer>
      <h1>{props.todo.title}</h1>
    </TodoContainer>
  );
};

export default Todo;
