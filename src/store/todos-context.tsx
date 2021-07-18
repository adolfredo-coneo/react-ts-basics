import React, { useState } from 'react';
import Todo from '../models/todo';

interface Props {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

export const TodosContext = React.createContext<Props>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((current) => [...current, new Todo(text, false)]);
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const contextValue: Props = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
