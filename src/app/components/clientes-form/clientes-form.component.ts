import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/Cliente';
import { ClientesServiceService } from '../../services/clientes-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styles: []
})
export class ClientesFormComponent implements OnInit {
  private cliente:Cliente = new Cliente();
  
  constructor(private clienteService: ClientesServiceService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  public create():void{
    this.clienteService.createCliente(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente',`Cliente ${cliente.nombre} creado con éxito`,'success')
      }
    )
  }

  public cargarCliente():void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe(cliente => this.cliente = cliente)
      }
    })
  }

  public update():void{
    this.clienteService.update(this.cliente).subscribe(response => {
      this.router.navigate(['/clientes'])
      swal('Cliente Actualizado',`Cliente ${response.cliente.nombre} actualizado con éxito!`,'success')
    })
  }
}
