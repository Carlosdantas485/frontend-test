import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importal o modulo
import { LoginModule} from './login';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //importar o modulo 
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
