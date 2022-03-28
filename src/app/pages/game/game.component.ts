import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  marginTop: number = 0;
  marginLeft: number = 0;
  tempo : number = 1000;
  contador: number = 10;

  ngStyle : string =`{ 'margin-top': ${this.marginTop} + '%', 'margin-left':  ${this.marginLeft} + '%'}`
  constructor() {}

  ngOnInit(): void {
    this.mudaPosicao();
  }

  async mudaPosicao() {
      await this.temporizador(1000).then(() => {
        this.marginLeft = Math.random() * 100;
        this.marginTop = Math.random() * 100;
        this.contador = this.contador - 1;
        console.log(this.contador);
        if(this.contador >0){
          this.mudaPosicao();
        }
      });

  }

  async temporizador(tempo: number) {
   await setTimeout(() => {
    console.log("teste");

    }, tempo)
  }
}
