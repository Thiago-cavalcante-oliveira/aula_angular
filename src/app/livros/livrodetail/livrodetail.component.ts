import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Livro} from "../../models/livro";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-livrodetail',
  templateUrl: './livrodetail.component.html',
  styleUrls: ['./livrodetail.component.scss']
})
export class LivrodetailComponent implements OnInit{

  modalService = inject(NgbModal);
  @Output() retorno = new EventEmitter<Livro>();
  @Input() injetaLivro!: Livro ;
  livro: Livro = new Livro();

  ngOnInit() {
    if(this.injetaLivro){
      this.livro = this.injetaLivro;
    }
  }

  salvar(){
    this.retorno.emit(this.livro);
  }

  openModal(content: any){
   this.modalService.open(content,{size: 'xl'})
  }

}
