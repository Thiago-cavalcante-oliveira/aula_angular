import {Component, inject} from '@angular/core';
import {Pessoa} from "../../models/Pessoa";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PessoaserviceService} from "../../services/pessoaservice.service";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {

  modalService = inject(NgbModal);
  enviarPessoa!: Pessoa;
  pessoaservice = inject(PessoaserviceService);
  index: number = -1;
  lista: Pessoa[] = [];
  editar: boolean = false;

  constructor() {
    // let pessoa1 = new Pessoa();
    // pessoa1.nome = "João";
    // pessoa1.idade = 20;
    //
    // let pessoa2 = new Pessoa();
    // pessoa2.nome = "Maria";
    // pessoa2.idade = 30;
    //
    // let pessoa3 = new Pessoa();
    // pessoa3.nome = "José";
    // pessoa3.idade = 40;
    //
    // let pessoa4 = new Pessoa();
    // pessoa4.nome = "Pedro";
    // pessoa4.idade = 50;
    //
    // let pessoa5 = new Pessoa();
    // pessoa5.nome = "Paulo";
    // pessoa5.idade = 60;
    //
    // let pessoa6 = new Pessoa();
    // pessoa6.nome = "Paula";
    // pessoa6.idade = 70;
    //
    // let pessoa7 = new Pessoa();
    // pessoa7.nome = "Paulo";
    // pessoa7.idade = 80;
    //
    // let pessoa8 = new Pessoa();
    // pessoa8.nome = "Paulo";
    // pessoa8.idade = 90;
    //
    // let pessoa9 = new Pessoa();
    // pessoa9.nome = "Paulo";
    // pessoa9.idade = 100;
    //
    // let pessoa10 = new Pessoa();
    // pessoa10.nome = "Paulo";
    // pessoa10.idade = 110;
    //
    //
    // this.lista.push(pessoa1);
    // this.lista.push(pessoa2);
    // this.lista.push(pessoa3);
    // this.lista.push(pessoa4);
    // this.lista.push(pessoa5);
    // this.lista.push(pessoa6);
    // this.lista.push(pessoa7);
    // this.lista.push(pessoa8);
    // this.lista.push(pessoa9);
    // this.lista.push(pessoa10);

    this.listaPessoas();
  }
listaPessoas() {
  this.pessoaservice.listar().subscribe({
    next: lista => {
      this.lista = lista;
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
    }
  })
};

  addPessoa(pessoa: Pessoa) {
    if (this.index >= 0) {
      this.lista[this.index] = pessoa;
    } else {
      this.pessoaservice.save(pessoa);
    }
    this.modalService.dismissAll();
    this.listaPessoas();
  }

  openModal(content: any, pessoa: Pessoa) {
      this.enviarPessoa=pessoa;

      this.editar = true;
    this.modalService.open(content, {size: 'xl'});
  }

  openModalCadastrar(content: any) {
    this.enviarPessoa = new Pessoa();
    this.modalService.open(content, {size: 'xl'});
  }

  delete(pessoa: Pessoa) {

  this.pessoaservice.delete(pessoa).subscribe({
    next: pessoa => { // QUANDO DÁ CERTO
      this.listaPessoas();
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
      console.error(erro);
    }});




}
  }
