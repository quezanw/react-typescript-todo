import * as React from 'react';
import { connect } from "react-redux";
import { Task } from "../types/Task";
import { IStoreState } from "../reducers/state";
import { Container } from "react-bootstrap"; 
import TodoItem from "./TodoItem";
import TodoAddTask from "./TodoAddTask";
import "../styles/todoGrid.scss";

interface IProps {
  items: any;
}

class TodoGrid extends React.Component<IProps, IStoreState> {

  public renderListItems = (): JSX.Element => {
    return this.props.items.map((item: Task) => (
      <TodoItem item={item} key={item.id} />
    ));
  }

  public render() {
    return (
      <div className="todo-grid">
        <Container>
          <TodoAddTask/>
          {this.renderListItems()}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  items: state.tasks.items
})

export default connect(mapStateToProps, {})(TodoGrid);
