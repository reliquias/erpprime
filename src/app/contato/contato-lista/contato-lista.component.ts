import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoTableColumn} from '@po-ui/ng-components';
import { Action } from 'rxjs/internal/scheduler/Action';

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
      { icon: 'po-icon-export', value: 'remove', action: this.remove.bind(this)}
    ], width: '5%'}
  ];

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.getContatos();
  }

  ngOnChanges() {
    this.getContatos();
  }

  getContatos(){
    this.contactService.getContacts().subscribe(
      (data) => {
        data.forEach(element => {
          element['action'] = ['remove'];
        });
        this.contatos = data;
        console.log(this.contatos);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  novoContato(){
      this.router.navigate(['newContato']);
  }

  remove(contato: Contato){
    this.contactService.remove(contato.id).subscribe(
      (data) => {
        this.getContatos();
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}
