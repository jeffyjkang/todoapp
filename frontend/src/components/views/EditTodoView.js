import React, { Component } from "react";
import {
  EditTodoContainer,
  InputContainer,
  ButtonContainer
} from "../../styles/reusableStyles";
import PropTypes from "prop-types";

class EditTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.todo.id,
      title: props.todo.title,
      date: props.todo.date,
      description: props.todo.description
    };
  }
  // edit todo param function
  editTodoHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <EditTodoContainer>
        Edit Todo View
        <form onSubmit={this.props.editTodoSubmit(this.state)}>
          <h1>Edit a new Todo</h1>
          <div>
            <h3>Title:</h3>
            <InputContainer
              name="title"
              type="text"
              onChange={this.editTodoHandler}
              placeholder={this.state.title}
              value={this.state.title}
              required
            />
          </div>
          <div>
            <h3>Date:</h3>
            <InputContainer
              name="date"
              type="date"
              onChange={this.editTodoHandler}
              value={this.state.date}
              required
            />
          </div>
          <div>
            <h3>Description:</h3>
            <InputContainer
              name="description"
              type="text"
              onChange={this.editTodoHandler}
              placeholder={this.state.description}
              value={this.state.description}
              required
            />
          </div>
          <div>
            <br />
            <ButtonContainer type="submit">Edit Todo</ButtonContainer>
          </div>
        </form>
      </EditTodoContainer>
    );
  }
}
EditTodoView.propTypes = {
  todo: PropTypes.object,
  editTodoSubmit: PropTypes.func
};

export default EditTodoView;
