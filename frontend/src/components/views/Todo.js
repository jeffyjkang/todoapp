import React from "react";
import { TodoContainer } from "../../styles/reusableStyles";
import PropTypes from "prop-types";

const Todo = props => {
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

Todo.propTypes = {
  selectTodoHandler: PropTypes.func,
  todo: PropTypes.object
};

export default Todo;
