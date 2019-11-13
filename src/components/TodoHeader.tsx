import * as React from 'react';
import "../styles/todoHeader.scss";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

const TodoHeader = (): JSX.Element => {
  return (
    <section className="todo-header">
      <h1>Todo List</h1>
      <Icon className="checklist-icon" iconName="CheckList"/>
    </section>
  );
}

export default TodoHeader;
