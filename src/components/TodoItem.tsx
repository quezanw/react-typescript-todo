import * as React from 'react';
import { connect } from "react-redux";
import { Task } from "../types/Task";
import { Container, Row, Col } from "react-bootstrap"; 
import { changeStatus, editTask } from "../actions/index"
import "../styles/todoItem.scss";



interface IProps {
  item: Task;
}


class TodoItem extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props)
  }

  public render(): JSX.Element {
    let { title, id, completed } = this.props.item;
    return (
      <Row>
        <Col lg="10" md="10" sm="10">{title}</Col>
        <Col lg="2" md="2" sm="2">{completed ? "done" : "not done" }</Col>
      </Row>
    );
  }
}

export default connect(null, {changeStatus, editTask})(TodoItem);