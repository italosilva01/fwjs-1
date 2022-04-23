import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<abaFather></abaFather>',
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'quiz';
  name = 'this';

  currentState = 0;
}
