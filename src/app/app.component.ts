import { Component } from '@angular/core';

type Todo = {
  id: number;
  text: string;
  isDeleted: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';

  todos: Todo[] = [
    {
      id: 1,
      text: 'Walk the dog',
      isDeleted: false
    },
    {
      id: 2,
      text: 'Got to the gym',
      isDeleted: false
    },
    {
      id: 3,
      text: 'get the paper',
      isDeleted: false
    },
    {
      id: 4,
      text: 'string',
      isDeleted: false
    },
    {
      id: 5,
      text: 'bar',
      isDeleted: false
    }
  ];

  delete(id) {
    for (let todo of this.todos) {
      if (todo.id === id) {
        todo.isDeleted = !todo.isDeleted;
      }
    }
  }
}
