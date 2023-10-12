import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoalistComponent } from './pessoa/pessoalist/pessoalist.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import {IndexComponent} from "./layout/index/index.component";
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrodetailComponent } from './livros/livrodetail/livrodetail.component';
import { PessoadetailsComponent } from './pessoa/pessoadetails/pessoadetails.component';
import { CarrodetailsComponent } from './carros/carrodetails/carrodetails.component';
import {FormsModule} from "@angular/forms";
import { ModelComponent } from './layout/model/model.component';
import { LoginComponent } from './layout/login/login.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    PessoalistComponent,
    CarroslistComponent,
    LivroslistComponent,
    LivrodetailComponent,
    PessoadetailsComponent,
    CarrodetailsComponent,
    ModelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
