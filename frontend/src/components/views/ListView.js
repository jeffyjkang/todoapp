import React from "react";
import Todo from "./Todo";

const Listview = props => {
  return (
    <div>
      ListView
      {props.dummyData.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default Listview;
