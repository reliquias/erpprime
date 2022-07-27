import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListaComponent } from './produto/produto-lista/produto-lista.component';
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
  },
  {
    path: 'login',
    component: LoginComponent
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
    path: 'produtos',
    component: ProdutoListaComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['guest', 'admin', 'user'] }
  },
  {
    path: 'newProduto',
    component: ProdutoFormComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['guest', 'admin', 'user'] }
  },
  {
    path: 'clientes',
    component: ClienteListaComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['guest', 'admin', 'user'] }
  },
  {
    path: 'newCliente',
    component: ClienteFormComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['guest', 'admin', 'user'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
