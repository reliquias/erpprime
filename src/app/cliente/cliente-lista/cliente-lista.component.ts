import { PoDialogService } from '@po-ui/ng-components';
import { Cliente } from './../cliente';
import { Router } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  constructor(
     private clienteService :ClienteService
    ,private router: Router
    ,private poAlert: PoDialogService
    )
    {
      this.getClientes();
    }

  cliente: Cliente;
  clientes: Cliente[];

  ngOnInit(): void {
  }

  getClientes(){
    this.clienteService.getClientes().subscribe(
      (data) => {
        data.forEach(element => {
          element['action'] = ['edit', 'remove'];
        });
        this.clientes = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  novoCliente(){
    this.clienteService.clienteSelecionado = new Cliente();
    this.router.navigate(["newCliente"]);
  }

  editar(cliente: Cliente){
    console.table(cliente);
    this.clienteService.clienteSelecionado = cliente;
    this.router.navigate(['newCliente']);
  }

  remove(cliente: Cliente){
    this.poAlert.confirm({
      literals: { cancel: 'Cancela', confirm: 'Confirma'},
      title: 'Atenção!',
      message: 'Deseja realmente remover o cliente ' + cliente.name + ' ?',
      confirm: () => {
        this.clienteService.remove(cliente.id).subscribe(
          (data) => {
            this.getClientes();
          },
          (error) =>{
            console.log(error);
          }
        )
      }
    });
  }
}
