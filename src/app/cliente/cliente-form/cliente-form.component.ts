import { Cliente } from './../cliente';
import { Router } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  formCliente: FormGroup;

  constructor(
     private formBuilder: FormBuilder
    ,private clienteService: ClienteService
    ,private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm(this.clienteService.clienteSelecionado);
  }

  createForm(cliente: Cliente){
    this.formCliente = this.formBuilder.group({
      id:[cliente.id],
      codigo:[cliente.codigo],
      name:[cliente.name],
      email:[cliente.email],
      phone:[cliente.phone]
    })
  }

  adicionaOuAtualiza() {
    if(this.formCliente.value['id']){
      this.clienteService.putCliente(this.formCliente.value, this.formCliente.value['id'])
    .subscribe(data => {
      console.log(data.id);
    })
    }else{
      this.clienteService.postCliente(this.formCliente.value)
      .subscribe(data => {
        console.log(data.id);
      })
    }
    this.clientesList();
  }

  clientesList(){
    this.router.navigate(['clientes']);
  }

}
