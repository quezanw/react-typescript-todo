export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export class Task implements ITask {
  id: string;
  title: string;
  completed: boolean;

  constructor(id: string, title: string, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
