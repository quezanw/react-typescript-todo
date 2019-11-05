import { Task } from '../types/Task';
import { TaskActionTypes } from '../types/actions';
const DEFAULT_STATE: Task[] = [];

export default (state = DEFAULT_STATE, action: TaskActionTypes): Task[] => {
  switch(action.type) {
    case "ADD_TASK":
      return [...state, action.task];
    case "EDIT_TASK":
      return [...state, action.task];
    case "DELETE_TASK":
      return [...state, ...action.tasks];
    case "CHECK_OFF_TASK":
      return [...state, action.task];
    case "UNCHECK_TASK":
      return [...state, action.task];    
    default:
      return state;
  }
}