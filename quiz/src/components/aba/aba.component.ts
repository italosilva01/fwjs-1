import { Component, Input } from '@angular/core';

@Component({
  selector: 'aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba-component.css']
})
export class AbaComponent {
  title = 'aba';
  @Input() text!: string ;
  @Input() position!: number;

}
