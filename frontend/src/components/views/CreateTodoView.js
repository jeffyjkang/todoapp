import React, { Component } from "react";
import { CreateTodoContainer } from "../../styles/reusableStyles";

class CreateTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      date: "",
      description: ""
    };
  }
  // edit todo param function
  editTodoHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // create todo submit function
  createTodoSubmit = e => {
    e.preventDefault();
    console.log("fired");
  };
  render() {
    return (
      <CreateTodoContainer>
        Create Todo View
        <form onSubmit={this.createTodoSubmit}>
          <h3>Create a new Todo</h3>
          <div>
            Title: {"  "}
            <input
              name="title"
              type="text"
              onChange={this.editTodoHandler}
              placeholder="title"
              value={this.state.title}
              required
            />
          </div>
          <div>
            Date: {"  "}
            <input
              name="date"
              type="date"
              onChange={this.editTodoHandler}
              placeholder="date"
              value={this.state.date}
              required
            />
          </div>
          <div>
            Description: {"  "}
            <input
              name="description"
              type="text"
              onChange={this.editTodoHandler}
              placeholder="description"
              value={this.state.description}
              required
            />
          </div>
          <button type="submit">Create Todo</button>
        </form>
      </CreateTodoContainer>
    );
  }
}
export default CreateTodoView;
