import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Carro} from "../carro";

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrodetailsComponent implements OnInit{

  modalService = inject(NgbModal);
@Output() retorno = new EventEmitter<Carro>();
@Input() injetaCarro!: Carro ;
carro: Carro = new Carro();

ngOnInit() {
  if(this.injetaCarro){
    this.carro = this.injetaCarro;
  }
}

salvar(){
  this.retorno.emit(this.carro);
}
}
