import { Task } from "../types/Task";
import { ActionTypes } from "../types/actions";
import { createAction } from "redux-actions";

export const addTask = createAction<{ task: Task }>(ActionTypes.ADD_TASK)
export const editTask = createAction<{ task: Task }>(ActionTypes.EDIT_TASK)
export const deleteTask = createAction<{ task: Task }>(ActionTypes.DELETE_TASK)
export const checkOffTask = createAction<{ task: Task }>(ActionTypes.CHECK_OFF_TASK)
export const uncheckTask = createAction<{ task: Task }>(ActionTypes.UNCHECK_TASK)


// export const addTask = ( task: Task ): AppActions => ({ 
//   type: "ADD_TASK",
//   task
// });

// export const editTask = ( task: Task ): AppActions => ({
//   type: "EDIT_TASK",
//   task
// });

// export const deleteTask = ( id: string ): AppActions => ({
//   type: "DELETE_TASK",
//   id
// });

// export const checkOff = ( task: Task ): AppActions => ({
//   type: "CHECK_OFF_TASK",
//   task
// });

// export const uncheck = ( task: Task ): AppActions => ({
//   type: "UNCHECK_TASK",
//   task
// });
