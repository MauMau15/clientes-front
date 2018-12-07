import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  techs:any[] = [{
    name: 'html',
    pic: '../../../assets/img/html-logo.png',
    desc: 'HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup.'
  },{
    name: 'css3',
    pic: '../../../assets/img/css3-logo.png',
    desc: 'It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations.'
  },{
    name: 'bootstrap',
    pic: '../../../assets/img/bootstrap-logo.png',
    desc: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.'
  },{
    name: 'angular',
    pic: '../../../assets/img/angular-logo.jpg',
    desc: 'Angular turns your templates into code that is highly optimized for today is JavaScript virtual machines.'
  },{
    name: 'spring',
    pic: '../../../assets/img/spring-logo.png',
    desc: 'Reactive Spring represents a platform-wide initiative to deliver reactive support at every level of the development stack.'
  }];

  constructor() {
    console.log(this.techs);
  }

  ngOnInit() {
  }

}
