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
  [ActionTypes.CHECK_OFF_TASK]: (state: ITasksState, action: any) => {
    return { items: changeStatus(state, action.payload) }
  },
  [ActionTypes.UNCHECK_TASK]: (state: ITasksState, action: any) => {
    return { items: changeStatus(state, action.payload) }
  }
}, InitialTasksState);

const editTitle = (state: ITasksState, title: string, id: string) => {
  return state.items.map((item: Task) => {
    if(item.id === id) item.title = title;
    return item;
  })
}

const changeStatus = (state: ITasksState, id: string) => {
  return state.items.map((item: Task) => {
    if(item.id === id) item.completed = !item.completed;
    return item;
  });
}