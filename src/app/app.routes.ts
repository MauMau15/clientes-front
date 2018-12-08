import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';

const APP_ROUTES: Routes = [
    { path: 'Technologies', component: TechnologiesComponent },
    { path: 'Clientes', component: ClientesComponent },
    { path: 'Registrar-Cliente', component:  ClientesFormComponent},
    { path: 'Registrar-Cliente/:id', component:  ClientesFormComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'Clientes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
