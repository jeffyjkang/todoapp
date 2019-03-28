import React from "react";
import Todo from "./Todo";
import { ListViewContainer } from "../../styles/reusableStyles";

const Listview = props => {
  return (
    <div>
      ListView
      <ListViewContainer>
        {props.dummyData.map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ListViewContainer>
    </div>
  );
};
export default Listview;
