import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Contato } from './../contato/contato';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contatoSelecionado: Contato;


  private readonly SERVER_URL = `${environment.API}contacts`;

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.SERVER_URL);
  }

  public postContacts(contato: FormData){
    return this.http.post<Contato>(this.SERVER_URL, contato);
  }

  public putContacts(contato: FormData, contatoId){
    return this.http.put<Contato>(this.SERVER_URL+'/'+ contatoId, contato);
  }

  public remove(contatoId){
    return this.http.delete(this.SERVER_URL + '/' +contatoId);
  }

}
