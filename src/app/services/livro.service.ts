import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Livro} from "../models/livro";

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  API = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }

  listar():Observable<Livro[]>{
    return this.http.get<Livro[]>(this.API + '/listAll');
  }

  save(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(this.API, livro);
  }
  editar(livro: Livro): Observable<Livro>{
    let params = new HttpParams().set('id', livro.id);
    return this.http.put<Livro>(this.API, livro, {params: params});
  }

  delete(livro: Livro) {
    let params = new HttpParams().set('id', livro.id);
    return this.http.delete(this.API, {params: params});
  }

  listAll() {

  }
}
