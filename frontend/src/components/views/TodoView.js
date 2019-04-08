import React from "react";
import { Link } from "react-router-dom";
import {
  TodoViewContainer,
  ButtonContainer
} from "../../styles/reusableStyles";

const TodoView = props => {
  console.log(props);
  // todo view when creating a todo routes by id
  //   if (props.history.location.state) {
  //     return (
  //       <TodoViewContainer>
  //         TodoView
  //         <h1>Title: {props.history.location.state.title}</h1>
  //         <h1>Date: {props.history.location.state.date}</h1>
  //         <h1>Description: {props.history.location.state.description}</h1>
  //         <Link to={`/edit/${props.history.location.state.id}`}>
  //           <ButtonContainer>Edit</ButtonContainer>
  //         </Link>
  //       </TodoViewContainer>
  //     );
  //   }
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
    </TodoViewContainer>
  );
};
export default TodoView;
