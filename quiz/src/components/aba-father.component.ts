import { Component } from '@angular/core';

@Component({
  selector: 'aba-father',
  template: '<aba [text]="name">',
  styles: [`
    h1 {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'quiz';
  name = 'Fulano'

  currentState = 0
}
