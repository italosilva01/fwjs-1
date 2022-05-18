import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'AbaComponent',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba-component.css'],
})
export class AbaComponent {
  title = 'aba';
  @Input() text!: string;
  @Input() position!: number;
  @Output() newEvent = new EventEmitter<number>();

  changePosition(value: number) {
    this.newEvent.emit(value);
  }
}
