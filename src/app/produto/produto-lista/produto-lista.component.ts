import { Router } from '@angular/router';
import { PoDialogService, PoTableColumn } from '@po-ui/ng-components';
import { Produto } from './../produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  constructor(
      private produtoService: ProdutoService
     ,private router: Router
     ,private poAlert: PoDialogService)
  {
    this.getProdutos();
  }

  produto: Produto;
  produtos: Produto[];

  columns: Array<PoTableColumn> = this.getColunas();

  ngOnInit(): void {
  }

  getProdutos(){
    this.produtoService.getProdutos().subscribe(
      (data) => {
        data.forEach(element => {
          element['action'] = ['edit', 'remove'];
        });
        this.produtos = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  remove(produto: Produto){
    this.poAlert.confirm({
      literals: { cancel: 'Cancela', confirm: 'Confirma'},
      title: 'Atenção!',
      message: 'Deseja realmente remover o produto ' + produto.nome + ' ?',
      confirm: () => {
        this.produtoService.remove(produto.id).subscribe(
          (data) => {
            this.getProdutos();
          },
          (error) =>{
            console.log(error);
          }
        )
      }
    });
  }

  novoProduto(){
    this.produtoService.produtoSelecionado = new Produto();
      this.router.navigate(['newProduto']);
  }

  editarProduto(produto: Produto){
    this.produtoService.produtoSelecionado = produto;
    this.router.navigate(['newProduto']);
  }


  getColunas() : Array<PoTableColumn>{
    return [
      { property: 'codigo', label: 'Código', width: '5%'},
      { property: 'nome', label: 'Nome', width: '35%'},
      { property: 'preco', label: 'Preço', type: 'currency', format: 'BRL', width: '25%' },
      { property: 'quantidade', label: 'Quantidade', width: '25%'},
      { property: 'action', label: 'Action', type: 'icon', icons: [
        { icon: 'po-icon-edit', value: 'edit', action: this.editarProduto.bind(this)}
        ,{ icon: 'po-icon-delete', value: 'remove', action: this.remove.bind(this)}
      ], width: '5%'}
    ]
  }
}
