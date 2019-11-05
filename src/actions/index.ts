import { Task } from "../types/Task";
import { AppActions } from "../types/actions";

export const addTask = ( task: Task ): AppActions => ({ 
  type: "ADD_TASK",
  task
});

export const editTask = ( task: Task ): AppActions => ({
  type: "EDIT_TASK",
  task
});

export const deleteTask = ( tasks: Task[] ): AppActions => ({
  type: "DELETE_TASK",
  tasks
});

export const checkOff = ( task: Task ): AppActions => ({
  type: "CHECK_OFF_TASK",
  task
});

export const uncheck = ( task: Task ): AppActions => ({
  type: "UNCHECK_TASK",
  task
});