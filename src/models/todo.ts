//todo class
class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string, completed: boolean) {
    this.id = new Date().getTime() + Math.floor(Math.random() * 999999); //random id
    this.text = text;
    this.completed = completed;
  }
}

export default Todo;
