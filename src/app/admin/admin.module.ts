import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminRoutes } from './admin.routes';

@NgModule({
  imports: [
    CommonModule,
    adminRoutes
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }

