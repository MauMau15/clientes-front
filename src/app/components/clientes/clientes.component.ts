import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/Cliente';
import { ClientesServiceService } from '../../services/clientes-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  
  constructor(private clientesService:ClientesServiceService, private router:Router) { }

  ngOnInit() {
    //this.clientes = this.clientesService.getClientes();
    this.clientesService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      }
    );

    //console.log(this.clientes.length);
    
  }

  public delete(cliente:Cliente):void{
    swal({
      title: 'Estás seguro?',
      text: "No podrás revertir los cambios!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.value) {
        this.clientesService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          
          }
        )
        
      }
    })
  }
}
