import {Component} from '@angular/core';
import {Pessoa} from "./Pessoa";

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {
  lista: Pessoa[] = [];

  constructor() {
    let pessoa1 = new Pessoa();
    pessoa1.nome = "João";
    pessoa1.idade = 20;

    let pessoa2 = new Pessoa();
    pessoa2.nome = "Maria";
    pessoa2.idade = 30;

    let pessoa3 = new Pessoa();
    pessoa3.nome = "José";
    pessoa3.idade = 40;

    let pessoa4 = new Pessoa();
    pessoa4.nome = "Pedro";
    pessoa4.idade = 50;

    let pessoa5 = new Pessoa();
    pessoa5.nome = "Paulo";
    pessoa5.idade = 60;

    let pessoa6 = new Pessoa();
    pessoa6.nome = "Paula";
    pessoa6.idade = 70;

    let pessoa7 = new Pessoa();
    pessoa7.nome = "Paulo";
    pessoa7.idade = 80;

    let pessoa8 = new Pessoa();
    pessoa8.nome = "Paulo";
    pessoa8.idade = 90;

    let pessoa9 = new Pessoa();
    pessoa9.nome = "Paulo";
    pessoa9.idade = 100;

    let pessoa10 = new Pessoa();
    pessoa10.nome = "Paulo";
    pessoa10.idade = 110;


    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }

}
