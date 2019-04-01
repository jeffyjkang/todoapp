import React from "react";
import { TodoViewContainer } from "../../styles/reusableStyles";

const TodoView = props => {
  // todo view when creating a todo routes by id
  if (props.history.location.state) {
    return (
      <TodoViewContainer>
        TodoView
        <h1>Title: {props.history.location.state.title}</h1>
        <h1>Date: {props.history.location.state.date}</h1>
        <h1>Description: {props.history.location.state.description}</h1>
      </TodoViewContainer>
    );
  }
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
