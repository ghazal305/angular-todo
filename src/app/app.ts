import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent-component/parent-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo';
}
