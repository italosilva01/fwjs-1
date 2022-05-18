import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<abaFather [abas]="abas"></abaFather>',
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  abas = [
    { tab: 'Tab1', content: '1111111111111111111111111111111111111' },
    { tab: 'Tab2', content: '2222222222222222222222222222222222222' },
    { tab: 'Tab3', content: '3333333333333333333333333333333333333' },
    { tab: 'Tab4', content: '4444444444444444444444444444444444444' },
  ];
}
