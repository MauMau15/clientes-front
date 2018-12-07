import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public autor:any;

  constructor() { 
    this.autor = {
      nombre: "Mauricio Renero",
      repo: "https://github.com/MauMau15/clientes-front"
    };

    console.log('footer works');
    console.log(this.autor);
  }

  ngOnInit() {
  }

}
