// defining Type of data structure
/*
import { Todo } from './todo.model.ts';

const [todos, setTodos] = useState<Todo[]>([
    {id: 1, text: 'Finish this'},
    {id: 2, text: 'Stay Alive'},
    {id: 3, text: 'Go Home'},
    {id: 4, text: 'Stay Safe'}
  ]);
*/
export interface Todo {
    id: number;
    text: string;
}