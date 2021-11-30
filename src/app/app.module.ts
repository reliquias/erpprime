import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoListaComponent } from './contato/contato-lista/contato-lista.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AppComponent,
    ContatoListaComponent,
    ContatoFormComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PoModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
