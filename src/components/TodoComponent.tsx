import * as React from "react";
import TodoGrid from "./TodoGrid";
import TodoHeader from "./TodoHeader";

class TodoComponent extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div className="todo-component">
        <TodoHeader/>
        <TodoGrid/>
      </div>
    );
  }
}

export default TodoComponent;