import * as React from "react";
import TodoGrid from "./TodoGrid";
import TodoHeader from "./TodoHeader";
import "../styles/todoComponent.scss";

const TodoComponent = (): JSX.Element => {
  return (
    <div className="todo-component">
      <TodoHeader/>
      <TodoGrid/>
    </div>
  );
}

export default TodoComponent;