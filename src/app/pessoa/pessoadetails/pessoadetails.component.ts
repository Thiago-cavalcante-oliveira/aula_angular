import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Pessoa} from "../../models/Pessoa";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PessoaserviceService} from "../../services/pessoaservice.service";

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent implements OnInit{

pessoaService = inject(PessoaserviceService);
  modalService = inject(NgbModal);

  @Output() retorno = new EventEmitter<Pessoa>();
  @Input() injetaPessoa!: Pessoa ;
  pessoa: Pessoa = new Pessoa();

ngOnInit() {
  if(this.injetaPessoa){
    this.pessoa = this.injetaPessoa;
  }
}
  salvar() {

    let pessoasalvar = this.pessoa
    if(this.pessoa.id>0) {
      pessoasalvar.id = this.pessoa.id;
    }else {
      pessoasalvar.id = -1;
    }
    if (this.pessoa.id < 0) {
      this.pessoaService.save(this.pessoa).subscribe({
        next: pessoa => { // QUANDO DÁ CERTO
          this.retorno.emit(pessoa);
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.pessoaService.editar(this.pessoa).subscribe({
        next: pessoa => {
          this.retorno.emit(pessoa);
        },
        error: erro => {
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      })

    }
  }


  openModal(content: any){
    this.modalService.open(content,{size: 'xl'})
  }
}
