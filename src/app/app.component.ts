import { Component } from "@angular/core";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
  isDeleted: boolean;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "todo-angular";

  get nonDeletedTodos() {
    return this.todos.filter(todo => !todo.isDeleted);
  }

  todos: Todo[] = [];

  markAsComplete(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    }
  }

  addTodo() {
    const promptText = prompt("Enter todo task");
    const newTodo = {
      id: Math.floor(Math.random() * 10) + 1,
      isCompleted: false,
      isDeleted: false,
      text: promptText
    };
    if (promptText.length > 0) {
      this.todos.push(newTodo);
    }
  }

  markAsDelete() {
    for (let todo of this.todos) {
      todo.isDeleted = true;
    }
  }
}
