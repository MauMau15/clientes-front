import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/Cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {
      id: 1,
      nombre:'Mau',
      apellido:'Renero',
      createAt:'15-06-95',
      email:'mau@mail.com'
    },
    {
      id: 2,
      nombre: 'Javi',
      apellido:'Renero',
      createAt:'15-06-95',
      email:'mau@mail.com'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
