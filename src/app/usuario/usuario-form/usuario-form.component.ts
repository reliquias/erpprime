import { Usuario } from './../usuario';
import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  formUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm(this.usuarioService.usuarioSelecionado);
  }

  adicionaOuAtualiza() {
    if(this.formUsuario.value['id']){
      console.log('é update');
      this.usuarioService.putUsers(this.formUsuario.value['id'], this.formUsuario.value)
    .subscribe(data => {
      console.log(data.id);
    })
    }else{
      this.usuarioService.postUsers(this.formUsuario.value)
      .subscribe(data => {
        console.log(data.id);
      })
    }
    this.usuariosList();
  }

  usuariosList(){
    this.router.navigate(['usuarios']);
  }

  createForm(usuario: Usuario) {
    console.log('usuario.roleUser: ' + usuario.roleUser);
    this.formUsuario = this.formBuilder.group({
      id:[usuario.id],
      name: [usuario.name, [Validators.required]],
      email:[usuario.email],
      phone:[usuario.phone],
      password:[usuario.password],
      confirmar:[usuario.password],
      roleUser:[usuario.roleUser]
    })
  }
}
