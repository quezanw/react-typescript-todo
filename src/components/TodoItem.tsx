import * as React from 'react';
import { connect } from "react-redux";
import { Task } from "../types/Task";
import { Row, Col } from "react-bootstrap"; 
import "../styles/todoItem.scss";
import { changeStatus, editTask, deleteTask } from "../actions/index";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

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
    let { title, editActive } = this.state;
    let { completed } = this.props.item;
    if(editActive) {
      return (
        <form  className="title-edit" onSubmit={this.handleEditTask}>
          <input onChange={this.handleOnChange} value={this.state.title} type="text"/>
        </form>
      );
    }
    return (
      <p className="item-title" onClick={() => this.setState({ editActive: true })}>
        {completed ? <del>{title}</del> : title}
      </p>
    )
  }

  public renderCheckMark = (completed: boolean): JSX.Element => {
    return (
      completed ? 
        <Icon className="checkmark" iconName="SkypeCircleCheck"/> :
        <Icon className="empty-checkmark" iconName="CircleRing"/>
      )
  }

  public render(): JSX.Element {
    let { id, completed } = this.props.item;
    return (
      <Row className="todo-item" >
        <Col className="icon" onClick={() => this.handleDeleteTask(id)} lg="1" md="1" sm="1">
          <Icon className="btn-delete" iconName="Delete"/>
        </Col>
        <Col className="title-wrapper" lg="10" md="10" sm="6">
          {this.renderTitle()}
        </Col>
        <Col className="icon" onClick={() => this.handleChangeStatus(id)} lg="1" md="1" sm="1">
          {this.renderCheckMark(completed)}
        </Col>
      </Row>
    );
  }
}

export default connect(null, { changeStatus, editTask, deleteTask })(TodoItem);