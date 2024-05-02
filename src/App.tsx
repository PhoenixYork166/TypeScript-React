import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FunctionComponent = () => {
  // using useState() React Hook to setState
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, text: 'Finish this'},
    {id: 2, text: 'Stay Alive'},
    {id: 3, text: 'Go Home'},
    {id: 4, text: 'Stay Safe'}
  ]);

  // <input type="text" /> accepting users' inputs as text: string
  const addTodoHandler = (text: string) => {
    // using spread operator  ...,
    // setTodos(prevTodos => [
      // ...prevTodos = shallow copying prevState
    //])...prevTodos,
    setTodos(prevTodos => [
      // ... spred operator to shallow copy
      // when cloning a copy of array objects
      ...prevTodos,
      { id: prevTodos.length + 1, text}
    ]);
  };

  const deleteTodoHandler = (todoId: number) => {
    setTodos(prevTodos => {
      // deleting a todo by filtering out 
      // those todo.id NOT equal to todoId
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};
export default App;
