import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.getContatos();
  }

  getContatos(){
    this.contactService.getContacts().subscribe(
      (data) => {
        this.contatos = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  novoContato(){
      this.router.navigate(['newContato']);
    //this.modalService.showConfirm('Contato', 'Cadastre um novo contato');
  }

  remove(idContato){
    console.log(idContato);
    this.contactService.remove(idContato).subscribe(
      (data) => {
        console.log('Usuario ja era: ' + data);
        this.router.navigate(['contatos']);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}
