
import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from '../components/produto/produto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: ProdutoCarrinho[] = [];

  constructor(private router:Router) { }

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itens;
  }

  adicionarAoCarrinho(produto: ProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
    ///route
    //this.router.navigate(['/index']);
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
