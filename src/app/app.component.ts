import { Component } from "@angular/core";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
  delTodos: boolean;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "todo-angular";

  todos: Todo[] = [
    {
      id: 1,
      text: "Walk the dog",
      isCompleted: false,
      delTodos: false
    },
    {
      id: 2,
      text: "Got to the gym",
      isCompleted: false,
      delTodos: false
    },
    {
      id: 3,
      text: "get the paper",
      isCompleted: false,
      delTodos: false
    },
    {
      id: 4,
      text: "string",
      isCompleted: false,
      delTodos: false
    },
    {
      id: 5,
      text: "bar",
      isCompleted: false,
      delTodos: false
    }
  ];

  markAsComplete(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    }
  }

  // markAsDelete(todos) {
  //   for (let todo of this.todos) {
  //     if (todo.id === id) {
  //       todo.isDeleted = !todo.isDeleted;
  //     }
  //   }
  // }
}
