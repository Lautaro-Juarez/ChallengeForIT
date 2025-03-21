export interface Task {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
  createdAt?: Date;
}

export interface TaskResponse {
  error: boolean,
  data: Task[];
}
export type CreateTask = Pick<Task, 'title' | 'description' | 'completed'>

export type UpdateTask = Partial<CreateTask>