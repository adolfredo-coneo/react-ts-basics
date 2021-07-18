import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const todosContext = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = todoTextRef.current!.value.trim();

    if (text.length === 0) {
      return;
    }
    todosContext.addTodo(text);
    todoTextRef.current!.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoTextRef} id="text" type="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
