import * as React from 'react';
import { connect } from "react-redux";
import { Task } from "../types/Task";
import { IStoreState } from "../reducers/state"; 
import * as selectors from "../selectors/selector";
import TodoItem from "./TodoItem";
import TodoAddTask from "./TodoAddTask";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/todoGrid.scss";
import moment from "moment";

interface IProps {
  items: any;
}

class TodoGrid extends React.Component<IProps, IStoreState> {

  public renderListItems = (): JSX.Element => {
    return this.props.items.map((item: Task) => (
      <TodoItem item={item} key={item.id} />
    ));
  }

  public renderTimeDate = (): JSX.Element => {
    let date = moment().format('dddd, MMM, DD, YYYY').split(',');
    return (
      <Row className="date-container">
        <Col className="day">
          <h3>{date[0]}</h3>
        </Col>
        <Col className="date">
          <p className="date-day">
            {date[2]}
          </p>
          <p className="date-monthyear">
            {date[1]}
            <br/>
            {date[3]}
          </p>
        </Col>
      </Row>
    );
  }

  public render() {
    return (
      <div className="todo-grid">
        <Container>
          {this.renderTimeDate()}
          <TodoAddTask/>
          {this.renderListItems()}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  items: selectors.selectItemsState(state)
})

export default connect(mapStateToProps, {})(TodoGrid);
