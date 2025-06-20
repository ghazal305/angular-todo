import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  imports: [CommonModule,FormsModule],
  templateUrl: './todoform.html',
  styleUrl: './todoform.scss',
})
export class Todoform {
  taskText: string = '';

  @Output() newTask = new EventEmitter<string>();

  addTask() {
    this.newTask.emit(this.taskText);
  }
}
