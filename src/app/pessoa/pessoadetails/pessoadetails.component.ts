import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Pessoa} from "../Pessoa";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent implements OnInit{

  modalService = inject(NgbModal);

  @Output() retorno = new EventEmitter<Pessoa>();
  @Input() injetaPessoa!: Pessoa ;
  pessoa: Pessoa = new Pessoa();

ngOnInit() {
  if(this.injetaPessoa){
    this.pessoa = this.injetaPessoa;
  }
}

  salvar(){
    this.retorno.emit(this.pessoa);
  }

  openModal(content: any){
    this.modalService.open(content,{size: 'xl'})
  }
}
