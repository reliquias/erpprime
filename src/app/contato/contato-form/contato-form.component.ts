import { ContactService } from 'src/app/services/contact.service';
import { Contato } from './../contato';
import { Component, OnInit } from '@angular/core';
import  {  FormsModule, FormBuilder,  FormGroup  }  from  '@angular/forms';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {
  formContato: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.createForm(new Contato());
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formContato.value);
    this.contactService.postContacts(this.formContato.value)
    .subscribe(data => {
      console.log(data.id);
    })

    // chamando a função createForm para limpar os campos na tela
    this.createForm(new Contato());
  }

  createForm(contato: Contato) {
    this.formContato = this.formBuilder.group({
      name: [contato.name],
      email:[contato.email],
      phone:[contato.phone]
    })
  }

}
