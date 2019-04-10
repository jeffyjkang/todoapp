import React, { Component } from "react";
import {
  DeleteTodoContainer,
  ButtonContainer
} from "../../styles/reusableStyles";
import PropTypes from "prop-types";

class DeleteTodoView extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  noSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/todo/${this.props.todo.id}`);
  };
  render() {
    return (
      <DeleteTodoContainer>
        Delete Todo View
        <div>
          <h1>Todo: {this.props.todo.title}</h1>
          <h3>Are you sure you wish to delete this todo?</h3>
          <ButtonContainer
            onClick={this.props.deleteTodoSubmit(this.props.todo)}
          >
            Yes
          </ButtonContainer>
          <ButtonContainer onClick={this.noSubmit}>No</ButtonContainer>
        </div>
      </DeleteTodoContainer>
    );
  }
}

DeleteTodoView.propTypes = {
  todo: PropTypes.object,
  deleteTodoSubmit: PropTypes.func
};

export default DeleteTodoView;
