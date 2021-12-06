import { PoDialogService, PoTableColumn } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService
    ,private router: Router
    ,private poAlert: PoDialogService)
    {
      this.getUsuarios();
    }

  usuario: Usuario;
  usuarios: Usuario[];

  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'Código', width: '5%'},
    { property: 'name', label: 'Nome', width: '35%'},
    { property: 'email', label: 'E-mail', width: '25%'},
    { property: 'phone', label: 'Phone', width: '25%'},
    { property: 'action', label: 'Action', type: 'icon', icons: [
      { icon: 'po-icon-edit', value: 'edit', action: this.editarUsuario.bind(this)}
      ,{ icon: 'po-icon-delete', value: 'remove', action: this.remove.bind(this)}
    ], width: '5%'}
  ];

  ngOnInit(): void {}

  getUsuarios(){
    this.usuarioService.getUsers().subscribe(
      (data) => {
        data.forEach(element => {
          element['action'] = ['edit', 'remove'];
        });
        this.usuarios = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  novoUsuario(){
    this.usuarioService.usuarioSelecionado = new Usuario();
      this.router.navigate(['newUsuario']);
  }

  editarUsuario(usuario: Usuario){
    this.usuarioService.usuarioSelecionado = usuario;
    this.router.navigate(['newUsuario']);
  }

  remove(usuario: Usuario){
    this.poAlert.confirm({
      literals: { cancel: 'Cancela', confirm: 'Confirma'},
      title: 'Atenção!',
      message: 'Deseja realmente remover o usuario ' + usuario.name + ' ?',
      confirm: () => {
        this.usuarioService.remove(usuario.id).subscribe(
          (data) => {
            this.getUsuarios();
          },
          (error) =>{
            console.log(error);
          }
        )
      }
    });
  }
}
