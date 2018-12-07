import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './components/technologies/technologies.component';

const APP_ROUTES: Routes = [
    { path: 'Technologies', component: TechnologiesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Technologies' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
