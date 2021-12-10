import { RoleGuardService } from './services/role-guard.service';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListaComponent } from './contato/contato-lista/contato-lista.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contatos',
    component: ContatoListaComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['guest', 'admin', 'user'] }
  },
  {
    path: 'newContato',
    component: ContatoFormComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['guest', 'admin', 'user'] }
  },
  {
    path: 'usuarios',
    component: UsuarioListaComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['admin'] }
  },
  {
    path: 'newUsuario',
    component: UsuarioFormComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['admin'] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
