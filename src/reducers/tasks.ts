import { handleActions } from "redux-actions";
import { ActionTypes } from "../types/actions";
import { InitialTasksState, ITasksState } from "./state";

export default handleActions({
  [ActionTypes.ADD_TASK]: (state: ITasksState, action: any) => {
    return { items: [...state.items, action.payload] }
  },
  [ActionTypes.EDIT_TASK]: (action: any) => {
    return { items: [...action.payload] }
  },
  [ActionTypes.DELETE_TASK]: (action: any) => {
    return { items: [...action.payload] }
  },
  [ActionTypes.CHECK_OFF_TASK]: (action: any) => {
    return { items: [...action.payload] }
  },
  [ActionTypes.UNCHECK_TASK]: (action: any) => {
    return { items: [...action.payload] }
  }
}, InitialTasksState);