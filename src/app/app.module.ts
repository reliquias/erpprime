import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContatoListaComponent } from './contato/contato-lista/contato-lista.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoListaComponent,
    ContatoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ContatoListaComponent,
    ContatoFormComponent
  ]
})
export class AppModule { }
