import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { APP_ROUTING } from './app.routes';

//services
import { ClientesServiceService } from './services/clientes-service.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';


//classes
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TechnologiesComponent,
    ClientesComponent,
    ClientesFormComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClientesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
