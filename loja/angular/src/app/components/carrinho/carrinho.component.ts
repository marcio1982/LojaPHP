
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoCarrinho } from '../produto/produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: ProdutoCarrinho[] =[];
  total = 0; 
  retornoCep: any;
  cep!: Number;

  constructor(private http:HttpClient, public carrinhoService: CarrinhoService, private router: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  atualizaCarrinho(itens: ProdutoCarrinho[]){
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }
  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0)
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    this.router.navigate(['checkout']);
  }

  calcularFrete(cep: Number){
    this.http.get('https://viacep.com.br/ws/'+cep+'/json/').subscribe((data: any) =>{
      this.retornoCep = JSON.stringify(data);
    })

  }

 

}
