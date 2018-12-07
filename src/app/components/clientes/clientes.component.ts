import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/Cliente';
import { ClientesServiceService } from '../../services/clientes-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  
  constructor(private clientesService:ClientesServiceService) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
}
