import { environment } from './../../environments/environment.prod';
import { Contato } from './../contato/contato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private readonly SERVER_URL = `${environment.API}contacts`;

  constructor(private http: HttpClient) { }

  public getContacts(){
    return this.http.get<Contato[]>(this.SERVER_URL);
  }

  public postContacts(contato: FormData){
    console.log(contato);
    return this.http.post<Contato>(this.SERVER_URL, contato);
  }


  public remove(contatoId){
    console.log(this.SERVER_URL + '/' +contatoId);
    return this.http.delete(this.SERVER_URL + '/' +contatoId);
  }

}
