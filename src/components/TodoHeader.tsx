import * as React from 'react';
import "../styles/todoHeader.scss";

class TodoHeader extends React.Component<any, any> {

  public render() {
    return (
      <section className="todo-header">
        <h1>Todo List</h1>
      </section>
    );
  }
}

export default TodoHeader;
