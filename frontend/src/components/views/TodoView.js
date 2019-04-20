import React from "react";
import { Link } from "react-router-dom";
import {
  TodoViewContainer,
  ButtonContainer
} from "../../styles/reusableStyles";
import PropTypes from "prop-types";

const TodoView = props => {
  return (
    // todo view views all props of single todo
    <TodoViewContainer>
      TodoView
      <h1>Title: {props.todo.title}</h1>
      <h1>Date: {props.todo.date}</h1>
      <h1>Description: {props.todo.description}</h1>
      <Link to={`/edit/${props.todo.id}`}>
        <ButtonContainer>Edit</ButtonContainer>
      </Link>
      <Link to={`/delete/${props.todo.id}`}>
        <ButtonContainer>Delete</ButtonContainer>
      </Link>
    </TodoViewContainer>
  );
};

TodoView.propTypes = {
  todo: PropTypes.object
};
export default TodoView;
