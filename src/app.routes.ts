import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home.component';
import { NotFoundComponent } from './components/pages/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
