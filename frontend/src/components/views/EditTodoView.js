import React, { Component } from "react";

class EditTodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      date: "",
      description: ""
    };
  }
  editTodoHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return <div>Edit Todo View</div>;
  }
}
export default EditTodoView;
