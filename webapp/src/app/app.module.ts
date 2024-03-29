import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
