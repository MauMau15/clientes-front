import { Injectable } from '@angular/core';
import { CLIENTES } from '../data/clientes.json';
import { Cliente } from '../classes/Cliente';
//import { Observable } from 'rxjs/Observable'; for a5 or less
//import { of } from 'rxjs/Observable/of';

//import { Observable } from 'rxjs'; only obserable
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import swal from 'sweetalert2';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  clientes:Cliente[] =  CLIENTES;
  private urlEndPoint:string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient:HttpClient, private router:Router) { 
    console.log('servicio Cliente listo');
  }

  getClientes():Observable<Cliente[]>{
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(
        response => response as Cliente[]
      )
    );
  }

  createCliente(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.urlEndPoint,cliente,{headers:this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal('Erro al crear al cliente', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  getCliente(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(
        (e) => {
          this.router.navigate(['/clientes']);
          console.error(e.error.mensaje);
          swal('Error al editar',e.error.mensaje,'error');
          return throwError(e);
        }
      )
    )
  }

  update(cliente:Cliente):Observable<any>{
    return this.httpClient.put<any>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers: this.httpHeaders}).pipe(
      catchError(
        (e) => {
          console.error(e.error.mensaje);
          swal('Error al actualizar el cliente',e.error.mensaje,'error');
          return throwError(e);
        }
      )
    );
  }

  delete(id:number):Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders}).pipe(
      catchError(
        e => {
          console.error(e.error.mensaje);
          swal('Error al eliminar el cliente',e.error.mensaje,'error');
          return throwError(e);
        }
      )
    );
  }
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