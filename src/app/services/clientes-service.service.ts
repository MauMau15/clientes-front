import { Injectable } from '@angular/core';
import { CLIENTES } from '../data/clientes.json';
import { Cliente } from '../classes/Cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  clientes:Cliente[] =  CLIENTES;

  constructor() { 
    console.log('servicio Cliente listo');
  }

  getClientes():Cliente[]{
    return this.clientes;
    console.log(this.clientes);
  }
}
