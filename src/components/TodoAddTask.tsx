import * as React from 'react';
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap"; 
import "../styles/todoAddTask.scss";
import { addTask } from "../actions/index";
import { PrimaryButton } from 'office-ui-fabric-react'
import { Icon } from 'office-ui-fabric-react/lib/Icon'

class TodoAddTask extends React.Component<any, any> {
  
  public render() {
    return (
      <Row className="todo-add-wrapper">
        <input type="text"/>
        <PrimaryButton className="btn-save">
          Add Task 
          <Icon className="icon-save" iconName="Save"/>
        </PrimaryButton>
      </Row>
    );
  }
}

export default connect(null, { addTask })(TodoAddTask);