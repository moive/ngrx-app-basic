import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.scss'],
})
export class GrandsonComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() counterChanged = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.counter = 0;
    this.counterChanged.emit(this.counter);
  }
}
