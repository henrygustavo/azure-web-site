import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {accountRoutes} from './account.routes';

@NgModule({
  imports: [
    CommonModule,
    accountRoutes
  ],
  declarations: [LoginComponent]
})
export class AccountModule { }
