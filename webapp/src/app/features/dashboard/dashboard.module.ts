import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    HomeComponent, 
  ],
  imports: [
    CommonModule,    
    DashboardRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class DashboardModule { }
