import { handleActions } from "redux-actions";
import { ActionTypes } from "../types/actions";
import { InitialTasksState, ITasksState } from "./state";
import { Task } from "../types/Task";

export default handleActions({
  [ActionTypes.ADD_TASK]: (state: ITasksState, action: any) => {
    return { items: [...state.items, action.payload] }
  },
  [ActionTypes.EDIT_TASK]: (state: ITasksState, action: any) => {
    return { items:  editTitle(state, action.title, action.id) }
  },
  [ActionTypes.DELETE_TASK]: (state: ITasksState, action: any) => {
    return { items: state.items.filter(item => item.id !== action.payload) }
  },
  [ActionTypes.CHANGE_STATUS]: (state: ITasksState, action: any) => {
    return { items: changeStatus(state, action.payload) }
  }
}, InitialTasksState);

const editTitle = (state: ITasksState, title: string, id: string) => {
  return state.items.map((item: Task) => {
    if(item.id === id) {
      return new Task(id, title, item.completed)
    }
    return new Task(item.id, item.title, item.completed);
  })
}

const changeStatus = (state: ITasksState, id: string): Task[] => {
  return state.items.map((item: Task) => {
    if(item.id === id) {
      return new Task(id, item.title, !item.completed)
    }
    return new Task(item.id, item.title, item.completed);
  })
}