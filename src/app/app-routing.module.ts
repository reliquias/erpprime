import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListaComponent } from './contato/contato-lista/contato-lista.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contatos', component: ContatoListaComponent},
  {path: 'newContato', component: ContatoFormComponent},
  {path: 'usuarios', component: UsuarioListaComponent},
  {path: 'newUsuario', component: UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
