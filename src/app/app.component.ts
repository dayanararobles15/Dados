import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados';
  dadoDerecha='../assets/dados/dice1.png';
  dadoIzaquierda='../assets/dados/dice4.png';
  numero1: number=1;
  numero2: number=0;
  lanzarDados():void{
    this.numero1 = Math.round(Math.random() *5)+1;
    this.numero2 = Math.round(Math.random() *5)+1;
    this.dadoDerecha='../assets/dados/dice'+this.numero1+'.png';
    this.dadoIzaquierda='../assets/dados/dice'+this.numero2+'.png';
  }
}
