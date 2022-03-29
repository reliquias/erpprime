import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../usuario/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioSelecionado: Usuario;


  private readonly SERVER_URL = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.SERVER_URL);
  }

  public postUsers(usuario: FormData){
    return this.http.post<Usuario>(this.SERVER_URL, usuario);
  }

  public putUsers(usuarioId, usuario: FormData){
    return this.http.put<Usuario>(this.SERVER_URL+'/'+ usuarioId, usuario);
  }

  public remove(usuarioId){
    return this.http.delete(this.SERVER_URL + '/' + usuarioId);
  }

}
