import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;
  user:any;
  someSubscription: any;
  constructor(private auth:AuthenticationService, private router:Router, public carrinhoService: CarrinhoService, public produtoService: ProdutoService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = true;
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
   
    this.user = null;
    this.auth.status().subscribe((res) => {
      this.loggedIn = res;
      const user: any = localStorage.getItem('user');
      this.user = JSON.parse(user);
    }, (err) => {
      console.log(err);
    });
  }
  
  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }



}
