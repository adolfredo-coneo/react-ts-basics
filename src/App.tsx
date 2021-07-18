import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TextContextProvider from './store/todos-context';

function App() {
  return (
    <TextContextProvider>
      <NewTodo />
      <Todos />
    </TextContextProvider>
  );
}

export default App;
