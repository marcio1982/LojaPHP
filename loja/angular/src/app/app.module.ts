import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { checkoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProdutoModule } from './components/produto/produto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//clsimport { ProdutosComponent } from './components/produtos/produtos.component';
//import { DetalhesProdutoComponent } from './components/produtos/detalhes-produto/detalhes-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    checkoutComponent,
    HomeComponent,
    LogoutComponent,
    CarrinhoComponent,

   // ProdutosComponent,
   // DetalhesProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProdutoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
