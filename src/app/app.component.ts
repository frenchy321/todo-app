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

  todos: Todo[] = [
    {
      id: 1,
      text: "Walk the dog",
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 2,
      text: "Got to the gym",
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 3,
      text: "get the paper",
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 4,
      text: "string",
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 5,
      text: "bar",
      isCompleted: false,
      isDeleted: false
    }
  ];

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
    this.todos.push(newTodo);
  }

  markAsDelete() {
    for (let todo of this.todos) {
      todo.isDeleted = true;
    }
  }
}
