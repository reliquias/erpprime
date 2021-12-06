import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoDialogService, PoTableColumn} from '@po-ui/ng-components';

import { ContactService } from 'src/app/services/contact.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.component.html',
  styleUrls: ['./contato-lista.component.css']
})
export class ContatoListaComponent implements OnInit {

  contato: Contato;
  contatos: Contato[];

  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'Código', width: '5%'},
    { property: 'name', label: 'Nome', width: '35%'},
    { property: 'email', label: 'E-mail', width: '25%'},
    { property: 'phone', label: 'Phone', width: '25%'},
    { property: 'action', label: 'Action', type: 'icon', icons: [
      { icon: 'po-icon-edit', value: 'edit', action: this.editarContato.bind(this)}
      ,{ icon: 'po-icon-delete', value: 'remove', action: this.remove.bind(this)}
    ], width: '5%'}
  ];

  constructor(private contactService: ContactService
    ,private router: Router
    ,private poAlert: PoDialogService)
    {
      this.getContatos();
    }

  ngOnInit(): void {}

  getContatos(){
    this.contactService.getContacts().subscribe(
      (data) => {
        data.forEach(element => {
          element['action'] = ['edit', 'remove'];
        });
        this.contatos = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  novoContato(){
    this.contactService.contatoSelecionado = new Contato();
      this.router.navigate(['newContato']);
  }

  editarContato(contato: Contato){
    this.contactService.contatoSelecionado = contato;
    this.router.navigate(['newContato']);
  }

  remove(contato: Contato){
    this.poAlert.confirm({
      literals: { cancel: 'Cancela', confirm: 'Confirma'},
      title: 'Atenção!',
      message: 'Deseja realmente remover o contato ' + contato.name + ' ?',
      confirm: () => {
        this.contactService.remove(contato.id).subscribe(
          (data) => {
            this.getContatos();
          },
          (error) =>{
            console.log(error);
          }
        )
      }
    });
  }
}
