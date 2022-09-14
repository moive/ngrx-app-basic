import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './counter/counter.action';
import { AppState } from './interfaces/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-app-basic';

  counter: number = 0;

  constructor(private store: Store<AppState>) {
    // this.counter = 10;
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  decrement() {
    // this.counter -= 1;
    this.store.dispatch(decrement());
  }

  increment() {
    // this.counter += 1;
    this.store.dispatch(increment());
  }
}
