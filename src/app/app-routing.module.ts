import { HomeComponent } from './home/home/home.component';
import { ContatoFormComponent } from './contato/contato-form/contato-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListaComponent } from './contato/contato-lista/contato-lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contatos', component: ContatoListaComponent},
  {path: 'newContato', component: ContatoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
