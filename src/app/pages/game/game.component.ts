import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})export class GameComponent implements OnInit {

  marginTop: number = 0;
  marginLeft: number = 0;
  margins:string='';
  tempo : number = 800;
  contador: number = 0;
  tempoRestante: number = 30;
  marginLeftVet: number[] = [];
  marginTopVet: number[] = [];
  posicaoAtual: number = 0;
  qtdeAcertos:number = 0;
  tamanhoAlvo = 4;
  ajusteTempoReacao = 1;
  constructor() {}

  ngOnInit(): void {
    this.preencheVetor();
  }

  preencheVetor(){
    console.log('teste');

    for(let i = 0 ; i<200 ; i++){
      this.marginLeftVet.push( Math.random() * 98);
      this.marginTopVet.push(Math.random() * 500);
      i++;
      console.log(i);
    }
  }

  iniciarPartida(){
    this.temporizadorTempoTotal();
    this.temporizador(this.posicaoAtual, this.tempo);
  }

  clickBotao(){
    if(this.tempoRestante>0){
      this.qtdeAcertos++;
      this.mudaPosicao();
    }
  }

   mudaPosicao() {
      this.posicaoAtual++;
      this.marginLeft = this.marginLeftVet[this.posicaoAtual];
      this.marginTop = this.marginTopVet[this.posicaoAtual];
      this.temporizador(this.posicaoAtual, this.ajusteTempoReacao*1000);
  }

   temporizador(posicaoRecebida: number, tempo: number) {
    setTimeout(() => {
    if((this.posicaoAtual == posicaoRecebida) && this.tempoRestante>0){
      this.mudaPosicao();
    }
    }, tempo)
  }

  temporizadorTempoTotal(){
    setTimeout(()=> {
      if(this.tempoRestante > 0){
        this.tempoRestante--;
        this.temporizadorTempoTotal();
      }
    }, 1000)
  }


  atualizaTamanhoAlvo(evento:any){
    this.tamanhoAlvo = 24 + 3 * evento.value;
  }

  atualizaVelocidade(evento:any){
    this.ajusteTempoReacao = evento.value;
  }


}



























// export class GameComponent implements OnInit {
//   marginTop: number = 0;
//   marginLeft: number = 0;
//   tempo : number = 1000;
//   contador: number = 10;

//   ngStyle : string =`{ 'margin-top': ${this.marginTop} + '%', 'margin-left':  ${this.marginLeft} + '%'}`
//   constructor() {}

//   ngOnInit(): void {
//     this.mudaPosicao();
//   }

//    mudaPosicao() {
//        this.temporizador(1000)
//         this.marginLeft = Math.random() * 100;
//         this.marginTop = Math.random() * 100;
//         this.contador = this.contador - 1
//         console.log(this.contador);



//   }

//    temporizador(tempo: number) {
//     setTimeout(() => {
//     if(this.contador >0){
//       this.mudaPosicao();
//     }


//     }, tempo)
//   }
// }
