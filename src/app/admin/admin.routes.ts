import {Route, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';

 const routes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

export const adminRoutes: ModuleWithProviders = RouterModule.forChild(routes);

