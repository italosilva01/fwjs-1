import { Component, Input } from '@angular/core';

@Component({
  selector: 'abaFather',
  templateUrl: './abaFather.component.html',
  styleUrls: ['./abaFather.component.css'],
})
export class AbaFatherComponent {
  currentState = 0;
  @Input() abas: { tab: string; content: string }[] = [];

  selectPosition(position: number) {
    this.currentState = position;
  }
}
