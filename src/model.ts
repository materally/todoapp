export enum Days {
  TODAY = "today",
  TOMORROW = "tomorrow",
}

export type TodoDay = Days.TODAY | Days.TOMORROW;

export interface Todo {
  id: number;
  day: TodoDay;
  text: string;
}
