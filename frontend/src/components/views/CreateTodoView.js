import React, { Component } from "react";
import {
  CreateTodoContainer,
  InputContainer,
  ButtonContainer
} from "../../styles/reusableStyles";

class CreateTodoView extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      id: props.todos.length + 1,
      title: "",
      date: "",
      description: ""
    };
  }
  // edit todo param function
  editTodoHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //
  render() {
    return (
      <CreateTodoContainer>
        Create Todo View
        <form onSubmit={this.props.createTodoSubmit(this.state)}>
          <h1>Create a new Todo</h1>
          <div>
            <h3>Title:</h3>
            <InputContainer
              name="title"
              type="text"
              onChange={this.editTodoHandler}
              placeholder=" title"
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
              //   placeholder="date"
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
              placeholder=" description"
              value={this.state.description}
              required
            />
          </div>
          <div>
            <br />
            <ButtonContainer type="submit">Create Todo</ButtonContainer>
          </div>
        </form>
      </CreateTodoContainer>
    );
  }
}
export default CreateTodoView;