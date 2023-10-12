import {Component, inject} from '@angular/core';
import {Livro} from "../../models/livro";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LivroService} from "../../services/livro.service";

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  livroService = inject(LivroService);
  modalService = inject(NgbModal);
  enviarLivro!: Livro;
  listalivros: Livro[] = [];
  index: number = -1;
  editar: boolean = false;

  constructor() {
    // let livro1: Livro = new Livro();
    // livro1.titulo = "O Senhor dos Anéis";
    // livro1.autor = "J. R. R. Tolkien";
    //
    // let livro2: Livro = new Livro();
    // livro2.titulo = "O Hobbit";
    // livro2.autor = "J. R. R. Tolkien";
    //
    // let livro3: Livro = new Livro();
    // livro3.titulo = "O Silmarillion";
    // livro3.autor = "J. R. R. Tolkien";
    //
    // this.listalivros.push(livro1);
    // this.listalivros.push(livro2);
    // this.listalivros.push(livro3);
    this.listarlivros();

  }

  listarlivros(){
    this.livroService.listar().subscribe({
      next: lista => {
        this.listalivros = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  addLivro(livro: Livro){
    if(this.index >=0){
      this.listalivros[this.index] = livro;
    }else{
      this.listalivros.push(livro);
    }
    this.modalService.dismissAll();
  }

  openModal(content: any, livro:Livro) {

      this.enviarLivro = livro

      this.editar = true;

    this.modalService.open(content, {size: 'xl'});
  }

  OpenModalCadastrar(content: any){
    this.enviarLivro = new Livro();

    this.modalService.open(content, {size: 'xl'});
  }

  delete(livro:Livro){
    this.livroService.delete(livro).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        this.listarlivros();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }});
  }

}
