import {Component, inject} from '@angular/core';
import {Carro} from "../carro";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  modalService = inject(NgbModal);
  enviarCarro!: Carro;
  index!: number;
  editar: boolean = false;
  listacarro: Carro[] = [];

  constructor() {
    let carro1 = new Carro();
    carro1.nome = "Fusca";
    carro1.ano = 1970;

    let carro2 = new Carro();
    carro2.nome = "Brasilia";
    carro2.ano = 1980;

    let carro3 = new Carro();
    carro3.nome = "Chevette";
    carro3.ano = 1990;

    let carro4 = new Carro();
    carro4.nome = "Opala";
    carro4.ano = 2000;

    this.listacarro.push(carro1);
    this.listacarro.push(carro2);
    this.listacarro.push(carro3);
    this.listacarro.push(carro4);

  }

  openModal(content: any, valor:number){
    this.index = -1;
    this.enviarCarro = new Carro();
    if(valor >= 0){
      this.enviarCarro = this.listacarro[valor];
      this.index = valor;
      this.editar = true;
    }else this.editar = false;
    this.modalService.open(content,{size: 'xl'})
  }

  addCarro(carro: Carro){
    if(this.index >= 0){
      this.listacarro[this.index] = carro;
    }else {
      this.listacarro.push(carro);
    }
    this.modalService.dismissAll();
  }

}
