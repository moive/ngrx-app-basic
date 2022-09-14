import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/reducer';
import { divide, multiply } from '../counter.action';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
})
export class SonComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  multiply() {
    this.store.dispatch(multiply({ num: 3 }));
  }
  divide() {
    this.store.dispatch(divide({ num: 2 }));
  }
}
