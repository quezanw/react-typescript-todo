import { ITask } from "../types/Task";
import { ActionTypes } from "../types/actions";
import { createAction } from "redux-actions";

export const addTask = createAction<{ task: ITask }>(ActionTypes.ADD_TASK)
export const editTask = createAction<{ id: string, title: string }>(ActionTypes.EDIT_TASK)
export const deleteTask = createAction<{ id: string }>(ActionTypes.DELETE_TASK)
export const changeStatus = createAction<{ id: string }>(ActionTypes.CHANGE_STATUS)