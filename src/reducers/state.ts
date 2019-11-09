import { ITask, Task } from '../types/Task';
import tasks from './tasks';
const INITIAL_STATE = [
  new Task("11232", "Wash and vacuum car"), 
  new Task("12352", "Take out trash and recycle"), 
  new Task("15532", "File taxes online")
]

export interface ITasksState {
  items: Task[]
}

export const InitialTasksState: ITasksState = {
  items: INITIAL_STATE
}
export interface IStoreState {
  tasks: ITasksState
}

export const InitialState: IStoreState = {
  tasks: InitialTasksState
}