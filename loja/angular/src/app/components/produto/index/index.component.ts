import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  produtos: Produto[] = [];
 
  constructor(public produtoService: ProdutoService) { }


  ngOnInit(): void {
    this.produtoService.getAll().subscribe((data: Produto[])=>{
      this.produtos = data;
    })
  }

  deleteProduto(id){
    this.produtoService.delete(id).subscribe(res => {
         this.produtos = this.produtos.filter(item => item.id !== id);
         console.log('Produto deletado com sucesso!');
    })
  }

}
