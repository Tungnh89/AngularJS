import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: '',redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'listProduct', component: ProductListComponent},
  { path: 'addProduct', component: ProductAddComponent},
  { path: 'detailProduct/:id', component: ProductDetailComponent},
  { path: 'editProduct/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
