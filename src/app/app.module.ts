import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DomService } from './domservice.service';
import { ModalService } from './modalservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    LoginComponent
  ],
  providers: [ModalService,DomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
