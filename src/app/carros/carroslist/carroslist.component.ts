import {Component, inject} from '@angular/core';
import {Carro} from "../../models/carro";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CarroService} from "../../services/carro.service";
import {Livro} from "../../models/livro";

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

carroService = inject(CarroService);
  modalService = inject(NgbModal);
  enviarCarro!: Carro;
  index!: number;
  editar: boolean = false;
  listacarro: Carro[] = [];

  constructor() {
    // let carro1 = new Carro();
    // carro1.nome = "Fusca";
    // carro1.ano = 1970;
    //
    // let carro2 = new Carro();
    // carro2.nome = "Brasilia";
    // carro2.ano = 1980;
    //
    // let carro3 = new Carro();
    // carro3.nome = "Chevette";
    // carro3.ano = 1990;
    //
    // let carro4 = new Carro();
    // carro4.nome = "Opala";
    // carro4.ano = 2000;
    //
    // this.listacarro.push(carro1);
    // this.listacarro.push(carro2);
    // this.listacarro.push(carro3);
    // this.listacarro.push(carro4);
this.listarCarros();
  }

  listarCarros(){
    this.carroService.listar().subscribe({
      next: lista => {
        this.listacarro = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    })
  }

  openModal(content: any, carro:Carro){


      this.enviarCarro = carro;

      this.editar = true;

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
  OpenModalCadastrar(content: any){
    this.enviarCarro = new Carro();

    this.modalService.open(content, {size: 'xl'});
  }

  delete(carro:Carro){
    this.carroService.delete(carro).subscribe({
      next: carro => { // QUANDO DÁ CERTO
        this.listarCarros();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }});
  }
}
