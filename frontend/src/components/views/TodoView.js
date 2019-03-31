import React from "react";
import { TodoViewContainer } from "../../styles/reusableStyles";

const TodoView = props => {
  return (
    // todo view views all props of single todo
    <TodoViewContainer>
      TodoView
      <h1>Title: {props.todo.title}</h1>
      <h1>Date: {props.todo.date}</h1>
      <h1>Description: {props.todo.description}</h1>
    </TodoViewContainer>
  );
};
export default TodoView;
