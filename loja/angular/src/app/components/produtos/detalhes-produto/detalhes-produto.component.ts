import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto, ProdutoCarrinho } from '../../produto/produto';

//import { NotificacaoService } from './../../notificacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from '../../produto/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: Produto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    //private notificacaoService: NotificacaoService,
    private carrinhoSerice: CarrinhoService,
    private router:Router
    ){ }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produtoService.find(produtoId).subscribe((data: Produto)=>{
      this.produto = data;
    })
  }

  adicionarAoCarrinho(){
    const produto: ProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoSerice.adicionarAoCarrinho(produto);
    this.router.navigate(['/']);
  }

}
