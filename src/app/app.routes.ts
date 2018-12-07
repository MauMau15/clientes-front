import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const APP_ROUTES: Routes = [
    { path: 'Technologies', component: TechnologiesComponent },
    { path: 'Clientes', component: ClientesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Clientes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
