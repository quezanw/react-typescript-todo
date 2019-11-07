import * as React from 'react';
import { connect } from "react-redux";
import { addTask, deleteTask } from "../../actions/index";
import { Task } from "../../types/Task";
import { IStoreState } from "../../reducers/state";

class App extends React.Component<any, any> {
  
  public componentDidMount() {
    const t: Task = {
      id: "120d",
      title: "test",
      completed: false
    }
    const t1: Task = {
      id: "1d34",
      title: "test 2",
      completed: false
    }
    this.props.addTask(t);
    this.props.addTask(t1);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>TODO LIST</h1>        
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, { addTask, deleteTask })(App);