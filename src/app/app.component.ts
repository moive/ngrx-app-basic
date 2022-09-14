import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-app-basic';

  counter: number;

  constructor() {
    this.counter = 10;
  }

  decrement() {
    this.counter -= 1;
  }

  increment() {
    this.counter += 1;
  }
}
