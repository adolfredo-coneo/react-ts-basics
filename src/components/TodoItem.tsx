import Todo from '../models/todo';
import classes from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { text, completed },
  onDelete,
}) => (
  <li
    className={classes.item}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
    onClick={onDelete}
  >
    {text}
  </li>
);

export default TodoItem;
