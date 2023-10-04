import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponentComponent } from './app/index-component/index-component.component';
import { PessoalistComponent } from './pessoa/pessoalist/pessoalist.component';
import { MenusuperiorComponent } from './menus/menusuperior/menusuperior.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponentComponent,
    PessoalistComponent,
    MenusuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
