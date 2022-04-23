import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbaFatherComponent } from 'src/components/abaFather.component';
import { AbaComponent } from 'src/components/aba/aba.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AbaComponent, AbaFatherComponent],
  imports: [BrowserModule],
  providers: [], //para serviços
  bootstrap: [AppComponent], //informa qual é o componente raiz
})
export class AppModule {}
