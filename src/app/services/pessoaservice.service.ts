import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../models/Pessoa";

@Injectable({
  providedIn: 'root'
})
export class PessoaserviceService {
 API = 'http://localhost:8080/api/pessoa';
 http = inject(HttpClient);
  constructor() { }

  listar(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API + '/listAll');
  }

  save(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.API, pessoa);
  }

  editar(pessoa: Pessoa): Observable<Pessoa>{
    let params = new HttpParams().set('id', pessoa.id);
    return this.http.put<Pessoa>(this.API,  pessoa,{params: params});
  }

  delete(pessoa: Pessoa) {
    let params = new HttpParams().set('id', pessoa.id);
    return this.http.delete(this.API, {params: params});

  }
}
