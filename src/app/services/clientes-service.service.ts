import { Injectable } from '@angular/core';
import { CLIENTES } from '../data/clientes.json';
import { Cliente } from '../classes/Cliente';
//import { Observable } from 'rxjs/Observable'; for a5 or less
//import { of } from 'rxjs/Observable/of';

//import { Observable } from 'rxjs'; only obserable
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  clientes:Cliente[] =  CLIENTES;
  private urlEndPoint:string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient:HttpClient) { 
    console.log('servicio Cliente listo');
  }

  /*getClientes(): Observable<Cliente[]>{
    return of(this.clientes);
  }*/

  /*getClientes(): Cliente[]{
    return this.clientes;
  }*/

  /*getClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.urlEndPoint);
  }*/

  getClientes():Observable<Cliente[]>{
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(
        response => response as Cliente[]
      )
    );
  }

  createCliente(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.urlEndPoint,cliente,{headers:this.httpHeaders});
  }

  getCliente(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.httpHeaders});
  }

  delete(id:number):Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}
