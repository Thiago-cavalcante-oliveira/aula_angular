import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Carro} from "../../models/carro";
import {CarroService} from "../../services/carro.service";

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrodetailsComponent implements OnInit {
  carroservice = inject(CarroService);
  modalService = inject(NgbModal);
  @Output() retorno = new EventEmitter<Carro>();
  @Input() injetaCarro!: Carro;
  carro: Carro = new Carro();

  ngOnInit() {
    if (this.injetaCarro) {
      this.carro = this.injetaCarro;
    }
  }

  salvar() {
    if (this.carro.ano < 1950 || this.carro.ano > 2030) {
      alert('Ano do veiculo invalido.')
    } else if (this.carro.nome == '') {
      alert('Nome nao pode ser vazio.')
    } else if (this.carro.nome.length < 2) {
      alert('Nome invalido.')
    }
    this.carroservice.save(this.carro).subscribe({
      next: carro => {
        this.retorno.emit(carro);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
}
