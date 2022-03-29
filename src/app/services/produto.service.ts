import { Produto } from './../produto/produto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtoSelecionado: Produto;

  private readonly SERVER_URL = `${environment.API}produto`;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.SERVER_URL);
  }

  public postProduto(produto: FormData){
    return this.http.post<Produto>(this.SERVER_URL, produto);
  }

  public putProduto(produtoId, produto: FormData){
    return this.http.put<Produto>(this.SERVER_URL+'/'+ produtoId, produto);
  }

  public remove(produtoId){
    return this.http.delete(this.SERVER_URL + '/' + produtoId);
  }
}
