import { Produto, produtos } from '../components/produto/produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[] = produtos;
  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
