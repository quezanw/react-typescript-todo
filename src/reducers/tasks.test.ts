import reducer from './index';
import * as actions from '../actions/index';
import { Task } from '../types/Task';
import { InitialState } from "../reducers/state";

it('should add a task when pased ADD_TASK', () => {
  const task = new Task("1234ds3", "Feed pets");
  const action = actions.addTask({ task });

  const newState = reducer(InitialState, action);

  expect(newState.tasks.items).toHaveLength(4);
  expect(newState.tasks.items[3]).toEqual(task);
});

it('should edit the task title when passed EDIT_TASK', () => {
  const task = new Task("1234ds3", "Feed pets");
  const actionAddTask = actions.addTask({ task });
  const actionEditTask = actions.editTask({ id: "1234ds3", title: "new title" });
  let newState = reducer(InitialState, actionAddTask);
  newState = reducer(newState, actionEditTask);

  expect(newState.tasks.items).toHaveLength(4);
  expect(newState.tasks.items[3]).toBeTruthy();
  expect(newState.tasks.items[3].title).toEqual("new title");
});

it('should update the task\' status when passed CHANGE_STATUS', () => {
  let action = actions.changeStatus({id: "155hrd32"});
  let newState = reducer(InitialState, action);
  
  expect(newState.tasks.items).toHaveLength(3);
  expect(newState.tasks.items[2].completed).toEqual(true);
});

it('should delete the task when passed DELETE_TASK', () => {
  let action = actions.deleteTask({id: "155hrd32"});
  let newState = reducer(InitialState, action);

  expect(newState.tasks.items).toHaveLength(2);
  expect(newState.tasks.items.find(item => item.id === "155hrd32")).toEqual(undefined);
  
});
