import { Task } from './Task';

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  EDIT_TASK = "EDIT_TASK",
  DELETE_TASK = "DELETE_TASK",
  CHECK_OFF_TASK = "CHECK_OFF_TASK",
  UNCHECK_TASK = "UNCHECK_TASK"
}

// export const ADD_TASK = "ADD_TASK";
// export const EDIT_TASK = "EDIT_TASK";
// export const DELETE_TASK = "DELETE_TASK";
// export const CHECK_OFF_TASK = "CHECK_OFF_TASK";
// export const UNCHECK_TASK = "UNCHECK_TASK";

// export interface AddTaskAction {
//   type: typeof ActionTypes.ADD_TASK;
//   task: Task;
// }

// export interface EditTaskAction {
//   type: typeof EDIT_TASK;
//   task: Task;
// }

// export interface DeleteTaskAction {
//   type: typeof DELETE_TASK;
//   id: string
// }

// export interface CheckOffTaskAction {
//   type: typeof CHECK_OFF_TASK;
//   task: Task;
// }

// export interface UncheckTaskAction {
//   type: typeof UNCHECK_TASK;
//   task: Task;
// }

// export type TaskActionTypes = 
//   AddTaskAction      | 
//   EditTaskAction     | 
//   DeleteTaskAction   | 
//   CheckOffTaskAction | 
//   UncheckTaskAction;

// export type AppActions = TaskActionTypes;