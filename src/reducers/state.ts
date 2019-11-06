import { Task } from '../types/Task';

export interface ITasksState {
  items: Task[]
}

export const InitialTasksState: ITasksState = {
  items: []
}
export interface IStoreState {
  tasks: ITasksState
}

export const InitialState: IStoreState = {
  tasks: InitialTasksState
}