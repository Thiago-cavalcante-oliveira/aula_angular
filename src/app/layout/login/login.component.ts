import {Component, inject} from '@angular/core';
import {Usuario} from "./usuario";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  roteador = inject(Router);

  logar() {

    if (this.usuario.login != "admin" || this.usuario.senha != "admin") {
      alert("senha ou login incorretos");

    } else {
      this.roteador.navigate(['/index']);
    }
  }

  limpar(){
    this.usuario.login = '';
    this.usuario.senha = '';
  }


}
