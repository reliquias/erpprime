import { Produto } from './../produto';
import { Router } from '@angular/router';
import { ProdutoService } from './../../services/produto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  formProduto: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
    ) {}


  ngOnInit(): void {
    this.createForm(this.produtoService.produtoSelecionado);
  }

  createForm(produto: Produto) {
    this.formProduto = this.formBuilder.group({
      id:[produto.id],
      codigo:[produto.codigo, [Validators.required]],
      nome: [produto.nome, [Validators.required]],
      descricao:[produto.descricao],
      preco: [produto.preco],
      quantidade: [produto.quantidade]
    })
  }

  adicionaOuAtualiza() {
    if(this.formProduto.value['id']){
      this.produtoService.putProduto(this.formProduto.value, this.formProduto.value['id'])
    .subscribe(data => {
      console.log(data.id);
    })
    }else{
      this.produtoService.postProduto(this.formProduto.value)
      .subscribe(data => {
        console.log(data.id);
      })
    }
    this.produtosList();
  }

  produtosList(){
    this.router.navigate(['produtos']);
  }
}
