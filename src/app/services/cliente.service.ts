import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Cliente } from './../cliente/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteSelecionado: Cliente;

  private readonly SERVER_URL = `${environment.API}cliente`;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.SERVER_URL);
  }

  public postCliente(cliente: FormData){
    return this.http.post<Cliente>(this.SERVER_URL, cliente);
  }

  public putCliente(clienteId, cliente: FormData){
    return this.http.put<Cliente>(this.SERVER_URL+'/'+ clienteId, cliente);
  }

  public remove(clienteId){
    return this.http.delete(this.SERVER_URL + '/' + clienteId);
  }
}
