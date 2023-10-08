import {Component, inject} from '@angular/core';
import {Livro} from "../livro";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  modalService = inject(NgbModal);
  enviarLivro!: Livro;
  listalivros: Livro[] = [];
  index: number = -1;
  editar: boolean = false;

  constructor() {
    let livro1: Livro = new Livro();
    livro1.titulo = "O Senhor dos Anéis";
    livro1.autor = "J. R. R. Tolkien";

    let livro2: Livro = new Livro();
    livro2.titulo = "O Hobbit";
    livro2.autor = "J. R. R. Tolkien";

    let livro3: Livro = new Livro();
    livro3.titulo = "O Silmarillion";
    livro3.autor = "J. R. R. Tolkien";

    this.listalivros.push(livro1);
    this.listalivros.push(livro2);
    this.listalivros.push(livro3);
  }

  addLivro(livro: Livro){
    if(this.index >=0){
      this.listalivros[this.index] = livro;
    }else{
      this.listalivros.push(livro);
    }
    this.modalService.dismissAll();
  }

  openModal(content: any, valor: number) {
    this.index = -1;
    this.enviarLivro = new Livro();
    if (valor >= 0) {
      this.enviarLivro = this.listalivros[valor];
      this.index = valor;
      this.editar = true;
    }else this.editar = false;
    this.modalService.open(content, {size: 'xl'});
  }
}
