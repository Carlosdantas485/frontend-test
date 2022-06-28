import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components';
import { LoginService } from './service';

@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [
  
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
