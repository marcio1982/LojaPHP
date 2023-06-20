import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bodyText: String = '';
  bodyTextTitulo: String = '';
  produtoID: Number = 0;

  produtos: Produto[] = [];
  descricao = '';
  
  constructor(public produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getAll().subscribe((data: Produto[])=>{
      this.produtos = data;
    })
  }

  detalhesProduto(descricao: String, titulo: String, idProduto: number) {
    this.bodyText = descricao;
    this.bodyTextTitulo = titulo;
    this.produtoID = idProduto;
  } 

  deleteProduto(id){
    /*this.produtoService.delete(id).subscribe(res => {
         this.produtos = this.produtos.filter(item => item.id !== id);
         console.log('Produto deleted successfully!');
    })*/
  }
  addProduto(id){

  }

  pesquisar(){
    
    if (this.descricao) {
      this.produtoService.search(this.descricao).subscribe((data: Produto[])=>{
        this.produtos = data;
      })
    }else{
      this.produtoService.getAll().subscribe((data: Produto[])=>{
        this.produtos = data;
      })
    }
  }
}
