import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoListaComponent } from './contato/contato-lista/contato-lista.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { PoModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './home/login/login.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { ProdutoListaComponent } from './produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoListaComponent,
    ContatoFormComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    UsuarioListaComponent,
    UsuarioFormComponent,
    ProdutoListaComponent,
    ProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PoModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
