import tasksReducer from './tasks';
import { combineReducers } from "redux";
import { IStoreState as State } from './state';

export default combineReducers<State>({ 
  tasks: tasksReducer
});