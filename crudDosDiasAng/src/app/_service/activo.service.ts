import { Activo } from './../_model/activo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  laptopCambio = new Subject<Activo[]>();
  mensajeCambio = new Subject<string>();
  url: string = 'http://localhost:8080/activo/'


  constructor(private http: HttpClient) { }
  
 listar(){
   return this.http.get<Activo[]>(this.url);
   }
   
}