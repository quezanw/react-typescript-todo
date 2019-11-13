import { Task } from '../types/Task';
const INITIAL_STATE = [
  new Task("112sdf32", "Wash and vacuum car"), 
  new Task("1235gsdf2", "Take out trash and recycle"), 
  new Task("155hrd32", "File taxes online")
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