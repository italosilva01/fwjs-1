import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
