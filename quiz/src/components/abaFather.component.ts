import { Component } from '@angular/core';

@Component({
  selector: 'abaFather',
  templateUrl: './abaFather.component.html',
  styleUrls: ['./abaFather.component.css'],
})
export class AbaFatherComponent {
  title = 'quiz';
  name = 'Ano';

  currentState = 0;
  abas = [
    { title: 'Tab1', content: '1111111111111111111111111111111111111' },
    { title: 'Tab2', content: '2222222222222222222222222222222222222' },
    { title: 'Tab3', content: '3333333333333333333333333333333333333' },
    { title: 'Tab4', content: '4444444444444444444444444444444444444' },
  ];

  selectPosition(position: number) {
    this.currentState = position;
  }
}
