import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BlankComponent } from './layout/blank/blank.component';
import { AuthModule } from '@auth0/auth0-angular';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot({
      domain: 'dev-acddag2p.us.auth0.com',
      clientId: 'z6SRkmw3AGX4AftU0vSVJdezFdwzpBTV'
    }),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BlankComponent
  ]
})
export class CoreModule { }
