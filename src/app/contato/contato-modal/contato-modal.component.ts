import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { ContactService } from 'src/app/services/contact.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-contato-modal',
  templateUrl: './contato-modal.component.html',
  styleUrls: ['./contato-modal.component.css']
})
export class ContatoModalComponent implements OnInit {
  formContato: FormGroup;

  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Confirmar';

  constructor(public bsModalRef: BsModalRef
    ,private formBuilder: FormBuilder
    , private contactService: ContactService) { }

  ngOnInit(): void {
    this.createForm(new Contato());
  }

  onConfirm(){
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formContato.value);
    this.contactService.postContacts(this.formContato.value)
    .subscribe(data => {
      console.log(data.id);
    })
    this.bsModalRef.hide();
  }

  onClose(){
    this.bsModalRef.hide();
  }

  showModal(title:string, msg:string){

  }

  createForm(contato: Contato) {
    this.formContato = this.formBuilder.group({
      name: [contato.name],
      email:[contato.email],
      phone:[contato.phone]
    })
  }

}
