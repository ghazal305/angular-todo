import { Component } from '@angular/core';
import { Todoform } from '../todoform/todoform';
import { TodoList } from '../todo-list/todo-list';
@Component({
  selector: 'app-parent-component',
  imports: [Todoform, TodoList],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(task: string) {
    this.todos.push({ text: task, completed: false });
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
