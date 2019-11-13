import { createSelector } from "reselect";
import { Task } from "../types/Task";
import { IStoreState } from "../reducers/state";

const selectAllItems = (state: IStoreState): Task[] => state.tasks.items; 

export const selectItemsState = createSelector(
  [selectAllItems],
  items => items
);