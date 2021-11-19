import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.component.html',
  styleUrls: ['./contato-lista.component.css'],
  preserveWhitespaces: true
})
export class ContatoListaComponent implements OnInit {

  contato: Contato;
  contatos: Contato[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      (data) => {
        this.contatos = data;
        console.log(JSON.stringify(data));
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}
