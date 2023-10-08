import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./layout/index/index.component";
import {CarroslistComponent} from "./carros/carroslist/carroslist.component";
import {PessoalistComponent} from "./pessoa/pessoalist/pessoalist.component";
import {LivroslistComponent} from "./livros/livroslist/livroslist.component";
import {LivrodetailComponent} from "./livros/livrodetail/livrodetail.component";
import {PessoadetailsComponent} from "./pessoa/pessoadetails/pessoadetails.component";
import {CarrodetailsComponent} from "./carros/carrodetails/carrodetails.component";
import {LoginComponent} from "./layout/login/login.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
        {path:'index', component: IndexComponent, children: [
      {path: 'pessoas', component: PessoalistComponent},
      {path: 'carros', component: CarroslistComponent},
      {path:'livros', component: LivroslistComponent},
      {path: 'cadastrarlivro', component: LivrodetailComponent},
      {path: 'editarLivro', redirectTo: 'cadastrarlivro'},
      {path: 'editarpessoa', component: PessoadetailsComponent},
      {path: 'cadastrarpessoa', redirectTo: 'editarpessoa'},
      {path: 'editarcarro', component: CarrodetailsComponent},
      {path: 'cadastrarcarro', redirectTo: 'editarcarro'}
          ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
