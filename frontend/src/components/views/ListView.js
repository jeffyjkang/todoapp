import React from "react";
import Todo from "./Todo";
import { Link } from "react-router-dom";
import { ListViewContainer } from "../../styles/reusableStyles";

const Listview = props => {
  // listview contains all todos of user
  return (
    <div>
      ListView
      <ListViewContainer>
        {props.todos.map(todo => (
          <Link to={`/todo/${todo.id}`} key={todo.id}>
            <Todo
              key={todo.id}
              todo={todo}
              selectTodoHandler={props.selectTodoHandler}
            />
          </Link>
        ))}
      </ListViewContainer>
    </div>
  );
};
export default Listview;
