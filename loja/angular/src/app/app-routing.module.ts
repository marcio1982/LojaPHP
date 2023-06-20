import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkoutComponent } from './components/checkout/checkout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { DetalhesProdutoComponent } from './components/produtos/detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'checkout', component: checkoutComponent, canActivate:[AuthGuard]},
  //{path: 'produtos', component: ProdutosComponent},
  {path: 'detalhes-produto', component: DetalhesProdutoComponent},
  { path: 'produtos', loadChildren: () => import('./components/produtos/produtos.module').then(m => m.ProdutosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
