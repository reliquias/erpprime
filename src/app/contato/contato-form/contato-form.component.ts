import { ContactService } from 'src/app/services/contact.service';
import { Contato } from './../contato';
import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {
  formContato: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm(this.contactService.contatoSelecionado);
  }

  adicionaOuAtualiza() {
    if(this.formContato.value['id']){
      this.contactService.putContacts(this.formContato.value, this.formContato.value['id'])
    .subscribe(data => {
      console.log(data.id);
    })
    }else{
      this.contactService.postContacts(this.formContato.value)
      .subscribe(data => {
        console.log(data.id);
      })
    }
    this.contatosList();
  }

  contatosList(){
    this.router.navigate(['contatos']);
  }

  createForm(contato: Contato) {
    this.formContato = this.formBuilder.group({
      id:[contato.id],
      name: [contato.name, [Validators.required]],
      email:[contato.email],
      phone:[contato.phone]
    })
  }

}
