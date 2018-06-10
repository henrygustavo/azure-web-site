import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const accountRoutes: ModuleWithProviders = RouterModule.forChild(routes);
