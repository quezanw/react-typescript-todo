import { ITask } from "../types/Task";
import { ActionTypes } from "../types/actions";
import { createAction } from "redux-actions";

export const addTask = createAction<{ task: ITask }>(ActionTypes.ADD_TASK)
export const editTask = createAction<{ id: string, title: string }>(ActionTypes.EDIT_TASK)
export const deleteTask = createAction<{ id: string }>(ActionTypes.DELETE_TASK)
export const changeStatus = createAction<{ id: string }>(ActionTypes.CHANGE_STATUS)



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
