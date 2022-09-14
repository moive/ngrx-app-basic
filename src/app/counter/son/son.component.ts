import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
})
export class SonComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() counterChanged = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  multiply() {
    this.counter *= 2;
    this.counterChanged.emit(this.counter);
  }
  divide() {
    this.counter /= 2;
    this.counterChanged.emit(this.counter);
  }

  resetGrandson(val: number) {
    this.counter = val;
    this.counterChanged.emit(this.counter);
  }
}
