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
  state = {
    title: this.props.item.title,
    editActive: false
  }

  public handleChangeStatus = (id: string): void => this.props.changeStatus(id);

  public handleEditTask = (e: any): void => {
    e.preventDefault();
    this.props.editTask(this.state.title);
    this.setState({ editActive: false });
  }

  public handleOnChange = (e: any): void => this.setState({ title: e.target.value });

  public handleDeleteTask = (id: string): void => this.props.deleteTask(id);

  public renderTitle = (): JSX.Element => {
    let { title, editActive } = this.state
    if(editActive) {
      return (
        <form onSubmit={this.handleEditTask}>
          <input onChange={this.handleOnChange} value={this.state.title} type="text"/>
        </form>
      );
    }
    return <p onClick={() => this.setState({ editActive: true })}>{title}</p>
  }

  public render(): JSX.Element {
    let { id, completed } = this.props.item;
    return (
      <Row>
        <Col onClick={() => this.handleDeleteTask(id)} lg="1" md="1" sm="1">
          delete
        </Col>
        <Col lg="9" md="9" sm="9">
          {this.renderTitle()}
        </Col>
        <Col onClick={() => this.handleChangeStatus(id)} lg="2" md="2" sm="2">
          {completed ? "done" : "not done" }
        </Col>
      </Row>
    );
  }
}

export default connect(null, { changeStatus, editTask, deleteTask })(TodoItem);