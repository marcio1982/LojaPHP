import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'produto', redirectTo: 'produto/index', pathMatch: 'full'},
  { path: 'produto/index', component: IndexComponent },
  { path: 'produto/create', component: CreateComponent },
  { path: 'produto/edit/:idProduto', component: EditComponent } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
