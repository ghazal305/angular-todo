import { Component,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,EventEmitter],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {

  @Input() tasks: { text: string, completed: boolean }[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() complete = new EventEmitter<number>();

  deleteTask(index: number) {
    this.delete.emit(index);
  }

  markComplete(index: number) {
    this.complete.emit(index);
  }

}
