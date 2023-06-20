import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProdutoCarrinho } from '../produto/produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class checkoutComponent implements OnInit {
  itensCarrinho: ProdutoCarrinho[] =[];
  total = 0; 

  constructor(private auth:AuthenticationService, public carrinhoService: CarrinhoService) {}

  user:any;
  ngOnInit(): void {
    this.itensCarrinho = [];
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
    // Check status
    this.auth.status().subscribe((res)=>{
      console.log(res);
    })
    this.auth.user().subscribe((res)=>{
      this.user = res;
    }, (err) =>{
      console.log(err);
    })
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0)
  }

  finalizarPedido(){

  }

  
}
