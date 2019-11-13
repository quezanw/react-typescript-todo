import * as React from 'react';
import { connect } from "react-redux";
import { Row } from "react-bootstrap"; 
import * as actions from "../actions/index";
import "../styles/todoAddTask.scss";
import { PrimaryButton } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Task } from "../types/Task";
import { generateString } from "../helpers/utils";

interface IState {
  input: string;
}

interface IProps {
  addTask: (task: Task) => void;
}

class TodoAddTask extends React.Component<IProps, IState> {
  state = { input: "" };

  public handleChange = (e: any): void => {
    this.setState({ input: e.target.value});
  }

  public handleSubmit = (e: any): void => {
    e.preventDefault();
    let task = new Task(generateString(), this.state.input);
    this.props.addTask(task);
    this.setState({input: ""});
  }

  public render(): JSX.Element {
    let disabled = this.state.input.length <= 0;
    return (
      <Row className="todo-add-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.input}/>
        </form>
        <PrimaryButton disabled={disabled} onClick={this.handleSubmit} className="btn-save">
          Add Task 
          <Icon className="icon-save" iconName="Save"/>
        </PrimaryButton>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addTask: (task: Task) => dispatch(actions.addTask({ task }))
})

export default connect(null, mapDispatchToProps)(TodoAddTask);