import * as React from 'react';
import { connect } from "react-redux";
import { Task } from "../types/Task";
import { Row, Col } from "react-bootstrap"; 
import "../styles/todoItem.scss";
import { changeStatus, editTask, deleteTask } from "../actions/index"



interface IProps {
  item: Task;
  changeStatus: (id: string) => void;
  editTask: (title: string, id: string) => void;
}


class TodoItem extends React.Component<any, any> {

  public handleChangeStatus = (id: string): void => {
    this.props.changeStatus(id);
  }

  public handleEditTask = (): void => {
    
  }

  public handleDeleteTask = (id: string): void => {
    this.props.deleteTask(id);
  }

  public render(): JSX.Element {
    let { title, id, completed } = this.props.item;
    console.log(completed)
    return (
      <Row>
        <Col onClick={() => this.handleDeleteTask(id)} lg="1" md="1" sm="1">delete</Col>
        <Col lg="9" md="9" sm="9">{title}</Col>
        <Col onClick={() => this.handleChangeStatus(id)} lg="2" md="2" sm="2">
          {completed ? "done" : "not done" }
        </Col>
      </Row>
    );
  }
}

export default connect(null, { changeStatus, editTask, deleteTask })(TodoItem);