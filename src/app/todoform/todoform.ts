import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoform',
  imports: [EventEmitter, CommonModule],
  templateUrl: './todoform.html',
  styleUrl: './todoform.scss',
})
export class Todoform {
  taskText: string = '';

  @Output() newTask = new EventEmitter<string>();

  addTask() {
    this.newTask.emit(this.taskText);
    this.taskText = '';
  }
}
