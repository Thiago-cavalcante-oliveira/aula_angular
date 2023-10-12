import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Livro} from "../models/livro";
import {Carro} from "../models/carro";

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  API = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() { }

  listar(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.API + '/listAll');
  }

  save(carro: Carro): Observable<Carro>{
    return this.http.post<Carro>(this.API, carro);
  }

  editar(carro: Carro): Observable<Carro>{
    let params = new HttpParams().set('id', carro.id);
    return this.http.put<Carro>(this.API, {params: params});
  }

  delete(carro: Carro) {
    let params = new HttpParams().set('id', carro.id);
    return this.http.delete(this.API, {params: params});
  }
}
