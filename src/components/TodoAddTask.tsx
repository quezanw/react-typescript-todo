import * as React from 'react';
import { connect } from "react-redux";
import { Row } from "react-bootstrap"; 
import "../styles/todoAddTask.scss";
import { addTask } from "../actions/index";
import { PrimaryButton } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Task } from "../types/Task";

interface IState {
  input: string;
}
class TodoAddTask extends React.Component<any, IState> {
  state = {
    input: ""
  }


  public createTask = (): void => {

  }

  public handleChange = (e: any): void => {
    this.setState({ input: e.target.value});
  }

  public generateString = (): string => {
    let alphabet = "abcdefghijklmnopqrstuvxyz";
    let nums = "0123456789";
    let result = "";
    for(let i = 0; i < 10; i++) {
      let rand1 = Math.floor(Math.random() * 26)
      let rand2 = Math.floor(Math.random() * 8)
      result += alphabet[rand1] + nums[rand2];
    }
    return result;
  }

  public handleSubmit = (e: any): void => {
    e.preventDefault();
    let task = new Task(this.generateString(), this.state.input);
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

export default connect(null, { addTask })(TodoAddTask);